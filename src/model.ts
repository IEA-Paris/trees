import { Form } from "./form"
import { List } from "./list"
export default interface Model {
  queryFilters?: any
  aliases?: string[]
  source: string
  path?: string
  type: string
  list: List
  form?: Record<string, Form>
}
