import { People } from "./people"
const model = import("./people")

export interface Fellow extends People {}

export default {
  ...model,
}
