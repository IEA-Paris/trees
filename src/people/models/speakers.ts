import configPeople, { People } from "./people"
import Model from "./model"

export interface Sponsor extends People {}
const defaultConfig: Model = {
  aliases: ["people"],
  ...configPeople,
}
export default defaultConfig
