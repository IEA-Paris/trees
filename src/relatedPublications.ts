import { Image } from "./image"
import { Video } from "./video"
import Model from "./model"
import { formType } from "./form"

export interface RelatedPublications {
  name: string
  shortDescription?: string
  description?: string
  url: URL
  image?: Image
  video?: Video
  color?: string
  date?: Date
  slug: string
}
