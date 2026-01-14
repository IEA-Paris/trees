import Model from "../../model"
import { formType } from "../../form"
import { Image } from "../../files/models/image"
export interface Tag {
  name: string
  description?: string
  image: Image
  icon?: string
  createdAt?: Date
  updatedAt?: Date
  slug: string
}

const defaultConfig: Model = {
  list: {
    filters: {},
    sort: {
      // sort options
      nameasc: {
        // by name from a to z
        icon: "sort-alphabetical-ascending",
        text: "by-name-from-a-to-z",
        value: [{ article_title: 1 }],
        active: false,
      },
      namedesc: {
        // by name from z to a
        icon: "sort-alphabetical-descending",
        text: "by-name-from-z-to-a",
        value: [{ article_title: -1 }],
        active: false,
      },
      dateasc: {
        // by date from most recent to oldest
        icon: "sort-calendar-descending",
        text: "by-date-most-recent-first",
        value: [{ date: -1 }],
        default: true,
        active: true,
      },
      datedesc: {
        // by date from oldest to most recent
        icon: "sort-calendar-ascending",
        text: "by-date-oldest-first",
        value: [{ date: 1 }],
        active: false,
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
      component: "TextField",
      type: formType.Primitive,
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      meta: "name",
    },
    image: {
      label: "image",
      component: "ImagePicker",
      description: "will replace the icon if provided",
      type: formType.Document,

      meta: "image",
    },
    description: {
      label: "description",
      component: "TextArea",
      type: formType.Primitive,
      rules: {
        required: true,
        min: 5,
        max: 2000,
      },
      meta: "description",
    },
    icon: {
      label: "icon",
      component: "IconPicker",
      type: formType.Primitive,
      description:
        "Select your icon from material design icons https://pictogrammers.com/library/mdi/",
      meta: "icon",
      /*  rules: {
        icon: false, // regex "mdi" TODO
      }, */
    },
  },
}
export default defaultConfig
