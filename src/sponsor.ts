import configPeople, { People } from "./people"
import configAffiliation, { Affiliation } from "./affiliation"
import Model from "./model"

export interface Sponsor extends People, Affiliation {}
const defaultConfig: Model = {
  aliases: ["people", "affiliations"],
  path: "content/sponsors", // path to the folder where the content is stored
  ...configPeople,
  ...configAffiliation,
}
export default defaultConfig
