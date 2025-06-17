import { Image } from "./image"
import Model from "./model"
import { RelatedPeople } from "./relatedPeople"
import { Related } from "./related"
import { Tag } from "./tags"
import { mapEnum } from "../lib/utils"
import { FormType } from "./form"

export interface News {
  name: string
  authors: [RelatedPeople]
  category?: newsCategories
  description?: string
  summary?: string
  subtitle?: string
  tags?: Tag[]
  image?: Image
  gallery?: Image[]
  color?: string
  url?: URL
  date?: Date
  featured?: Date
  related?: Related[]
  files?: File[]
}
export enum newsCategories {
  PRESS_RELEASE,
  INTERVIEW,
  ARTICLE,
  OPINION,
  REPORT,
  BLOG,
  LIFE_AT_THE_INSTITUTE,
  EVENT,
  ANNOUNCEMENT,
  JOB,
  FELLOWSHIP,
  GRANT,
  AWARD,
  PROJECT,
  TOOL,
  SOFTWARE,
  DATA,
  PUBLICATION,
  VIDEO,
  AUDIO,
}
const defaultConfig: Model = {
  source: "gql",
  type: "", // 'directory' | 'file'
  path: "", // path to the folder where the content is stored
  list: {
    perPage: {
      options: [9, 12, 16],
      default: 9,
    },
    create: true, // allow to create new items
    filters: {
      tags: {
        type: "AutoComplete",
        multiple: true,
      },
      category: {
        type: "Select",
        multiple: true,
        items: mapEnum(newsCategories),
      },
    },
    sort: {
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
      dense: {
        name: "dense",
        icon: "land-rows-horizontal",
      },
      expanded: {
        name: "expanded",
        icon: "arrow-expand-vertical",
      },
    },
  },

  form: {
    name: {
      label: "name",
      component: "TextField",
      type: FormType.PRIMITIVE, // 0 = primitive, 1 = object, 2 = array, 3 = template
      i18n: true,
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
    summary: {
      label: "summary",
      component: "TextArea",
      type: FormType.PRIMITIVE, // 0 = primitive, 1 = object, 2 = array, 3 = template
      i18n: true,
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
      meta: "summary", // item type on schema.org
    },
    subtitle: {
      label: "subtitle",
      component: "TextField",
      type: FormType.PRIMITIVE, // 0 = primitive, 1 = object, 2 = array, 3 = template
      i18n: true,
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
      meta: "subtitle", // item type on schema.org
    },
    description: {
      label: "description",
      component: "TextArea",
      i18n: true,
      type: FormType.PRIMITIVE, //
      default: "",
      description: "",
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      meta: "description",
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
    color: {
      label: "color",
      component: "ColorPicker",
      type: FormType.PRIMITIVE, //
      default: "",
      description: "",
      rules: {
        required: true,
        color: true,
      },
      meta: "color",
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
    files: {
      label: "files",
      component: "CollectionContainerPanel",
      type: FormType.ARRAY, //
      default: "",
      description: "",
      rules: {
        required: true,
      },
      meta: "files",
    },
    gallery: {
      label: "gallery",
      component: "CollectionContainerPanel",
      type: FormType.ARRAY, //
      default: "",
      description: "",
      meta: "gallery",
    },
    date: {
      label: "date",
      component: "DatePicker",
      type: FormType.PRIMITIVE, //
      default: "",
      description: "",
      rules: {
        required: true,
        date: true,
      },
      meta: "date",
    },
    featured: {
      label: "featured",
      component: "DatePicker",
      type: FormType.PRIMITIVE, //
      default: "",
      description: "",
      rules: {
        required: true,
        date: true,
      },
      meta: "featured",
    },
    tags: {
      label: "tags",
      component: "CollectionContainerPanel",
      type: FormType.ARRAY, //
      default: "",
      description: "",
      rules: {
        required: true,
        min: 1,
      },
      meta: "tags",
    },
    related: {
      label: "related",
      component: "ObjectContainerPanel",
      type: FormType.ARRAY, //
      default: "",
      description: "",
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      meta: "related",
    },

    category: {
      label: "category",
      component: "Select",
      type: FormType.PRIMITIVE, // 0 = primitive, 1 = object, 2 = array, 3 = template
      default: "",
      description: "",
      rules: {
        required: true,
      },
      items: mapEnum(newsCategories),
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, //TODO: implement.  if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "category", // item type on schema.org
    },
  },
}

export default defaultConfig
