import { Form } from "./form"
import { formType } from "./form"

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
      type: formType.Primitive, //
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
      type: formType.Primitive, //
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
      type: formType.Primitive, //
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
      type: formType.Primitive, //
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
      type: formType.Primitive, //
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
      component: "AutoComplete",
      type: formType.Primitive, //
      default: "",
      description: "",
      meta: "country",
    },

    zip: {
      label: "zip",
      component: "TextField",
      type: formType.Primitive, //
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
      type: formType.Object, //
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
          type: formType.Primitive, //
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
          type: formType.Primitive, //
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
