import Model from "./model"
import { Image } from "./image"
import { FormType } from "./form"

export interface File {
  name: string
  url: URL
  size: number
  fileType: string
  hash: string
  path: string
  file: string
  image?: Image
  thumb: URL
  createdAt: Date
  updatedAt: Date
  id: string
}

const defautConfig: Model = {
  source: "md",
  type: "", // 'directory' | 'file'
  path: "", // path to the folder where the content is stored
  list: {
    create: true, // allow to create new items
    perPage: {
      options: [9, 12, 16],
      default: 9,
    },
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
      component: "TextField",
      type: FormType.PRIMITIVE, //
      default: "",
      description: "",
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      meta: "name",
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
    size: {
      label: "size",
      component: false,
      type: FormType.PRIMITIVE, //
      default: "",
      description: "",
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      meta: "size",
    },
    fileType: {
      label: "type",
      component: "ListSelect",
      type: FormType.PRIMITIVE, //
      default: "",
      description: "",
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      meta: "type",
    },
    hash: {
      label: "hash",
      component: false,
      type: FormType.PRIMITIVE, //
      default: "",
      description: "",
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      meta: "hash",
    },
    path: {
      label: "path",
      component: "TextField",
      type: FormType.PRIMITIVE, //
      default: "",
      description: "",
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      meta: "path",
    },
    file: {
      label: "file",
      component: "TextField",
      type: FormType.PRIMITIVE, //
      default: "",
      description: "",
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      meta: "file",
    },
    image: {
      label: "image",
      component: "ObjectContainerPanel",
      type: FormType.ARRAY, //
      default: "",
      description: "",
      rules: {
        required: true,
      },
      meta: "image",
    },
    thumb: {
      label: "thumb",
      component: "TextField",
      type: FormType.PRIMITIVE, //
      default: "",
      description: "",
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      meta: "thumb",
    },
    createdAt: {
      label: "createdAt",
      component: false,
      type: FormType.PRIMITIVE, //
      default: "",
      description: "",
      rules: {
        required: true,
        date: true,
      },
      meta: "createdAt",
    },
    updatedAt: {
      label: "updatedAt",
      component: false,
      type: FormType.PRIMITIVE, //
      default: "",
      description: "",
      rules: {
        required: true,
        date: true,
      },
      meta: "updatedAt",
    },
    id: {
      label: "id",
      component: "TextField",
      type: FormType.PRIMITIVE, //
      default: "",
      description: "",
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      meta: "id",
    },
  },
}

export default defautConfig
