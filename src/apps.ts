import { Image } from "./image"
import Model from "./model"
import { mapEnum } from "../lib/utils"
import { Tag } from "./tags"
import { FormType } from "./form"
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
  ACTIVE,
  SUSPENDED,
  INACTIVE,
}
const defaultConfig: Model = {
  // fitlers used in the query by default (e.g. only published articles)
  queryFilters: {},
  source: "md",
  type: "directory", // 'directory' | 'file
  path: "content/app", // path to the folder where the content is stored
  list: {
    create: true, // allow to create new items
    perPage: {
      options: [9, 12, 16],
      default: 9,
    },
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
        default: true,
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
      type: FormType.PRIMITIVE,
      component: "TextField",
      default: "",
      description:
        "The name of the app as displayed on google or the header of the app",
      rules: {
        required: true,
        min: 2,
        max: 4,
      },
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, //TODO: implement.  if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "name", // item type on schema.org
    },
    image: {
      label: "image",
      type: FormType.ARRAY,
      component: "ObjectContainerPanel",
      description: "The logo of the app",
      rules: {
        required: true,
      },
      default: { url: "", licence: "" }, // default value
    },
    description: {
      label: "description",
      component: "TextArea",
      type: FormType.PRIMITIVE, //
      i18n: true,
      default: "",
      description: "",
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      meta: "description",
    },
    summary: {
      label: "summary",
      component: "TextArea",
      type: FormType.PRIMITIVE, //
      default: "",
      i18n: true,
      description: "",
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      meta: "summary",
    },
    subtitle: {
      label: "subtitle",
      component: "TextArea",
      type: FormType.PRIMITIVE, //
      default: "",
      i18n: true,
      description: "",
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
      type: FormType.PRIMITIVE, //
      default: "",
      description: "",
      rules: {
        required: true,
        url: true,
      },
      meta: "url",
    },
    tags: {
      label: "tags",
      component: "CollectionContainerPanel",
      type: FormType.ARRAY, //
      default: "",
      description: "",
      rules: {
        required: true,
      },
      meta: "tags",
    },
    state: {
      label: "appState",
      component: "Select",
      type: FormType.PRIMITIVE, //
      default: "",
      description: "",
      rules: {
        required: true,
      },
      items: mapEnum(appState),
      meta: "appState",
    },
    date: {
      label: "date",
      component: "DatePicker",
      type: FormType.PRIMITIVE, //
      default: "",
      description: "",
      rules: {
        required: true,
        date: true,
      },
      meta: "date",
    },
  },
}

export default defaultConfig
