import { Image } from "../../files/models/image"
import { Video } from "../../files/models/video"

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
