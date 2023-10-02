import { image } from "./image"
import { location } from "./location"

export type affiliation = {
  name: string
  url: string
  ror: string
  image: image
  address: location
}
