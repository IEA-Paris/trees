import { Image } from "../../files/models/image"

export interface RelatedPeople {
  firstname: string
  lastname: string
  image?: Image
  slug: string
}
