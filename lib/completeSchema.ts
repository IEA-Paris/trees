import { Form, configData } from "../index.ts"

export default (schema: Record<string, Form>): Record<string, Form> => {
  for (const key of Object.keys(schema)) {
    // is it a template?
    if (schema[key] && schema[key]?.type === 3) {
      console.log("importing template: ", key)
      const templateState = configData[key].form
      schema[key].items = templateState
    }
    // check if it is an object or a collection?
  }
  return schema
}
