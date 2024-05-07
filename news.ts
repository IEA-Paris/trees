import { Image } from "./image"
import { People } from "./people"

export interface News {
  title: string
  description: string
  picture: Image
  color: string
  link: string
  date: string
  authors: [People]
  featured: string
}

export default {
  source: "gql",
  perPage: {
    options: [9, 12, 16],
    default: 9,
  },
  type: null, // 'directory' | 'file' | null
  path: null, // path to the folder where the content is stored
  create: true, // allow to create new items
  filters: {
    year: {
      type: "Select",
      rules: {},
      label: "year",
      items: [],
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
  schema: {
    /* firstname: string
    lastname: string
    affiliations: [{ affiliation: affiliation; positions: [position] }]
    picture: image
    socials: socials
    biography: string
    consent: consent
    groups: groups */
    title: {
      label: "title",
      component: "TextField",
      type: 0, // 0 = primitive, 1 = object, 2 = array, 3 = template
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, // if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "firstname", // item type on schema.org
    },
    lastname: {
      label: "lastname",
      component: "TextField",
      type: 0, // 0 = primitive, 1 = object, 2 = array, 3 = template
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, // if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "lastname", // item type on schema.org
    },
    consent: {
      label: "consent",
      component: "SimpleObjectWrapper",
      type: 3, // 0 = primitive, 1 = object, 2 = array, 3 = template
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, // if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "consent", // item type on schema.org
    },
  },
}
