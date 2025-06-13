import { mapEnum } from "./utils"
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
export enum FormType {
  PRIMITIVE,
  OBJECT,
  ARRAY,
  TEMPLATE,
  DOCUMENT,
}
export interface Visibility {
  default?: boolean
  switchIf?: any[]
  disjonctive?: boolean
}

export interface Form {
  type: FormType
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
