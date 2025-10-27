import { Form } from "./form"
import { List } from "./list"
export default interface Model {
  aliases?: string[]
  list?: List
  form?: Record<string, Form>
}
