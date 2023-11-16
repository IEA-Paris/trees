import { image } from "./image"
import { affiliation } from "./affiliation"
import { people } from "./people"

export type fellowship = {
  title: string
  description: string
  shortDescription: string
  picture: image
  link: string
  action: string
  publicationDate: string
  opening: string
  closing: string
  Affiliations: [affiliation]
  fellows: [people]
}
