import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

// Declare process global for environments without @types/node
declare const process: any

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/**
 * Configuration for the GraphQL client file builder
 */
interface BuildConfig {
  /** Source directory containing type folders */
  srcDir: string
  /** Destination directory for built GraphQL files */
  distDir: string
  /** File extensions to copy */
  extensions: string[]
  /** Whether to create TypeScript declaration files */
  generateDeclarations: boolean
  /** Whether to generate TypeScript index files */
  generateIndexFiles: boolean
}

/**
 * Information about a discovered GraphQL file
 */
interface GraphQLFile {
  /** Full path to the source file */
  sourcePath: string
  /** Relative path from the type's client directory */
  relativePath: string
  /** Type/category name (e.g., 'publications', 'people') */
  typeName: string
  /** File name without extension */
  fileName: string
  /** File extension */
  extension: string
}

/**
 * Default configuration for the build process
 */
const defaultConfig: BuildConfig = {
  srcDir: path.resolve(__dirname, "../src"),
  distDir: path.resolve(__dirname, "../dist/graphql/client"),
  extensions: [".gql", ".graphql"],
  generateDeclarations: false, // Disabled since pinia plugin imports .gql files directly
  generateIndexFiles: false, // Disabled since pinia plugin imports .gql files directly
}

/**
 * Ensures a directory exists, creating it recursively if needed
 */
function ensureDir(dir: string): void {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

/**
 * Discovers all GraphQL client files in the source directory
 */
function discoverGraphQLFiles(
  srcDir: string,
  extensions: string[]
): GraphQLFile[] {
  const files: GraphQLFile[] = []

  try {
    const typeDirectories = fs
      .readdirSync(srcDir, { withFileTypes: true })
      .filter((dirent: any) => dirent.isDirectory())
      .map((dirent: any) => dirent.name)

    for (const typeName of typeDirectories) {
      const clientDir = path.join(srcDir, typeName, "graphql", "client")

      if (!fs.existsSync(clientDir)) {
        console.log(
          `⚠️  No client GraphQL directory found for type: ${typeName}`
        )
        continue
      }

      const clientFiles = fs
        .readdirSync(clientDir, { withFileTypes: true })
        .filter((dirent: any) => dirent.isFile())
        .filter((dirent: any) =>
          extensions.some((ext) => dirent.name.endsWith(ext))
        )

      for (const file of clientFiles) {
        const sourcePath = path.join(clientDir, file.name)
        const extension = path.extname(file.name)
        const fileName = path.basename(file.name, extension)

        files.push({
          sourcePath,
          relativePath: file.name,
          typeName,
          fileName,
          extension,
        })
      }
    }
  } catch (error) {
    console.error(`❌ Error discovering GraphQL files:`, error)
    throw error
  }

  return files
}

/**
 * Copies a GraphQL file to the destination directory
 */
function copyGraphQLFile(file: GraphQLFile, destDir: string): void {
  const typeDestDir = path.join(destDir, file.typeName)
  ensureDir(typeDestDir)

  const destPath = path.join(typeDestDir, file.relativePath)

  try {
    fs.copyFileSync(file.sourcePath, destPath)
    console.log(`✅ Copied: ${file.typeName}/${file.relativePath}`)
  } catch (error) {
    console.error(`❌ Failed to copy ${file.sourcePath}:`, error)
    throw error
  }
}

/**
 * Generates TypeScript declaration file for a GraphQL file
 */
function generateDeclarationFile(file: GraphQLFile, destDir: string): void {
  const typeDestDir = path.join(destDir, file.typeName)
  ensureDir(typeDestDir)

  const declarationPath = path.join(typeDestDir, `${file.fileName}.d.ts`)

  // Read the GraphQL content to extract operation names
  const content = fs.readFileSync(file.sourcePath, "utf-8")
  const operationMatches =
    content.match(/(query|mutation|subscription)\s+(\w+)/g) || []

  let declarationContent = `/**
 * TypeScript declarations for ${file.relativePath}
 * Generated automatically - do not edit manually
 */

declare const graphqlDocument: string
export default graphqlDocument

`

  // Add operation name exports if found
  if (operationMatches.length > 0) {
    declarationContent += `// Operation names found in this document:\n`
    operationMatches.forEach((match: string) => {
      const matchResult = match.match(/(query|mutation|subscription)\s+(\w+)/)
      if (matchResult) {
        const [, operationType, operationName] = matchResult
        if (operationName) {
          declarationContent += `// - ${operationType}: ${operationName}\n`
        }
      }
    })
  }

  try {
    fs.writeFileSync(declarationPath, declarationContent)
    console.log(
      `📝 Generated declaration: ${file.typeName}/${file.fileName}.d.ts`
    )
  } catch (error) {
    console.error(
      `❌ Failed to generate declaration for ${file.sourcePath}:`,
      error
    )
    throw error
  }
}

/**
 * Generates an index file for each type directory
 */
function generateTypeIndex(
  typeName: string,
  files: GraphQLFile[],
  destDir: string
): void {
  const typeDestDir = path.join(destDir, typeName)
  const indexPath = path.join(typeDestDir, "index.ts")

  let indexContent = `/**
 * GraphQL client operations for ${typeName}
 * Generated automatically - do not edit manually
 */

`

  // Group files by operation type
  const queries = files.filter((f) => f.fileName.includes("query"))
  const mutations = files.filter((f) => f.fileName.includes("mutation"))
  const subscriptions = files.filter((f) => f.fileName.includes("subscription"))

  const addExports = (fileList: GraphQLFile[], sectionName: string) => {
    if (fileList.length > 0) {
      indexContent += `// ${sectionName}\n`
      fileList.forEach((file) => {
        const exportName = file.fileName
          .replace(/^(query|mutation|subscription)\./, "")
          .replace(/\./g, "_")
          .toUpperCase()
        indexContent += `export { default as ${exportName} } from "./${file.fileName}.gql"\n`
      })
      indexContent += "\n"
    }
  }

  addExports(queries, "Queries")
  addExports(mutations, "Mutations")
  addExports(subscriptions, "Subscriptions")

  try {
    fs.writeFileSync(indexPath, indexContent)
    console.log(`📦 Generated index: ${typeName}/index.ts`)
  } catch (error) {
    console.error(`❌ Failed to generate index for ${typeName}:`, error)
    throw error
  }
}

/**
 * Generates a main index file for all types
 */
function generateMainIndex(typeNames: string[], destDir: string): void {
  const indexPath = path.join(destDir, "index.ts")

  let indexContent = `/**
 * GraphQL client operations - Main index
 * Generated automatically - do not edit manually
 */

`

  typeNames.forEach((typeName) => {
    indexContent += `export * as ${typeName} from "./${typeName}"\n`
  })

  try {
    fs.writeFileSync(indexPath, indexContent)
    console.log(`📦 Generated main index: index.ts`)
  } catch (error) {
    console.error(`❌ Failed to generate main index:`, error)
    throw error
  }
}

/**
 * Main build function
 */
export function buildClientGraphQL(config: Partial<BuildConfig> = {}): void {
  const finalConfig = { ...defaultConfig, ...config }

  console.log("🚀 Starting GraphQL client build process...")
  console.log(`📂 Source directory: ${finalConfig.srcDir}`)
  console.log(`📦 Destination directory: ${finalConfig.distDir}`)
  console.log(`🔍 Extensions: ${finalConfig.extensions.join(", ")}`)

  // Ensure destination directory exists
  ensureDir(finalConfig.distDir)

  // Discover all GraphQL files
  console.log("\n🔍 Discovering GraphQL files...")
  const graphqlFiles = discoverGraphQLFiles(
    finalConfig.srcDir,
    finalConfig.extensions
  )

  if (graphqlFiles.length === 0) {
    console.log("⚠️  No GraphQL files found!")
    return
  }

  console.log(
    `📊 Found ${graphqlFiles.length} GraphQL files across ${
      new Set(graphqlFiles.map((f) => f.typeName)).size
    } types`
  )

  // Copy files and generate declarations
  console.log("\n📋 Copying files...")
  const typeNames = new Set<string>()

  for (const file of graphqlFiles) {
    typeNames.add(file.typeName)
    copyGraphQLFile(file, finalConfig.distDir)

    if (finalConfig.generateDeclarations) {
      generateDeclarationFile(file, finalConfig.distDir)
    }
  }

  // Generate index files for each type (only if enabled)
  if (finalConfig.generateIndexFiles) {
    console.log("\n📝 Generating index files...")
    for (const typeName of typeNames) {
      const typeFiles = graphqlFiles.filter((f) => f.typeName === typeName)
      generateTypeIndex(typeName, typeFiles, finalConfig.distDir)
    }

    // Generate main index file
    generateMainIndex(Array.from(typeNames), finalConfig.distDir)
  } else {
    console.log("\n⏭️  Skipping index file generation (disabled in config)")
  }

  console.log("\n✨ GraphQL client build completed successfully!")
  console.log(`📊 Summary:`)
  console.log(`   • ${graphqlFiles.length} GraphQL files processed`)
  console.log(`   • ${typeNames.size} type categories`)
  console.log(`   • Files organized in: ${finalConfig.distDir}`)
}

// Execute if run directly
if (
  typeof process !== "undefined" &&
  import.meta.url === `file://${process.argv[1]}`
) {
  try {
    buildClientGraphQL()
  } catch (error) {
    console.error("💥 Build failed:", error)
    if (typeof process !== "undefined") {
      process.exit(1)
    }
  }
}

// buildClientGraphQL()
