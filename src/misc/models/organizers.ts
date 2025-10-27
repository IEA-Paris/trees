import configAffiliation, {
  Affiliations,
} from "../../affiliations/models/affiliations"
import Model from "../../model"
import { RelatedPeople } from "./relatedPeople"

export interface Organizer extends RelatedPeople, Affiliations {}
const defaultConfig: Model = {
  aliases: ["relatedPeople", "affiliations"],
  ...configAffiliation,
}
export default defaultConfig
