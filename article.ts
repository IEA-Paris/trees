import { Image } from "./image"
import { People } from "./people"
import { Discipline } from "./discipline"
import { Format } from "./format"
import { Video } from "./video"
import { Tag } from "./tag"

export interface article {
  title: String
  abstract: String
  image: Image
  video: Video
  needDOI: boolean
  DOI: string
  Zid: string
  highlight: boolean
  date: Date
  authors: [People]
  issue: string
  lang: string
  disciplines: [Discipline]
  format: [Format]
  tag: [Tag]
}
//TODO list + form
