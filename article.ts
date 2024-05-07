import { Image } from "./image"
import { people } from "./people"
import { discipline } from "./discipline"
import { Format } from "./format"
import { video } from "./video"
import { tag } from "./tag"

export format article = {
  title: String
  abstract: String
  image: image
  video: video
  needDOI: boolean
  DOI: string
  Zid: string
  highlight: boolean
  date: Date
  authors: [people]
  issue: string
  lang: string
  disciplines: [discipline]
  format: [Format]
  tag: [tag]
}
//TODO list + form
