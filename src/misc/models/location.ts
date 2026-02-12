import { Form, formType } from "../../form"
import { Image } from "../../files/models/image"
export interface Location {
  name: string
  acronym: string
  details?: string // natural language description of the location
  image?: Image
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
    acronym: {
      label: "acronym",
      component: "TextField",
      type: formType.Primitive,
      rules: {
        max: 20,
      },
      meta: "acronym",
    },
    image: {
      label: "image",
      component: "ImagePicker",
      type: formType.Document,
      rules: {},
      meta: "image",
    },
    details: {
      label: "details",
      component: "TextArea",
      type: formType.Primitive,
      rules: {
        min: 5,
        max: 2000,
      },
      meta: "details",
    },
    street: {
      label: "street",
      component: "TextField",
      type: formType.Primitive,
      rules: {
        required: true,
        max: 2000,
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
      //!\TODO add countries list from enum or external source
    },
    zip: {
      label: "zip",
      component: "TextField",
      type: formType.Primitive,
      rules: {
        required: true,
        numerical: true,
      },
      meta: "zip",
    },
    geocode: {
      label: "geocode",
      component: "GeocodePicker",
      type: formType.Object,
      rules: {},
      items: {
        lat: {
          label: "latitude",
          component: false,
          type: formType.Primitive,
          meta: "latitude",
        },
        lng: {
          label: "longitude",
          component: false,
          type: formType.Primitive,
          meta: "longitude",
        },
      },
      meta: "geocode",
    },
  },
}

export default defaultConfig
