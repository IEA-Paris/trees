import config, { Affiliations } from "./affiliations"
import Model from "../../model"

export interface Support extends Affiliations {}
const defaultConfig: Model = {
  aliases: ["affiliations"],
  ...config,
}
export default defaultConfig
