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

export interface Form {
  type: number;
  component: string | boolean;
  label: string;
  default?: any;
  description?: string;
  hint?: string | boolean;
  rules?: Rules;
  visibility?: Visibility;
  meta?: string;
}
