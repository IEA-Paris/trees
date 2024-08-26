import { configData, Form, Model, Sort, Views } from "../index.ts"
import fs from "fs"

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
  loading: any[]
  current: any
  resetFilters: boolean
}
const completeSchema = async (
  schema: Record<string, Form>
): Promise<Record<string, Form>> => {
  for await (const key of Object.keys(schema)) {
    // is it a template?
    if (schema[key] && schema[key]?.type === 3) {
      console.log("importing template: ", key)
      const templateState = configData[key].form
      schema[key].items = templateState
    }
    // check if it is an object or a collection?
  }
  return schema
}

const createModule = async (type: string): Promise<ModuleType> => {
  console.log("CREATING MODULE FOR: ", type)
  const baseType = configData[type] as Model

  const baseSchema: Record<string, Form> = baseType.form
  const defaultState: Record<string, Form> = await completeSchema(baseSchema)

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
  // console.log("defaultSort: ", defaultSort)

  // Helper function to handle aliases
  const processAliases = async (
    aliases: string[]
  ): Promise<Record<string, Form>> => {
    let aliasTemplatesForms: Record<string, Form> = {}
    await Promise.all(
      aliases.map(async (alias) => {
        const aliasTemplate = configData[alias]
        aliasTemplatesForms = {
          ...aliasTemplatesForms,
          ...aliasTemplate.form,
        }
        return aliasTemplatesForms
      })
    )
    return aliasTemplatesForms
  }

  // Helper function to handle template types
  const processTemplate = async (key: string): Promise<any> => {
    const template = configData[key] as Model
    // is it an implementation of another template?
    if (template.aliases?.length) {
      console.log("template aliases found:", template.aliases)
      const aliasTemplatesForms: Record<string, Form> = await processAliases(
        template.aliases
      )
      return await buildForm(aliasTemplatesForms)
      // build based on aliases
    } else {
      console.log("template found:", key)
      return await buildForm(template.form)
    }
  }

  // Helper function to process items within the schema
  const processItems = async (
    key: string,
    items: any[],
    form: any
  ): Promise<any> => {
    // only collection have items with an array type
    if (Array.isArray(items)) {
      // if (!form[key]) form[key] = [{}];
      if (!form[key]) {
        form[key] = [{}]
      }
      /*     for await (const item of items) {
        form[key][0] = {
          ...form[key][0],
          ...(await buildForm({ [item.key]: item })),
        }
      } */
      // else it's an object
    } else {
      if (!form[key]) form[key] = {}
      for await (const subkey of Object.keys(items)) {
        form[key] = {
          ...form[key],
          ...(await buildForm({ [subkey]: items[subkey] })),
        }
      }
    }
  }

  // Build the form
  const buildForm = async (schema: Record<string, Form>): Promise<any> => {
    try {
      if (!schema) return {}
      let form: { [key: string]: any } = {}
      for await (const key of Object.keys(schema)) {
        console.log("[key]: ", key)
        switch (schema[key]?.type) {
          // document picker
          case 4:
            form[key] = schema[key]?.default ?? []
            break

          // template import
          case 3:
            form[key] = await processTemplate(key)
            break

          // object
          case 2:
            await processItems(key, schema[key].items, form)
            break

          // collection
          case 1:
            await processItems(key, schema[key].items, form)
            break

          // primitive
          case 0:
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

  const defaultForm = await buildForm(defaultState)
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
    loading: [],
    current: null,
    resetFilters: true,
  }
  fs.writeFileSync(`./dist/${type}.json`, JSON.stringify(module, null, 2))
}

export default createModule
