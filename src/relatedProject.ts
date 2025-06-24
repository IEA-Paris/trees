import { Image } from "./image"
import { Video } from "./video"
import { formType } from "./form"
import Model from "./model"

export interface RelatedProject {
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
