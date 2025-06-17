import { Image } from "./image"
import Model from "./model"
import { formType } from "./form"

export interface RelatedPeople {
  firstname: string
  lastname: string
  image?: Image
  slug: string
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
        items: "",
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
    firstname: {
      label: "firstname",
      component: "TextField",
      type: formType.Primitive, //
      default: "",
      description: "",
      rules: {
        required: true,
        min: 1,
        max: 200,
      },
      meta: "firstname",
    },
    lastname: {
      label: "lastname",
      component: "TextField",
      type: formType.Primitive, //
      default: "",
      description: "",
      rules: {
        required: true,
        min: 1,
        max: 200,
      },
      meta: "lastname",
    },

    image: {
      label: "image",
      component: "ObjectContainerPanel",
      type: formType.Template, //
      default: "",
      description: "",
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      meta: "image",
    },
  },
}
export default defaultConfig
