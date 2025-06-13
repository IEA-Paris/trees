import { Form } from "./form"
import { FormType } from "./form"

export interface Location {
  name: string
  details?: string // natural language description of the location
  alt?: string
  street?: string
  city?: string
  country?: string
  zip?: number
  geocode?: {
    lat: number
    lng: number
  }
}

export interface LocationForm {
  form: Record<string, Form>
}
const defaultConfig: LocationForm = {
  form: {
    name: {
      label: "name",
      component: "TextField",
      type: FormType.PRIMITIVE, //
      default: "",
      description: "",
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      meta: "name",
    },
    details: {
      label: "details",
      component: "TextArea",
      type: FormType.PRIMITIVE, //
      default: "",
      description: "",
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      meta: "details",
    },
    alt: {
      label: "alt",
      component: "TextArea",
      type: FormType.PRIMITIVE, //
      default: "",
      description: "",
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      meta: "alt",
    },
    street: {
      label: "street",
      component: "TextField",
      type: FormType.PRIMITIVE, //
      default: "",
      description: "",
      rules: {
        required: true,
        max: 200,
      },
      meta: "street",
    },
    city: {
      label: "city",
      component: "TextField",
      type: FormType.PRIMITIVE, //
      default: "",
      description: "",
      rules: {
        required: true,
        max: 200,
      },
      meta: "city",
    },
    country: {
      label: "country",
      component: "ListAutoComplete",
      type: FormType.PRIMITIVE, //
      default: "",
      description: "",
      meta: "country",
    },

    zip: {
      label: "zip",
      component: "TextField",
      type: FormType.PRIMITIVE, //
      default: "",
      description: "",
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      meta: "zip",
    },
    geocode: {
      label: "geocode",
      component: "LocationPicker",
      type: 1, //
      default: "",
      description: "",
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      items: {
        lat: {
          label: "latitude",
          component: "TextField",
          type: FormType.PRIMITIVE, //
          default: "",
          description: "",
          hint: false,
          rules: {
            required: true,
            min: 5,
            max: 200,
          },
          visibility: {
            default: true,
            switchIf: [],
            disjonctive: false,
          },
          meta: "latitude",
        },
        lng: {
          label: "longitude",
          component: "TextField",
          type: FormType.PRIMITIVE, //
          default: "",
          description: "",
          hint: false,
          rules: {
            required: true,
            min: 5,
            max: 200,
          },
          visibility: {
            default: true,
            switchIf: [],
            disjonctive: false,
          },
          meta: "longitude",
        },
      },

      meta: "geocode",
    },
  },
}

export default defaultConfig
