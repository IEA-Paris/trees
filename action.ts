import { image } from "./image"

export interface Action {
  color: string
  link: string
  picture: image
  title: string
}

export default {
  // fitlers used in the query by default (e.g. only published articles)
  queryFilters: {},
  source: "md",
  perPage: {
    options: [9, 12, 16],
    default: 9,
  },
  path: "content/actions", // path to the folder where the content is stored
  create: true, // allow to create new items
  type: "directory", // 'directory' | 'file
  filters: {
    year: {
      type: "Select",
      rules: {},
      label: "year",
      items: () => {
        return []
      },
    } /* 
    categories: {
      type: 'TextInput',
      rules: {},
      label: 'Search',
    },
    author: {
      type: 'Autocomplete',
      rules: {},
      label: 'authors',
    }, */,
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
  views: [
    {
      name: "rows",
      icon: "view-list",
      default: true,
    },
    {
      name: "tiles",
      icon: "view-quilt",
    },
    {
      name: "grid",
      icon: "view-day",
    },
  ],
  form: {
    title: {
      label: "title",
      type: "TextField",
      default: "",
      description: "The title of the ad",
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
      meta: "title", // item type on schema.org
    },

    picture: {
      label: "picture",
      type: "template",
      description: "The logo of the app",
      rules: {
        required: true,
      },
      default: { url: "", licence: "" }, // default value
    },
    url: {
      label: "url",
      type: "TextField",
      default: "",
      description: "The url of the app",
      hint: false,
      rules: {
        required: true,
        min: 2,
        max: 4,
        url: true,
      },
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, // if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "url", // item type on schema.org
    },
    color: {
      label: "background_color",
      type: "ColorPicker",
      default: "#FFFFFF",
      description: "The background color of the content",
      hint: false,
      rules: {},
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, // if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "color", // item type on schema.org
    },
  },
}
//TODO list + form
