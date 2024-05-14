import { Image } from "./image"
import { People } from "./people"
import { Discipline } from "./disciplines"
import { Video } from "./video"
import { Tag } from "./tags"
import Model from "./model"
// define format from set of articles formats offered by PIAS (i.e. Zenodo api)
export interface Article {
  title: string
  abstract: string
  image: Image
  video: Video
  needDOI: boolean
  DOI: string
  Zid: string
  highlight: boolean
  date: Date
  authors: People[]
  issue: string
  lang: string
  disciplines: Discipline[]
  //format: Format[]
  tag: Tag[]
}
//TODO list + form

const defautConfig: Model = {
  source: "md",
  path: "content/article", // path to the folder where the content is stored
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
        rules: {},
        label: "year",
        items: (articles: Article[]) => {
          return articles.map((article: Article) =>
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
    title: {
      label: "title",
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
      meta: "title",
    },
    abstract: {
      label: "abstract",
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
      meta: "abstract",
    },
    image: {
      label: "image",
      component: "ObjectContainerPanel",
      type: 3, //
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "image",
    },
    video: {
      label: "video",
      component: "ObjectContainerPanel",
      type: 3, //
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "video",
    },
    needDOI: {
      label: "needDOI",
      component: "BooleanCheckbox",
      type: 0, //
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "needDOI",
    },

    DOI: {
      label: "DOI",
      component: "TextField",
      type: 0, //
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
        DOI: true,
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "DOI",
    },

    Zid: {
      label: "Zid",
      component: "TextField",
      type: 0, //
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
        // TODO add a Zenodo Id validation regex
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "Zid",
    },
    highlight: {
      label: "highlight",
      component: "BooleanCheckbox",
      type: 0, //
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "highlight",
    },

    date: {
      label: "date",
      component: "DatePicker", // TODO create the date picker
      type: 0, //
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
        date: true,
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "date",
    },

    authors: {
      label: "authors",
      component: "CollectionContainerPanel",
      type: 3, //
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "authors",
    },

    issue: {
      label: "issue",
      component: "TextField",
      type: 0, //
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "issue",
    },
    lang: {
      label: "lang",
      component: "TextField",
      type: 0, //
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "lang",
    },
    disciplines: {
      label: "disciplines",
      component: "CollectionContainerPanel",
      type: 3, //
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "disciplines",
    },
    format: {
      // TODO define inline @Antoine
      label: "format",
      component: "CollectionContainerPanel",
      type: 3, //
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "format",
    },
    tag: {
      label: "tag",
      component: "CollectionContainerPanel",
      type: 3, //
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
      meta: "tag",
    },
  },
}

export default defautConfig
