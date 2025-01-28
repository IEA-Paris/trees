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
    perPage: {
      options: [9, 12, 16],
      default: 9,
    },
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
      description: "",
      rules: {
        required: true,
        min: 2,
        max: 100,
      },
      visibility: {
        default: true, // socials"default: true" is the same than "hidden = false"
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, //TODO: implement.  if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "name", // item type on schema.org
    },
    year: {
      label: "year",
      type: 0,
      component: "TextField",
      default: "",
      description: "",
      rules: {
        required: true,
        min: 2,
        max: 100,
      },
      visibility: {
        default: true, // socials"default: true" is the same than "hidden = false"
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, //TODO: implement.  if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "year",
    },
    theme: {
      label: "theme",
      type: 0,
      component: "TextField",
      default: "",
      description: "",
      rules: {
        required: true,
        min: 2,
        max: 100,
      },
      visibility: {
        default: true, // socials"default: true" is the same than "hidden = false"
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, //TODO: implement.  if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "theme",
    },
    url: {
      type: 0,
      component: "TextField",
      label: "url",
      default: "",
      description: "",
      rules: {
        required: true,
        url: true,
        max: 2048,
      },
      visibility: {
        default: true, // socials"default: true" is the same than "hidden = false"
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, //TODO: implement.  if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "url", // item type on schema.org
    },
  },
}

export default defaultConfig
