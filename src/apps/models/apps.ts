import { Image } from "../../files/models/image"
import Model from "../../model"
import { Tag } from "../../misc/models/tags"
import { formType } from "../../form"
export interface Apps {
  appId: string
  name: string
  image?: Image
  description?: string
  summary?: string
  url?: URL
  tags?: Tag[]
  subtitle?: string
  color?: string
  date?: Date
  state?: appState
}
export enum appState {
  Active = "ACTIVE",
  Suspended = "SUSPENDED",
  Inactive = "INACTIVE",
}
const defaultConfig: Model = {
  list: {
    filters: {
      state: {
        type: "Select",
        items: appState,
        value: "",
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
      type: formType.Primitive,
      component: "TextField",
      description:
        "The name of the app as displayed on google or the header of the app",
      rules: {
        required: true,
        min: 2,
        max: 4,
      },
      meta: "name", // item type on schema.org
    },
    image: {
      label: "image",
      component: "ImagePicker",
      type: formType.Document,
      description: "The logo of the app",
      rules: {
        required: true,
      },
      default: { url: "", licence: "" }, // default value
    },
    description: {
      label: "description",
      component: "TextArea",
      type: formType.Primitive,
      i18n: true,
      rules: {
        required: true,
        min: 5,
        max: 2000,
      },
      meta: "description",
    },
    summary: {
      label: "summary",
      component: "TextArea",
      type: formType.Primitive,
      description: "Will be extracted from description if left empty",
      i18n: true,
      rules: {
        min: 5,
        max: 200,
      },
      meta: "summary",
    },
    subtitle: {
      label: "subtitle",
      component: "TextArea",
      type: formType.Primitive,

      i18n: true,
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      meta: "subtitle",
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
    tags: {
      label: "tags",
      component: "TagPicker",
      type: formType.Document,
      rules: {
        required: true,
      },
      meta: "tags",
    },
    state: {
      label: "appState",
      component: "Select",
      type: formType.Primitive,

      rules: {
        required: true,
      },
      items: appState,
      meta: "appState",
    },
    date: {
      label: "date",
      component: "DatePicker",
      type: formType.Primitive,

      rules: {
        required: true,
        date: true,
      },
      meta: "date",
    },
  },
}

export default defaultConfig
