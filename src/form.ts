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
  digit?: boolean
  orcid?: boolean
}
export enum formType {
  Primitive = "PRIMITIVE",
  Object = "OBJECT",
  Array = "ARRAY",
  Template = "TEMPLATE",
  Document = "DOCUMENT",
}
export interface Visibility {
  default?: boolean
  switchIf?: any[]
  disjonctive?: boolean
}

export interface Form {
  type: formType
  component?: string | boolean
  label: string
  i18n?: boolean
  default?: any
  description?: string
  hint?: string | boolean
  rules?: Rules
  visibility?: Visibility
  meta?: string
  items?: any
  multiple?: boolean
}
