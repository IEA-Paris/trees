import configPeople, { People } from "../../people/models/people"
import configAffiliation, {
  Affiliations,
} from "../../affiliations/models/affiliations"
import Model from "../../model"

export interface Organizer extends People, Affiliations {}
const defaultConfig: Model = {
  aliases: ["people", "affiliations"],
  ...configPeople,
  ...configAffiliation,
}
export default defaultConfig
