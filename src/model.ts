import { Form } from "./form"
import { List } from "./list"
export default interface Model {
  aliases?: string[]
  source: string
  path?: string | null
  type: string | null
  list: List
  form: Record<string, Form>
}
