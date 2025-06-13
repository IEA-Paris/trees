import { Image } from "./image"
import Model from "./model"
import { FormType } from "./form"
export interface RelatedEvent {
  bookingState: number // 0 - Server & Client -
  createdAt: Date // 0 - Server & Client -
  description?: string // 0 - Server & Client -
  image?: Image // 3 - Server & Client -
  name: string // 0 - Server & Client -
  outside?: boolean // 0 - Server & Client -
  start?: string // 0 - Server & Client -
  state: number // 0 - Server & Client -
  summary?: string // 0 - Server & Client -
  eventType: number // 0 : online, 1: physical, 2: hybrid// 0 - Server & Client -
  url: URL // 0 - Server & Client -
  slug: string
}

const defaultConfig: Model = {
  source: "gql",
  // markdown related keys
  path: "", // path to the folder where the content is stored
  type: "", // 'directory' | 'file'
  // GQL related keys

  //Features related keys
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
    bookingState: {
      label: "bookingState",
      component: false,
      type: FormType.PRIMITIVE, //
      default: 0,
      description: "",
      meta: "bookingState",
    },

    createdAt: {
      label: "createdAt",
      component: false,
      type: FormType.PRIMITIVE, //
      default: "",
      description: "",

      meta: "createdAt",
    },

    description: {
      label: "description",
      component: "TextArea",
      type: FormType.PRIMITIVE, //
      default: "",
      i18n: true,
      description: "",
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      meta: "description",
    },

    eventType: {
      label: "eventType",
      component: "Select",
      type: FormType.PRIMITIVE, //
      default: "",
      description: "",
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      meta: "eventType",
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
    name: {
      label: "name",
      component: "TextField",
      i18n: true,
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
    outside: {
      label: "outside",
      component: "BooleanCheckbox",
      type: FormType.PRIMITIVE, //
      default: "",
      description: "",
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      meta: "outside",
    },
    start: {
      label: "start",
      component: "DatePicker",
      type: FormType.PRIMITIVE, //
      default: "",
      description: "",
      rules: {
        required: true,
        date: true,
      },
      meta: "start",
    },
    state: {
      label: "state",
      component: "ListRadio",
      type: FormType.PRIMITIVE, //
      default: "",
      description: "",
      rules: {
        required: true,
      },
      meta: "state",
    },
    summary: {
      label: "summary",
      component: "TextArea",
      type: FormType.PRIMITIVE, //
      i18n: true,
      default: "",
      description: "",
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      meta: "summary",
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
  },
}

export default defaultConfig
