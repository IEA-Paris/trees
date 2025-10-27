import { Conditional } from "./form"
export interface PerPage {
  options: number[]
  default: number
}
interface Filters {
  type: string
  rules?: Record<string, any>
  items?: any
  show?: Conditional
  admin?: Conditional
  enabled?: Conditional
  multiple?: boolean
}

export interface Sort {
  icon: string
  text: string
  value: [string, number]
  default?: boolean
}

export interface Views {
  icon: string
  default?: boolean
  name?: string
  perPage?: PerPage
}

export interface List {
  create: boolean
  // perPage: PerPage
  filters: Record<string, Filters>
  sort: Record<string, Sort>
  views: Record<string, Views>
}
