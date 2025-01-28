import { Visibility } from "./form"
export interface PerPage {
  options: number[]
  default: number
}
interface Filters {
  type: string
  rules?: Record<string, any>
  items?: any
  visibility?: Visibility
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
}

export interface List {
  create: boolean
  perPage: PerPage
  filters: Record<string, Filters>
  sort: Record<string, Sort>
  views: Record<string, Views>
}
