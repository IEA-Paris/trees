import { Image } from "./image"
import Model from "./model"
import { formType } from "./form"

export interface RelatedFellowships {
  name: string
  description?: string
  url: URL
  date?: Date
  slug: string
}
