import { Form, formType } from "../form"

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
      type: formType.Primitive,

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
      type: formType.Primitive,

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
      type: formType.Primitive,

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
      type: formType.Primitive,

      rules: {
        required: true,
        max: 200,
      },
      meta: "street",
    },
    city: {
      label: "city",
      component: "TextField",
      type: formType.Primitive,

      rules: {
        required: true,
        max: 200,
      },
      meta: "city",
    },
    country: {
      label: "country",
      component: "AutoComplete",
      type: formType.Primitive,

      meta: "country",
    },
    zip: {
      label: "zip",
      component: "TextField",
      type: formType.Primitive,
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
      type: formType.Object,
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      items: {
        lat: {
          label: "latitude",
          component: "TextField",
          type: formType.Primitive,
          rules: {
            required: true,
            min: 5,
            max: 200,
          },
          meta: "latitude",
        },
        lng: {
          label: "longitude",
          component: "TextField",
          type: formType.Primitive,
          rules: {
            required: true,
            min: 5,
            max: 200,
          },
          meta: "longitude",
        },
      },
      meta: "geocode",
    },
  },
}

export default defaultConfig
