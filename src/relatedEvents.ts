import { Image } from "./image"

export interface RelatedEvent {
  bookingState: number // 0 - Server & Client -
  createdAt: Date // 0 - Server & Client -
  description?: string // 0 - Server & Client -
  image?: Image // 3 - Server & Client -
  name: string // 0 - Server & Client -
  outside?: boolean // 0 - Server & Client -
  start?: string // 0 - Server & Client -
  state: number // 0 - Server & Client -
  summary?: string // 0 - Server & Client -
  eventType: number // 0 : online, 1: physical, 2: hybrid// 0 - Server & Client -
  url: URL // 0 - Server & Client -
  slug: string
}
