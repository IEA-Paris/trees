import { Image } from "./image"
import { Location } from "./location"

export interface Affiliation {
  address: Location
  image: Image
  name: string
  ror: string
  url: string
}
export default {}
