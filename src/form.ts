import { userRole } from "./people/models/users"

interface Rules {
  required?: boolean
  min?: number
  max?: number
  url?: boolean
  color?: boolean
  ror?: boolean
  DOI?: boolean
  date?: boolean
  email?: boolean
  numerical?: boolean
  orcid?: boolean
}

export enum availableLanguages {
  EN = "en",
  FR = "fr",
}

export enum formType {
  Primitive = "PRIMITIVE",
  // could contain any other formType elements in keys' values
  Object = "OBJECT",
  // could contain any other formType elements but arrays
  Array = "ARRAY",
  // Reusable tree template, matching another form/list/API/model/_defaults/declaration structure
  Template = "TEMPLATE",
  // Matches an existing backend database document
  Document = "DOCUMENT",
}
export interface Conditional {
  default?: boolean
  switchIf?: any[]
  disjonctive?: boolean
}

export enum Transformers { // only for primitive strings
  Candidates = "CANDIDATES", // will use the field as source for options
  Trim = "TRIM", // remove trailing spaces
  Capitalize = "CAPITALIZE",
  ToUpperCase = "TO_UPPERCASE",
  ToLowerCase = "TO_LOWERCASE",
}
export interface Form {
  type: formType // Primitive, Object, Array, Template, Document
  component?: string | boolean // short name component to load dynamically
  label: string
  groups?: userRole[] // restrict to some groups
  i18n?: boolean
  default?: any
  description?: string
  hint?: string | boolean
  rules?: Rules // used for field validation (rely on vuetify for objects and primitives, custom for arrays)
  show?: Conditional
  enabled?: Conditional
  admin?: Conditional
  transformers?: Transformers[] // used to format the field on blur (primitves strings only)
  meta?: string // for SEO
  items?: any
  multiple?: boolean
}
