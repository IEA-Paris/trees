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
  value?: string | string[]
  // Consumer apps allowed to render this filter (e.g. ["iea"], ["apex"],
  // ["all"]). Non-exclusive. Omitted -> rendered on every consumer. "all" is a
  // wildcard. Display-only: backend document scoping by appId is independent.
  appId?: string[]
}

export interface Sort {
  icon: string
  text: string
  value: Array<Record<string, number>>
  default?: boolean
  active?: boolean
}

export interface Views {
  icon: string
  default?: boolean
  name?: string
  perPage?: PerPage
}

export interface List {
  // perPage: PerPage
  filters: Record<string, Filters>
  sort: Record<string, Sort>
  views: Record<string, Views>
}
