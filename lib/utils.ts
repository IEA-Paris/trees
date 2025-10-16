import fs from "fs"
import path from "path"

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
}
export const mapEnum = (arg: Object) =>
  Object.keys(arg)
    .filter((key) => isNaN(Number(key))) // Filter out numeric keys
    .map((key) => key) // Cast to string array
