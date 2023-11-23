import { location } from "./location"
import { image } from "./image"
import { eventSlot } from "./eventSlot"
import { discipline } from "./discipline"
import { tag } from "./tag"
import { people } from "./people"
import { affiliation } from "./affiliation"
import { file } from "./file"

export type event = {
  name: string
  subtitle: string
  description: string
  start: string
  stop: string
  type: number // 0 : online, 1: physical, 2: hybrid
  totalSlots: number
  availableSlots: number
  disciplines: [discipline]
  tags: [tag]
  slots: [eventSlot]
  onlineSlots: [eventSlot]
  outside: boolean
  delay: number
  place: location
  speakers: [people]
  organizers: [people]
  discussants: [people]
  affiliations: [affiliation]
  files: [file]
  url: string
  image: image
  appId: string
  state: number
  bookingState: number
  createdAt: string
  updatedAt: string
}
