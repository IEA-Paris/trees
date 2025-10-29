import Model from "../../model"
import { RelatedPeople } from "../../misc/models/relatedPeople"

export interface Discussants extends RelatedPeople {}
const defaultConfig: Model = {
  aliases: ["relatedPeople"],
}
export default defaultConfig
