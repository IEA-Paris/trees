import { loadFilesSync } from "@graphql-tools/load-files"
import { mergeTypeDefs } from "@graphql-tools/merge"
import {
  print,
  visit,
  type DocumentNode,
  type ObjectTypeDefinitionNode,
} from "graphql"
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

function ensureDir(dir: string): void {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

function loadGraphQLFiles(baseDir: string, patterns: string[]): string[] {
  const files: string[] = []
  const directories = fs.readdirSync(baseDir, { withFileTypes: true })

  directories.forEach((dirent) => {
    const fullPath = path.join(baseDir, dirent.name)

    if (dirent.isDirectory()) {
      files.push(...loadGraphQLFiles(fullPath, patterns))
    } else if (patterns.some((pattern) => dirent.name.startsWith(pattern))) {
      files.push(fullPath)
    }
  })

  return files
}

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const OUTPUT_DIR = path.join(__dirname, "../dist/graphql/schemas/")
ensureDir(OUTPUT_DIR)

const APEX_SCHEMA_PATH = path.join(OUTPUT_DIR, "schema.apex.graphql")
const WEBSITE_SCHEMA_PATH = path.join(OUTPUT_DIR, "schema.website.graphql")

const baseDir = path.join(__dirname, "../src")

const sharedPatterns: string[] = [
  "shared.enums",
  "shared.inputs",
  "shared.queries",
  "shared.types",
]
const apexPatterns: string[] = [
  "apex.inputs",
  "apex.queries",
  "apex.types",
  "apex.mutations",
]
const websitePatterns: string[] = ["website.mutations"]

const sharedFiles = loadGraphQLFiles(baseDir, sharedPatterns)
const apexFiles = loadGraphQLFiles(baseDir, apexPatterns)
const websiteFiles = loadGraphQLFiles(baseDir, websitePatterns)

const apexSchema: DocumentNode = mergeTypeDefs(
  loadFilesSync([...apexFiles, ...sharedFiles])
) as DocumentNode
const websiteSchema: DocumentNode = mergeTypeDefs(
  loadFilesSync([...websiteFiles, ...sharedFiles])
) as DocumentNode

fs.writeFileSync(APEX_SCHEMA_PATH, print(apexSchema), "utf8")
fs.writeFileSync(WEBSITE_SCHEMA_PATH, print(websiteSchema), "utf8")

/* function extractResolvers(appId: string, schema: DocumentNode): string {
  const queries: string[] = []
  const mutations: string[] = []

  visit(schema, {
    ObjectTypeDefinition(node: ObjectTypeDefinitionNode) {
      if (node.name?.value === "Query" && node.fields?.length) {
        for (const f of node.fields) {
          queries.push(`queries/${f.name.value}`)
        }
      }
      if (node.name?.value === "Mutation" && node.fields?.length) {
        for (const f of node.fields) {
          mutations.push(`mutations/${f.name.value}`)
        }
      }
    },
  })

  const ops = Array.from(new Set([...queries, ...mutations])).sort()
  const outFile = path.join(OUTPUT_DIR, `${appId}-resolvers-list.json`)
  fs.writeFileSync(outFile, JSON.stringify(ops, null, 2), "utf8")
  return outFile
}

const apexResolversFile = extractResolvers("apex", apexSchema)
const websiteResolversFile = extractResolvers("website", websiteSchema) */

console.log("✅ Schemas generated successfully:")
console.log(`  - Website schema : ${WEBSITE_SCHEMA_PATH}`)
console.log(`  - Apex schema    : ${APEX_SCHEMA_PATH}`)

/* console.log("✅ Resolvers list generated:")
console.log(`  - Website resolvers : ${websiteResolversFile}`)
console.log(`  - Apex resolvers    : ${apexResolversFile}`) */
