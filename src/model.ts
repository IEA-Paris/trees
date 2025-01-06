import { Form } from "./form"
import { List } from "./list"
export default interface Model {
  queryFilters?: any
  aliases?: string[]
  source: string | null
  path?: string | null
  type: string | null
  list: List
  form?: Record<string, Form>
}
