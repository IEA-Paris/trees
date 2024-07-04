import { Image } from "./image"
import { Article } from "./article"
import Model from "./model"
export interface App {
  name: string
  logo: Image
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
        rules: {},
        label: "year",
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
      type: 0,
      component: "TextField",
      default: "",
      description:
        "The name of the app as displayed on google or the header of the app",
      hint: false,
      rules: {
        required: true,
        min: 2,
        max: 4,
      },
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, // if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "name", // item type on schema.org
    },
    logo: {
      label: "logo",
      type: 3,
      component: "ObjectContainerPanel",
      description: "The logo of the app",
      rules: {
        required: true,
      },
      default: { url: "", licence: "" }, // default value
    },
  },
}

export default defaultConfig
