interface Rules {
  required?: boolean;
  min?: number;
  max?: number;
  url?: boolean;
}

interface Visibility {
  default?: boolean;
  switchIf?: any[];
  disjonctive?: boolean;
}

interface ShowOnly {
  if?: any[];
  disjonctive?: boolean;
}
export interface Form {
  type: string | number;
  component?: string;
  label?: string;
  default?: any;
  description?: string;
  hint?: string | boolean;
  rules?: Rules;
  visibility?: Visibility;
  meta?: string;
  showOnly?: ShowOnly;
}
