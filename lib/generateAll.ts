import { spawn } from "child_process"
import { fileURLToPath } from "url"
import path from "path"

// Declare process global and other types for environments without @types/node
declare const process: any

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/**
 * Task execution result
 */
interface TaskResult {
  name: string
  success: boolean
  duration: number
  output: string[]
  errors: string[]
}

/**
 * Overall generation statistics
 */
interface GenerationStats {
  totalDuration: number
  tasks: TaskResult[]
  successCount: number
  errorCount: number
}

/**
 * Executes a script and captures output
 */
function executeScript(
  scriptPath: string,
  taskName: string
): Promise<TaskResult> {
  return new Promise((resolve) => {
    const startTime = Date.now()
    const output: string[] = []
    const errors: string[] = []

    console.log(`🔄 ${taskName}...`)

    const child = spawn("npx", ["tsx", scriptPath], {
      cwd: path.dirname(__dirname),
      stdio: ["pipe", "pipe", "pipe"],
    })

    child.stdout?.on("data", (data: any) => {
      const lines = data
        .toString()
        .split("\n")
        .filter((line: string) => line.trim())
      lines.forEach((line: string) => {
        output.push(line)
        console.log(`   ${line}`)
      })
    })

    child.stderr?.on("data", (data: any) => {
      const lines = data
        .toString()
        .split("\n")
        .filter((line: string) => line.trim())
      lines.forEach((line: string) => {
        errors.push(line)
        console.log(`   ⚠️  ${line}`)
      })
    })

    child.on("close", (code: any) => {
      const duration = Date.now() - startTime
      const success = code === 0

      console.log(
        `   ${success ? "✅" : "❌"} ${taskName} ${
          success ? "completed" : "failed"
        } (${duration}ms)`
      )

      resolve({
        name: taskName,
        success,
        duration,
        output,
        errors,
      })
    })
  })
}

/**
 * Extracts key metrics from task output
 */
function extractMetrics(result: TaskResult): string {
  const { output } = result

  switch (result.name) {
    case "Generate Modules":
      const moduleMatches = output
        .join(" ")
        .match(/Successfully generated: (\d+)\/(\d+) modules/)
      if (moduleMatches) {
        return `${moduleMatches[1]}/${moduleMatches[2]} modules`
      }
      const moduleCount = output.filter((line) =>
        line.includes("✅ Module")
      ).length
      return moduleCount > 0 ? `${moduleCount} modules` : "Unknown count"

    case "Generate Schemas":
      const schemaSuccess = output.some((line) =>
        line.includes("✅ Schemas generated successfully")
      )
      if (schemaSuccess) {
        return "2 schemas + resolvers"
      }
      return "Schema generation status unknown"

    case "Generate GraphQL Client":
      const clientMatch = output
        .join(" ")
        .match(/(\d+) GraphQL files processed/)
      const typeMatch = output.join(" ").match(/(\d+) type categories/)
      if (clientMatch && typeMatch) {
        return `${clientMatch[1]} files, ${typeMatch[1]} types`
      }
      return "GraphQL client status unknown"

    default:
      return "Status unknown"
  }
}

/**
 * Main generation orchestrator
 */
export async function generateAll(): Promise<void> {
  const overallStartTime = Date.now()
  const stats: GenerationStats = {
    totalDuration: 0,
    tasks: [],
    successCount: 0,
    errorCount: 0,
  }

  console.log("🚀 Starting unified generation process...")
  console.log("=".repeat(60))

  // Define tasks to execute
  const tasks = [
    { script: "lib/generate.ts", name: "Generate Modules" },
    { script: "lib/buildSchemas.ts", name: "Generate Schemas" },
    { script: "lib/buildClientGraphQL.ts", name: "Generate GraphQL Client" },
  ]

  // Execute tasks sequentially
  for (const task of tasks) {
    const result = await executeScript(task.script, task.name)
    stats.tasks.push(result)

    if (result.success) {
      stats.successCount++
    } else {
      stats.errorCount++
    }
  }

  // Calculate total duration
  stats.totalDuration = Date.now() - overallStartTime

  // Display unified summary
  console.log("\n" + "=".repeat(60))
  console.log("📊 GENERATION SUMMARY")
  console.log("=".repeat(60))

  console.log(`🕐 Total Duration: ${stats.totalDuration}ms`)
  console.log(
    `� Success Rate: ${stats.successCount}/${tasks.length} tasks completed`
  )

  if (stats.successCount > 0) {
    console.log("\n✅ Completed Tasks:")
    stats.tasks
      .filter((task) => task.success)
      .forEach((task) => {
        const metrics = extractMetrics(task)
        console.log(`   • ${task.name}: ${metrics} (${task.duration}ms)`)
      })
  }

  if (stats.errorCount > 0) {
    console.log("\n❌ Failed Tasks:")
    stats.tasks
      .filter((task) => !task.success)
      .forEach((task) => {
        console.log(`   • ${task.name}: Failed (${task.duration}ms)`)
        if (task.errors.length > 0) {
          console.log(`     Errors: ${task.errors.slice(0, 3).join(", ")}`)
        }
      })
  }

  // Overall status
  if (stats.errorCount === 0) {
    console.log("\n🎉 All generation tasks completed successfully!")
  } else if (stats.successCount > 0) {
    console.log("\n⚠️  Generation completed with some errors")
  } else {
    console.log("\n💥 Generation failed - no tasks completed successfully")
  }

  console.log("=".repeat(60))
}

// Execute if run directly
if (
  typeof process !== "undefined" &&
  import.meta.url === `file://${process.argv[1]}`
) {
  try {
    await generateAll()
  } catch (error) {
    console.error("💥 Generation orchestrator failed:", error)
    if (typeof process !== "undefined") {
      process.exit(1)
    }
  }
}
