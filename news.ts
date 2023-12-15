import { image } from "./image"
import { people } from "./people"

export type news = {
  title: string
  description: string
  picture: image
  color: string
  link: string
  date: string
  authors: [people]
  featured: string
}
