import { formType } from "../../form"
import Model from "../../model"

export interface Vintage {
  name: string
  year: number
  theme?: string
  url?: URL
  slug: string
}

const defaultConfig: Model = {
  form: {
    name: {
      label: "name",
      type: formType.Primitive,
      component: "TextField",
      rules: {
        required: true,
        min: 2,
        max: 100,
      },
      meta: "name", // item type on schema.org
    },
    year: {
      label: "year",
      type: formType.Primitive,
      component: "TextField",
      rules: {
        required: true,
        min: 2,
        max: 100,
      },
      meta: "year",
    },
    theme: {
      label: "theme",
      type: formType.Primitive,
      component: "TextField",
      i18n: true,
      rules: {
        required: true,
        min: 2,
        max: 100,
      },
      meta: "theme",
    },
    url: {
      type: formType.Primitive,
      component: "TextField",
      label: "url",
      rules: {
        required: true,
        url: true,
        max: 2048,
      },
      meta: "url", // item type on schema.org
    },
  },
}

export default defaultConfig
