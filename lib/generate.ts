import { configData, Form, Model, Sort, Views } from "../src/index.ts"
import { createJsonFile } from "./utils.ts"
import { formType } from "../src/form.ts"
interface List {
  items: any[]
  itemsPerPage?: number
  itemsPerPageArray?: number[]
  filtersCount: number
  views?: Record<string, Views>
  sort: Record<string, Sort>
  view: Views | string | undefined
  filters: Record<string, any>
  limit?: number
  sortBy: Sort | string[] | undefined
  sortDesc?: Sort | number[] | string[] | string | undefined
}

interface CustomForm {
  values: Record<string, Form>
  _defaults: Record<string, Form> | string
  schema: Record<string, Form>
}
export interface ModuleType {
  source?: string
  form: CustomForm
  list: List
  loading: boolean
  current: any
  resetFilters: boolean
}

const completeSchema = (
  schema: Record<string, Form>,
  visitedTemplates: Set<string> = new Set()
): Record<string, Form> => {
  let bkey = ""
  try {
    const completedSchema: Record<string, Form> = {}

    for (const key of Object.keys(schema)) {
      bkey = key
      // Create a copy of the current schema item
      completedSchema[key] = { ...schema[key] }

      // is it a template?
      if (schema[key] && schema[key]?.type === formType.Template) {
        // Check for circular dependencies
        if (visitedTemplates.has(key)) {
          console.warn(`Circular dependency detected for template: ${key}`)
          completedSchema[key] = { ...schema[key], items: {} } // Use empty object to break the cycle
          continue
        }

        console.log("importing template: ", key)

        // Add current template to visited set
        visitedTemplates.add(key)

        try {
          completedSchema[key] = {
            ...schema[key],
            items: completeSchema(configData[key].form ?? {}, visitedTemplates),
          }
        } finally {
          // Remove the template from visited set after processing
          visitedTemplates.delete(key)
        }
      }
      // check if it is an object or a collection with nested items
      else if (
        schema[key] &&
        schema[key].items &&
        typeof schema[key].items === "object"
      ) {
        // Recursively process nested schemas in objects and arrays
        completedSchema[key] = {
          ...schema[key],
          items: completeSchema(
            schema[key].items as Record<string, Form>,
            visitedTemplates
          ),
        }
      }
    }
    return completedSchema
  } catch (error) {
    /*  console.log("missing error", Object.keys(configData)) */
    console.log("error: ", error)
    console.log("error completing schema: ", bkey)
    return {}
  }
}

const createModule = (type: string): any => {
  console.log("CREATING MODULE FOR: ", type)
  const baseType = configData[type] as Model

  const baseSchema: Record<string, Form> | undefined = baseType.form
  const defaultState: Record<string, Form> = completeSchema(
    baseSchema as Record<string, Form>
  )

  const defaultViewKey: string | undefined =
    baseType?.list?.views &&
    Object.keys(baseType.list.views).find((item) => {
      return baseType.list.views[item]?.default === true
    })
  const defaultView =
    defaultViewKey !== undefined
      ? { ...baseType?.list.views[defaultViewKey], name: defaultViewKey }
      : undefined

  const defaultSortKey: string | undefined =
    baseType?.list.sort &&
    Object.keys(baseType.list.sort).find((item) => {
      return baseType.list.sort[item].default === true
    })

  const defaultSort: Sort | undefined =
    defaultSortKey !== undefined
      ? baseType?.list.sort[defaultSortKey]
      : undefined

  // Create a Set to track visited templates and prevent circular dependencies
  const visitedTemplates = new Set<string>()

  // Helper function to handle aliases
  const processAliases = (aliases: string[]): Record<string, Form> => {
    console.log("aliases: ", aliases)
    let aliasTemplatesForms: Record<string, Form> = {}

    aliases.map((alias) => {
      const aliasTemplate = configData[alias]
      aliasTemplatesForms = {
        ...aliasTemplatesForms,
        ...aliasTemplate.form,
      }
      return aliasTemplatesForms
    })

    return aliasTemplatesForms
  }

  // Helper function to handle template types
  const processTemplate = (key: string): Promise<any> => {
    // Check for circular dependencies
    if (visitedTemplates.has(key)) {
      console.warn(`Circular dependency detected for template: ${key}`)
      return Promise.resolve({}) // Return empty object to break the cycle
    }

    // Add current template to visited set
    visitedTemplates.add(key)

    const template = configData[key] as Model
    try {
      // is it an implementation of another template?
      if (template.aliases?.length) {
        const aliasTemplatesForms: Record<string, Form> = processAliases(
          template.aliases
        )
        const result = buildForm(aliasTemplatesForms)
        // build based on aliases
        return result
      } else {
        return buildForm(template.form as Record<string, Form>)
      }
    } finally {
      // Remove the template from visited set after processing
      visitedTemplates.delete(key)
    }
  }

  // Helper function to process items within the schema
  const processItems = (key: string, items: any[], form: any): any => {
    /*     console.log("processing items for key: ", key) */

    // only collection have items with an array type
    if (form[key] && form[key].type === formType.Array) {
      // if (!form[key]) form[key] = [{}];
      if (!form[key]) {
        form[key] = [{}]
      }
      /*     for  (const item of items) {
        form[key][0] = {
          ...form[key][0],
          ...( buildForm({ [item.key]: item })),
        }
      } */
      // else it's an object
    } else {
      if (!form[key]) form[key] = {}
      if (items && Object.keys(items).length) {
        for (const subkey of Object.keys(items)) {
          form[key] = {
            ...form[key],
            ...buildForm({ [subkey]: items[subkey] }),
          }
        }
      } else {
        console.log("no items found for key: ", key)
        if (["location", "image"].includes(key)) {
          console.log(form)
        }
      }
    }
  }

  // Build the form
  const buildForm = (schema: Record<string, Form>): any => {
    try {
      if (!schema) return {}
      let form: { [key: string]: any } = {}
      for (const key of Object.keys(schema)) {
        switch (schema[key]?.type as formType) {
          // document picker
          case formType.Document:
            /*  console.log("document picker for key: ", key) */
            form[key] = schema[key]?.default ?? []
            break

          // template import
          case formType.Template:
            /*  console.log("template import for key: ", key) */

            // Check if this is a template we're already processing (to avoid circular dependencies)
            if (visitedTemplates.has(key)) {
              console.warn(
                `Avoiding circular dependency for template key: ${key}`
              )
              form[key] = {} // Use empty object to break the cycle
            } else {
              form[key] = processTemplate(key)
            }
            break

          // object
          case formType.Object:
            /*  console.log("object for key: ", key) */
            processItems(key, schema[key].items, form)
            break

          // collection
          case formType.Array:
            /*  console.log("collection for key: ", key) */
            processItems(key, schema[key].items, form)
            break

          // primitive
          case formType.Primitive:
            /*  console.log("primitive for key: ", key) */
            form[key] = schema[key]?.default ?? ""
            break

          default:
            console.log("missing type in form builder for key: ", key)
            break
        }
      }
      return form
    } catch (error) {
      console.log("error building form: ", error)
    }
  }

  const defaultForm = buildForm(defaultState)
  const formModule = {
    _defaults: defaultForm,
    schema: defaultState,
  }
  const listModule = {
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
  }
  const module = {
    source: baseType?.source,
    form: formModule,
    list: listModule,
  }
  // create the regular file
  createJsonFile(type, module)
  // create the list version
  createJsonFile(type, listModule, "/list")
  // create the form version
  createJsonFile(type, formModule, "/form")
}

const typeName = [
  "apps",
  "fellowships",
  "projects",
  "events",
  "news",
  "people",
  "publications",
  "affiliations",
  "disciplines",
  "mailing",
  "files",
  "tags",
  "users",
  "action",
  // "taxonomy", //TODO: à definir
]
typeName.map((type) => {
  createModule(type)
})
