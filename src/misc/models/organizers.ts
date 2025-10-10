import configPeople, { People } from "../../people/models/people"
import configAffiliation, {
  Affiliation,
} from "../../affiliation/models/affiliation"
import Model from "../../model"

export interface Organizer extends People, Affiliation {}
const defaultConfig: Model = {
  aliases: ["people", "affiliations"],
  ...configPeople,
  ...configAffiliation,
}
export default defaultConfig
