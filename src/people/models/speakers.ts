import Model from "../../model"
import { RelatedPeople } from "../../misc/models/relatedPeople"

export interface Sponsor extends RelatedPeople {}
const defaultConfig: Model = {
  aliases: ["people"],
}
export default defaultConfig
