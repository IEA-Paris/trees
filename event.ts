import { location } from "./location"
import { image } from "./image"
import { eventSlot } from "./eventSlot"
import { discipline } from "./discipline"
import { tag } from "./tag"
import { people } from "./people"
import { affiliation } from "./affiliation"
import { file } from "./file"

export type event = {
  affiliations: [affiliation]
  appId: string
  availableSlots: number
  bookingState: number
  createdAt: string
  delay: number
  description: string
  disciplines: [discipline]
  discussants: [people]
  files: [file]
  image: image
  name: string
  onlineSlots: [eventSlot]
  organizers: [people]
  outside: boolean
  place: location
  slots: [eventSlot]
  speakers: [people]
  start: string
  state: number
  stop: string
  subtitle: string
  summary: string
  tags: [tag]
  totalSlots: number
  type: number // 0 : online, 1: physical, 2: hybrid
  updatedAt: string
  url: string
}
