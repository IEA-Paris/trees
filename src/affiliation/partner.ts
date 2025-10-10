import config, { Affiliation } from "./affiliation"
import Model from "../model"

export interface Partner extends Affiliation {}
const defaultConfig: Model = {
  aliases: ["affiliations"],
  path: "content/partners", // path to the folder where the content is stored
  ...config,
}
export default defaultConfig
