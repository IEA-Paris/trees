import { Image } from "../files/image"

export interface RelatedNews {
  name: string
  description?: string
  image?: Image
  color?: string
  url: URL
  date?: Date
  // authors: People[];
  featured?: Date
  slug: string
}
