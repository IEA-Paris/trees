import { affiliation } from "./affiliation"
import { image } from "./image"
import { socials } from "./socials"
import { position } from "./position"
import { consent } from "./consent"
import { groups } from "./group"

export type people = {
  firstname: string
  lastname: string
  affiliations: [affiliation: affiliation, positions: [position]]
  picture: image
  socials: socials
  biography: string
  consent: consent
  groups: groups
}
