import Model from "../../model"
import configPeople, { People } from "./people"
import { Vintage } from "./vintage"
export interface Fellows extends People {}

const defaultConfig: Model = {
  aliases: ["people"],
  ...configPeople,
}
export default defaultConfig
