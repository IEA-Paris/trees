import { Image } from "../files/image"
import { Location } from "../misc/location"
import Model from "../model"
import { formType } from "../form"

export interface Affiliation {
  location?: Location
  image?: Image
  name: string
  ror?: string
  url?: string
}
const defaultConfig: Model = {
  source: "md",
  list: {
    create: true, // allow to create new items
    filters: {
      year: {
        type: "Select",
        items: "",
      },
    },
    sort: {
      // sort options
      nameasc: {
        // by name from a to z
        icon: "sort-alphabetical-ascending",
        text: "by-name-from-a-to-z",
        value: ["name", 1],
      },
      namedesc: {
        // by name from z to a
        icon: "sort-alphabetical-descending",
        text: "by-name-from-z-to-a",
        value: ["name", -1],
      },
      dateasc: {
        // by date from most recent to oldest
        icon: "sort-calendar-descending",
        text: "by-date-most-recent-first",
        value: ["date", -1],
        default: true,
      },
      datedesc: {
        // by date from oldest to most recent
        icon: "sort-calendar-ascending",
        text: "by-date-oldest-first",
        value: ["date", 1],
      },
    },
    views: {
      rows: {
        name: "rows",
        icon: "view-list",
        perPage: {
          options: [9, 12, 16],
          default: 9,
        },
      },
      dense: {
        default: true,
        name: "dense",
        icon: "land-rows-horizontal",
        perPage: {
          options: [20, 40, 60, 80, 100],
          default: 20,
        },
      },
      tiles: {
        name: "tiles",
        icon: "view-quilt",
      },
      grid: {
        name: "grid",
        icon: "view-day",
      },
    },
  },
  form: {
    name: {
      label: "name",
      component: "TextField",
      type: formType.Primitive,
      i18n: true,
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      meta: "name",
    },

    image: {
      label: "image",
      component: "ImagePicker",
      type: formType.Document,

      meta: "image",
    },
    location: {
      label: "location",
      component: "ObjectContainerPanel",
      type: formType.Template,
      meta: "location",
    },
    ror: {
      label: "ror",
      component: "TextField", // TODO, ROR picker
      type: formType.Primitive,

      rules: {
        required: true,
        ror: true,
      },
      meta: "ror",
    },
    url: {
      label: "url",
      component: "TextField",
      type: formType.Primitive,

      rules: {
        required: true,
        url: true,
      },
      meta: "url",
    },
  },
}

export default defaultConfig
