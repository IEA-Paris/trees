import Model from "./model"

export interface Tag {
  name: string
  description: string
  icon: string
  createdAt: Date
  updatedAt: Date
}

const defaultConfig: Model = {
  source: "md",
  type: null, // 'directory' | 'file' | null
  path: null, // path to the folder where the content is stored
  list: {
    perPage: {
      options: [9, 12, 16],
      default: 9,
    },
    create: true, // allow to create new items
    filters: {
      year: {
        type: "Select",
        rules: {},
        label: "year",
        items: (articles: any) => {
          return articles.map((article: any) =>
            new Date(article.date).getFullYear()
          )
        },
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
      component: "TextField",
      type: 0, //
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "name",
    },
    description: {
      label: "description",
      component: "TextArea",
      type: 0, //
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
        min: 5,
        max: 2000,
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "description",
    },
    icon: {
      label: "icon",
      component: "TextField",
      type: 0, //
      default: "",
      description:
        "Select your icon from material design icons https://pictogrammers.com/library/mdi/",
      hint: false,
      rules: {},
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "icon",
    },
    createdAt: {
      label: "createdAt",
      component: false,
      type: 0, //
      default: "",
      description: "",
      hint: false,
      rules: {},
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "createdAt",
    },
    updatedAt: {
      label: "updatedAt",
      component: false,
      type: 0, //
      default: "",
      description: "",
      hint: false,
      rules: {},
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "updatedAt",
    },
  },
}
export default defaultConfig
