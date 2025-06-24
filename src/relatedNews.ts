import { Image } from "./image"
import Model from "./model"
import { formType } from "./form"

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
