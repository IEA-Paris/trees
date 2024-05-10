export interface PerPage {
  options: number[];
  default: number;
}
interface Filters {
  type: string;
  rules: Record<string, any>;
  label: string;
  items?: any[];
}

interface Sort {
  icon: string;
  text: string;
  value: [string, number];
  default?: boolean;
}

interface Views {
  icon: string;
  default?: boolean;
  name?: string;
}

export interface List {
  create: boolean;
  perPage: PerPage;
  filters: Record<string, Filters>;
  sort: Record<string, Sort>;
  views: Record<string, Views>;
}
