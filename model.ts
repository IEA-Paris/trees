import { Form } from "./form"
import { List } from "./list"
export default interface model {
  aliases: string[]
  form: { [key: string]: Form }
  list: List
}
