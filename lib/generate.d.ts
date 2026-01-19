import { Form, Sort, Views } from "../src/index";
/**
 * List configuration interface for generated modules
 */
interface List {
    items: any[];
    itemsPerPage?: number;
    itemsPerPageArray?: number[];
    filtersCount: number;
    views?: Record<string, Views>;
    sort: Record<string, Sort>;
    view: Views | string | undefined;
    filters: Record<string, any>;
    limit?: number;
}
/**
 * Custom form interface for generated modules
 */
interface CustomForm {
    _defaults: Record<string, Form> | string;
    schema: Record<string, Form>;
}
/**
 * Module type interface that combines form and list configurations
 */
export interface ModuleType {
    source?: string;
    form: CustomForm;
    list: List;
    loading: boolean;
    current: any;
    resetFilters: boolean;
}
export {};
