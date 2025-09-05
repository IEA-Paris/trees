import { userRole } from "./users";

interface Rules {
  required?: boolean;
  min?: number;
  max?: number;
  url?: boolean;
  color?: boolean;
  ror?: boolean;
  DOI?: boolean;
  date?: boolean;
  email?: boolean;
  digit?: boolean;
  orcid?: boolean;
}
export enum formType {
  Primitive = "PRIMITIVE",
  Object = "OBJECT",
  Array = "ARRAY",
  Template = "TEMPLATE",
  Document = "DOCUMENT",
}
export interface Conditionnal {
  default?: boolean;
  switchIf?: any[];
  disjonctive?: boolean;
}

export enum Transformers {
  Trim = "TRIM",
  Capitalize = "CAPITALIZE",
  Uppercase = "UPPERCASE",
  Lowercase = "LOWERCASE",
}
export interface Form {
  type: formType; // Primitive, Object, Array, Template, Document
  component?: string | boolean; // short name component to load dynamically
  label: string;
  groups?: userRole[]; // restrict to some groups
  i18n?: boolean;
  default?: any;
  description?: string;
  hint?: string | boolean;
  rules?: Rules; // used for field validation (rely on vuetify for objects and primitives, custom for arrays)
  show?: Conditionnal;
  enabled?: Conditionnal;
  transformers: Transformers[]; // used to format the field on blur (primitves strings only)
  meta?: string; // for SEO
  items?: any;
  multiple?: boolean;
}
