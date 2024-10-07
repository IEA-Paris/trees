import { configData, Form, Model, Sort, Views } from "../index.ts";
import { createJsonFile } from "./utils.ts";

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
  sortBy: Sort | string[] | undefined;
  sortDesc?: Sort | number[] | string[] | string | undefined;
}

interface CustomForm {
  values: Record<string, Form>;
  _defaults: Record<string, Form> | string;
  schema: Record<string, Form>;
}
export interface ModuleType {
  source?: string;
  form: CustomForm;
  list: List;
  loading: boolean;
  current: any;
  resetFilters: boolean;
}

const completeSchema = (schema: Record<string, Form>): Record<string, Form> => {
  let bkey = "";
  try {
    for (const key of Object.keys(schema)) {
      bkey = key;
      // is it a template?
      if (schema[key] && schema[key]?.type === 3) {
        console.log("importing template: ", key);
        const templateState = configData[key].form;
        schema[key].items = templateState;
      }
      // check if it is an object or a collection?
    }
    return schema;
  } catch (error) {
    /*  console.log("missing error", Object.keys(configData)) */
    console.log("error: ", error);
    console.log("error completing schema: ", bkey);
    return {};
  }
};

const createModule = (type: string): any => {
  console.log("CREATING MODULE FOR: ", type);
  const baseType = configData[type] as Model;

  const baseSchema: Record<string, Form> = baseType.form;
  const defaultState: Record<string, Form> = completeSchema(baseSchema);

  const defaultViewKey: string | undefined =
    baseType?.list?.views &&
    Object.keys(baseType.list.views).find((item) => {
      return baseType.list.views[item]?.default === true;
    });
  const defaultView =
    defaultViewKey !== undefined
      ? { ...baseType?.list.views[defaultViewKey], name: defaultViewKey }
      : undefined;

  const defaultSortKey: string | undefined =
    baseType?.list.sort &&
    Object.keys(baseType.list.sort).find((item) => {
      return baseType.list.sort[item].default === true;
    });

  const defaultSort: Sort | undefined =
    defaultSortKey !== undefined
      ? baseType?.list.sort[defaultSortKey]
      : undefined;

  // Helper function to handle aliases
  const processAliases = (aliases: string[]): Record<string, Form> => {
    console.log("aliases: ", aliases);
    let aliasTemplatesForms: Record<string, Form> = {};

    aliases.map((alias) => {
      const aliasTemplate = configData[alias];
      aliasTemplatesForms = {
        ...aliasTemplatesForms,
        ...aliasTemplate.form,
      };
      return aliasTemplatesForms;
    });

    return aliasTemplatesForms;
  };

  // Helper function to handle template types
  const processTemplate = (key: string): Promise<any> => {
    console.log("procesing template for key: ", key);
    const template = configData[key] as Model;
    // is it an implementation of another template?
    if (template.aliases?.length) {
      const aliasTemplatesForms: Record<string, Form> = processAliases(
        template.aliases
      );
      return buildForm(aliasTemplatesForms);
      // build based on aliases
    } else {
      console.log("template found:", key);
      return buildForm(template.form);
    }
  };

  // Helper function to process items within the schema
  const processItems = (key: string, items: any[], form: any): any => {
    console.log("processing items for key: ", key);

    // only collection have items with an array type
    if (Array.isArray(items)) {
      console.log("array case", key);
      // if (!form[key]) form[key] = [{}];
      if (!form[key]) {
        form[key] = [{}];
      }
      /*     for  (const item of items) {
        form[key][0] = {
          ...form[key][0],
          ...( buildForm({ [item.key]: item })),
        }
      } */
      // else it's an object
    } else {
      console.log("else case", key);
      if (!form[key]) form[key] = {};

      for (const subkey of Object.keys(items)) {
        form[key] = {
          ...form[key],
          ...buildForm({ [subkey]: items[subkey] }),
        };
      }
    }
  };

  // Build the form
  const buildForm = (schema: Record<string, Form>): any => {
    try {
      if (!schema) return {};
      let form: { [key: string]: any } = {};
      for (const key of Object.keys(schema)) {
        switch (schema[key]?.type) {
          // document picker
          case 4:
            form[key] = schema[key]?.default ?? [];
            break;

          // template import
          case 3:
            form[key] = processTemplate(key);
            break;

          // object
          case 2:
            processItems(key, schema[key].items, form);
            break;

          // collection
          case 1:
            processItems(key, schema[key].items, form);
            break;

          // primitive
          case 0:
            form[key] = schema[key]?.default ?? "";
            break;

          default:
            console.log("missing type in form builder for key: ", key);
            break;
        }
      }
      return form;
    } catch (error) {
      console.log("error building form: ", error);
    }
  };

  const defaultForm = buildForm(defaultState);

  const module = {
    source: baseType?.source,
    form: {
      values: defaultForm,
      _defaults: defaultForm,
      schema: defaultState,
    },
    list: {
      items: [{}, {}, {}, {}, {}, {}, {}, {}, {}],
      ...(baseType?.list?.perPage?.default && {
        itemsPerPage: baseType.list?.perPage.default,
      }),
      ...(baseType?.list?.perPage?.options && {
        itemsPerPageArray: baseType.list?.perPage.options,
      }),
      filtersCount: 0,
      ...(baseType?.list?.views && {
        views: baseType.list?.views,
      }),
      ...(baseType?.list?.sort && {
        sort: baseType.list?.sort,
      }),
      view: defaultView,
      filters: baseType?.list?.filters,
      ...(baseType?.list?.perPage?.default && {
        limit: baseType.list?.perPage.default,
      }),
      sortBy: defaultSort && [defaultSort.value[0]],
      sortDesc: defaultSort && [defaultSort.value[1]],
    },
    loading: true,
    current: null,
    resetFilters: true,
  };

  createJsonFile(type, module);
};

const typeName = ["fellowship", "project", "events", "news", "people"];
typeName.map((type) => {
  createModule(type);
});
