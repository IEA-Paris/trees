import { formType } from "./form"
import Model from "./model"

export interface Vintage {
  name: string
  year: number
  theme?: string
  url?: URL
}

const defaultConfig: Model = {
  source: "md",
  type: "", // 'directory' | 'file'
  path: "", // path to the folder where the content is stored
  list: {
    create: true, // allow to create new items
    filters: {
      year: {
        type: "Select",
      },
    },
    sort: {
      // sort options
      nameasc: {
        // by name from a to z
        icon: "sort-alphabetical-ascending",
        text: "by-name-from-a-to-z",
        value: ["article_title", 1],
      },
      namedesc: {
        // by name from z to a
        icon: "sort-alphabetical-descending",
        text: "by-name-from-z-to-a",
        value: ["article_title", -1],
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
