import { Image } from "../files/image"
import { Video } from "../files/video"

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
