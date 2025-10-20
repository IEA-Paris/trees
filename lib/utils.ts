import fs from "fs"
import path from "path"

/**
 * Extract type definitions from a TypeScript source file
 */
function extractTypeDefinitions(sourceFilePath: string): string {
  if (!fs.existsSync(sourceFilePath)) {
    return "// Type definitions not found"
  }

  const content = fs.readFileSync(sourceFilePath, "utf-8")
  const lines = content.split("\n")
  const typeDefinitions: string[] = []
  let inInterface = false
  let inEnum = false
  let braceCount = 0

  for (const line of lines) {
    // Start of interface or enum
    if (line.match(/^export\s+(interface|enum)\s+/)) {
      inInterface = line.includes("interface")
      inEnum = line.includes("enum")
      typeDefinitions.push(line)
      braceCount =
        (line.match(/{/g) || []).length - (line.match(/}/g) || []).length
      continue
    }

    // Inside interface or enum
    if (inInterface || inEnum) {
      typeDefinitions.push(line)
      braceCount +=
        (line.match(/{/g) || []).length - (line.match(/}/g) || []).length

      if (braceCount <= 0) {
        inInterface = false
        inEnum = false
        typeDefinitions.push("") // Add blank line after definition
      }
    }
  }

  return typeDefinitions.join("\n").trim()
}

export function createJsonFile(
  type: string,
  module: any,
  append: string = ""
): void {
  const distPath = path.resolve("./dist" + append)

  if (!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath, { recursive: true })
  }

  const filePath = path.join(distPath, `${type}.js`)
  const dtsFilePath = path.join(distPath, `${type}.d.ts`)

  // Generate immutable export with deep freeze
  const freezeCode = `// Deep freeze utility to make exports immutable
const deepFreeze = (obj) => {
  Object.freeze(obj);
  Object.getOwnPropertyNames(obj).forEach(prop => {
    if (obj[prop] !== null
      && (typeof obj[prop] === "object" || typeof obj[prop] === "function")
      && !Object.isFrozen(obj[prop])) {
      deepFreeze(obj[prop]);
    }
  });
  return obj;
};

const data = ${JSON.stringify(module, null, 2)};

export default deepFreeze(data);
`

  fs.writeFileSync(filePath, freezeCode)

  // Generate TypeScript declaration file with inline types
  const relativeDepth = append.split("/").filter(Boolean).length
  const indexImport = "../".repeat(relativeDepth + 1) + "index"

  // Get source type definitions
  const sourceFilePath = path.resolve(`./src/${type}/models/${type}.ts`)
  const typeDefinitions = extractTypeDefinitions(sourceFilePath)

  // Convert module name to PascalCase for interface name (e.g., "events" -> "Events")
  const typeName = type.charAt(0).toUpperCase() + type.slice(1)

  let dtsContent = ""
  if (append === "/form") {
    dtsContent = `import type { Form } from "${indexImport}"

// Inline type definitions
${typeDefinitions}

export interface FormModule {
  _defaults: Record<string, any>
  schema: Record<string, Form>
}

declare const data: FormModule
export default data
`
  } else if (append === "/list") {
    dtsContent = `import type { Sort, Views } from "${indexImport}"

// Inline type definitions  
${typeDefinitions}

export interface ListModule {
  items: ${typeName}[]
  itemsPerPage?: number
  itemsPerPageArray?: number[]
  filtersCount: number
  views?: Record<string, Views>
  sort: Record<string, Sort>
  view?: Views | string
  filters: Record<string, any>
  limit?: number
  sortBy?: string[]
  sortDesc?: number[]
}

declare const data: ListModule
export default data
`
  } else {
    dtsContent = `declare const data: any
export default data
`
  }

  fs.writeFileSync(dtsFilePath, dtsContent)
}
export const mapEnum = (arg: Object) =>
  Object.keys(arg)
    .filter((key) => isNaN(Number(key))) // Filter out numeric keys
    .map((key) => key) // Cast to string array
