import { Image } from "./image"
import Model from "./model"
import { formType } from "./form"

export interface RelatedPeople {
  firstname: string
  lastname: string
  image?: Image
  slug: string
}
