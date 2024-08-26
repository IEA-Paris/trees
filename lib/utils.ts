import fs from "fs"
import path from "path"

export function createJsonFile(type: string, module: any): void {
  const distPath = path.resolve("./dist")

  if (!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath, { recursive: true })
  }

  const filePath = path.join(distPath, `${type}.json`)
  fs.writeFileSync(filePath, JSON.stringify(module, null, 2))
}
