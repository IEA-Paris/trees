import { templates, Form, Model, Sort, Views } from "../src/index.ts"
import { createJsonFile } from "./utils.ts"
import { formType } from "../src/form.ts"

/**
 * List configuration interface for generated modules
 */
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

const buildInitialValues = (
  schema: Record<string, any>
): Record<string, any> => {
  const result: Record<string, any> = {}
  for (const [key, field] of Object.entries(schema || {})) {
    switch (field.type) {
      case formType.Primitive: {
        if ("default" in field) result[key] = field.default
        else if (field.component === "Checkbox") result[key] = false
        else result[key] = ""
        break
      }
      case formType.Document: {
        result[key] = "default" in field ? field.default : ""
        break
      }
      case formType.Object: {
        result[key] = buildInitialValues(field.items || {})
        break
      }
      case formType.Array: {
        /*     if (key === "affiliations") {
          console.log("key: ", key)
          console.log("key: ", schema[key])
          console.log("field.items : ", field.items)
        } */
        result[key] =
          field &&
          field.items &&
          field.items.map((el: any) => buildInitialValues(el))
        break
      }
      default: {
        result[key] =
          field &&
          field.items &&
          field.items.map((el: any) => buildInitialValues(el))
      }
    }
  }
  return result
}

/**
 * Custom form interface for generated modules
 */
interface CustomForm {
  _defaults: Record<string, Form> | string
  schema: Record<string, Form>
}

/**
 * Module type interface that combines form and list configurations
 */
export interface ModuleType {
  source?: string
  form: CustomForm
  list: List
  loading: boolean
  current: any
  resetFilters: boolean
}

/**
 * Generation error types for better error handling
 */
interface GenerationError {
  type:
    | "CIRCULAR_DEPENDENCY"
    | "MISSING_TEMPLATE"
    | "INVALID_SCHEMA"
    | "BUILD_ERROR"
  message: string
  context: { key?: string; template?: string; error?: any }
}

/**
 * Completes form schema by resolving templates and handling nested structures
 * @param schema - The form schema to complete
 * @param visitedTemplates - Set of visited templates to prevent circular dependencies
 * @returns Completed schema with all templates resolved
 */
const completeSchema = (
  schema: Record<string, Form>,
  visitedTemplates: Set<string> = new Set()
): Record<string, Form> => {
  const completedSchema: Record<string, Form> = {}

  try {
    for (const key of Object.keys(schema)) {
      try {
        switch (schema[key]?.type) {
          case formType.Primitive:
            completedSchema[key] = schema[key]
            break

          case formType.Object:
            completedSchema[key] = {
              ...schema[key],
              items: completeSchema(
                schema[key].items as Record<string, Form>,
                visitedTemplates
              ),
            }
            break

          case formType.Array:
            completedSchema[key] = {
              ...schema[key],
              items: completeSchema(
                schema[key].items as Record<string, Form>,
                visitedTemplates
              ),
            }
            break

          case formType.Document:
            completedSchema[key] = {
              ...schema[key],
              default: schema[key].default ?? "",
            }
            break

          case formType.Template:
            // Check for circular dependencies
            if (visitedTemplates.has(key)) {
              const error: GenerationError = {
                type: "CIRCULAR_DEPENDENCY",
                message: `Circular dependency detected for template: ${key}`,
                context: { key, template: key },
              }
              console.warn(`⚠️  ${error.message}`)
              completedSchema[key] = { ...schema[key], items: {} } // Break the cycle
              continue
            }

            console.log(`📦 Importing template: ${key}`)

            visitedTemplates.add(key)
            try {
              const component = schema[key].component
              const isObjectComponent =
                typeof component === "string" && component.startsWith("Object")
              const componentType = isObjectComponent
                ? formType.Object
                : formType.Array

              if (!templates[key]) {
                const error: GenerationError = {
                  type: "MISSING_TEMPLATE",
                  message: `Template '${key}' not found in templates`,
                  context: { key, template: key },
                }
                console.error(`❌ ${error.message}`)
                completedSchema[key] = { ...schema[key], items: {} }
                continue
              }
              if (key === "experiences") {
                console.log("debug", templates[key])
              }
              completedSchema[key] = {
                ...schema[key],
                type: componentType,
                items: isObjectComponent
                  ? completeSchema(templates[key] ?? {}, visitedTemplates)
                  : [
                      {
                        ...completeSchema(
                          templates[key].form ?? {},
                          visitedTemplates
                        ),
                      },
                    ],
              }
            } finally {
              visitedTemplates.delete(key)
            }
            break

          default:
            console.warn(
              `⚠️  Unknown form type for key '${key}': ${schema[key]?.type}`
            )
            break
        }
      } catch (fieldError) {
        const error: GenerationError = {
          type: "INVALID_SCHEMA",
          message: `Error processing field '${key}'`,
          context: { key, error: fieldError },
        }
        console.error(`❌ ${error.message}:`, fieldError)
        // Continue with other fields
      }
    }

    return completedSchema
  } catch (error) {
    const genError: GenerationError = {
      type: "BUILD_ERROR",
      message: "Error completing schema",
      context: { error },
    }
    console.error(`💥 ${genError.message}:`, error)
    return {}
  }
}

/**
 * Creates a complete module configuration for a given type
 * @param type - The type name to create module for
 */
const createModule = (type: string): void => {
  console.log(`\n🔨 Creating module for: ${type.toUpperCase()}`)

  try {
    const baseType = templates[type] as Model

    if (!baseType) {
      console.error(`❌ No configuration found for type: ${type}`)
      return
    }

    const baseSchema: Record<string, Form> | undefined = baseType.form
    if (!baseSchema) {
      console.warn(`⚠️  No form schema found for type: ${type}`)
      return
    }

    console.log(
      `   📋 Processing ${Object.keys(baseSchema).length} form fields...`
    )

    const defaultState: Record<string, Form> = completeSchema(baseSchema)

    // Find default view
    const defaultViewKey: string | undefined =
      baseType?.list?.views &&
      Object.keys(baseType.list.views).find((item) => {
        return baseType.list.views[item]?.default === true
      })

    const defaultView =
      defaultViewKey !== undefined
        ? { ...baseType?.list.views[defaultViewKey], name: defaultViewKey }
        : undefined

    // Find default sort
    const defaultSortKey: string | undefined =
      baseType?.list.sort &&
      Object.keys(baseType.list.sort).find((item) => {
        return baseType.list.sort[item].default === true
      })

    const defaultPerPage = defaultView?.perPage?.default
    const perPageOptions = defaultView?.perPage?.options

    const defaultSort: Sort | undefined =
      defaultSortKey !== undefined
        ? baseType?.list.sort[defaultSortKey]
        : undefined

    console.log(
      `   📊 List config: ${
        defaultView ? defaultView.name : "no default"
      } view, ${defaultSort ? "sorted by " + defaultSortKey : "no sort"}`
    )

    // Create a Set to track visited templates and prevent circular dependencies
    const visitedTemplates = new Set<string>()

    // Helper function to handle aliases
    const processAliases = (aliases: string[]): Record<string, Form> => {
      console.log("aliases: ", aliases)
      let aliasTemplatesForms: Record<string, Form> = {}

      aliases.map((alias) => {
        const aliasTemplate = templates[alias]
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
      /*    console.log("key2: ", key) */
      // Check for circular dependencies
      if (visitedTemplates.has(key)) {
        console.warn(`Circular dependency detected for template: ${key}`)
        return Promise.resolve({}) // Return empty object to break the cycle
      }

      // Add current template to visited set
      visitedTemplates.add(key)

      const template = templates[key] as Model
      try {
        // is it an implementation of another template?
        if (template?.aliases?.length) {
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

    const formModule = {
      _defaults: buildInitialValues(defaultState),
      schema: defaultState,
    }
    const listModule = {
      items: Array(defaultPerPage || 9).fill({}),
      ...(defaultPerPage && {
        itemsPerPage: defaultPerPage,
      }),
      ...(perPageOptions && {
        itemsPerPageArray: perPageOptions,
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
      ...(defaultPerPage && {
        limit: defaultPerPage,
      }),
      sortBy: defaultSort && [defaultSort.value[0]],
      sortDesc: defaultSort && [defaultSort.value[1]],
    }

    // Create the output files
    createJsonFile(type, listModule, "/list")
    createJsonFile(type, formModule, "/form")

    console.log(`✅ Module '${type}' generated successfully`)
  } catch (error) {
    const genError: GenerationError = {
      type: "BUILD_ERROR",
      message: `Failed to create module for type: ${type}`,
      context: { error },
    }
    console.error(`💥 ${genError.message}:`, error)
  }
}

/**
 * Array of type names to generate modules for
 */
const typeName = [
  "apps",
  "fellowships",
  "projects",
  "events",
  "news",
  "people",
  "publications",
  "affiliation",
  "disciplines",
  "mailing",
  "files",
  "tags",
  "users",
  "action",
  // "taxonomy", //TODO: à definir
]

console.log("🚀 Starting module generation...")
console.log(`📊 Generating ${typeName.length} modules: ${typeName.join(", ")}`)

const startTime = Date.now()
let successCount = 0
let errorCount = 0

typeName.forEach((type) => {
  try {
    createModule(type)
    successCount++
  } catch (error) {
    errorCount++
    console.error(`💥 Failed to generate module '${type}':`, error)
  }
})

const endTime = Date.now()
const duration = endTime - startTime

console.log("\n📋 Generation Summary:")
console.log(
  `✅ Successfully generated: ${successCount}/${typeName.length} modules`
)
if (errorCount > 0) {
  console.log(`❌ Failed: ${errorCount} modules`)
}
console.log(`⏱️  Duration: ${duration}ms`)
console.log("🎉 Module generation complete!")
