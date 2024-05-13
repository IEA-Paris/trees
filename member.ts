import config, { Affiliation } from "./affiliation"
import Model from "./model"

export interface Member extends Affiliation {}

const defaultConfig: Model = {
  aliases: ["Affiliation"],
  path: "content/members", // path to the folder where the content is stored
  ...config,
}

export default defaultConfig
