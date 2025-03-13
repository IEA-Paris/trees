import fs from "fs"
import path from "path"

export function createJsonFile(type: string, module: any): void {
  const distPath = path.resolve("./dist")

  if (!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath, { recursive: true })
  }

  const filePath = path.join(distPath, `${type}.js`)
  fs.writeFileSync(
    filePath,
    `export default ${JSON.stringify(module, null, 2)}`
  )
}
export const mapEnum = (arg) =>
  Object.keys(arg)
    .filter((key) => isNaN(Number(key))) // Filter out numeric keys
    .map((key) => key) // Cast to string array
