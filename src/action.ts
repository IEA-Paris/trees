import { Image } from "./image"
import Model from "./model"

export interface Action {
  color?: string
  link: string
  image: Image
  name: string
  video?: URL
  slots: string[]
}

const defaultConfig: Model = {
  // fitlers used in the query by default (e.g. only published articles)
  queryFilters: {},
  source: "md",
  path: "content/actions", // path to the folder where the content is stored
  type: "directory", // 'directory' | 'file
  list: {
    perPage: {
      options: [9, 12, 16],
      default: 9,
    },
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
      description: "The name of the ad",
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
      type: 3,
      component: "ObjectContainerPanel",
      description: "The logo of the app",
      rules: {
        required: true,
      },
      default: { url: "", licence: "" }, // default value
    },
    link: {
      label: "url",
      type: 0,
      component: "TextField",
      default: "",
      description: "The url of the app",
      rules: {
        required: true,
        url: true,
      },
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, //TODO: implement.  if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "link", // item type on schema.org
    },
    color: {
      label: "background_color",
      type: 0,
      component: "TextField",
      default: "#FFFFFF",
      description: "The background color of the content",
      rules: {
        color: true,
      },
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, //TODO: implement.  if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "color", // item type on schema.org
    },
    video: {
      label: "video",
      component: "TextField",
      type: 0, //
      default: "",
      description: "",
      rules: {
        required: true,
        url: true,
      },
      meta: "video",
    },
    slots: {
      label: "slots",
      component: "TextField",
      type: 2, //
      default: "",
      description: "",
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      meta: "slots",
    },
  },
}
export default defaultConfig
