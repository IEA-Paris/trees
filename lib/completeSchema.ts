import { Form, configData } from "@paris-ias/data"

export default async (
  schema: Record<string, Form>
): Promise<Record<string, Form>> => {
  for await (const key of Object.keys(schema)) {
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
