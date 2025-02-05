import { Image } from "./image"
import { Video } from "./video"
import Model from "./model"

export interface RelatedProject {
  name: string
  shortDescription?: string
  description?: string
  url: URL
  image?: Image
  video?: Video
  color?: string
  date?: Date
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
    name: {
      label: "name",
      component: "TextField",
      type: 0, // 0 = primitive, 1 = object, 2 = array, 3 = template
      default: "",
      description: "",
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, //TODO: implement.  if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "name", // item type on schema.org
    },
    shortDescription: {
      label: "shortDescription",
      component: "TextArea",
      type: 0, // 0 = primitive, 1 = object, 2 = array, 3 = template
      default: "",
      description: "",
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, //TODO: implement.  if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "shortDescription", // item type on schema.org
    },
    description: {
      label: "description",
      component: "TextArea",
      type: 0, // 0 = primitive, 1 = object, 2 = array, 3 = template
      default: "",
      description: "",
      rules: {
        required: true,
        min: 5,
        max: 2000,
      },
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, //TODO: implement.  if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "description", // item type on schema.org
    },
    url: {
      label: "url",
      component: "TextField",
      type: 0, // 0 = primitive, 1 = object, 2 = array, 3 = template
      default: "",
      description: "",
      rules: {
        required: true,
        url: true,
      },
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, //TODO: implement.  if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "url", // item type on schema.org
    },

    image: {
      label: "image",
      component: "ObjectContainerPanel",
      type: 3, //
      default: "",
      description: "",
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      meta: "image",
    },
    video: {
      label: "video",
      component: "ObjectContainerPanel",
      type: 3, //
      default: "",
      description: "",
      meta: "video",
    },
    color: {
      label: "color",
      component: "TextColorPicker",
      type: 0, //
      default: "",
      description: "",
      rules: {
        required: true,
        color: true,
      },
      meta: "color",
    },
    date: {
      label: "date",
      component: "FiDatePicker",
      type: 0, //
      default: "",
      description: "",
      rules: {
        required: true,
        date: true,
      },
      meta: "date",
    },
  },
}
export default defaultConfig
