import { Image } from "./image"
import Model from "./model"
import { People } from "./people"
import { RelatedEvent } from "./relatedEvents"
import { RelatedProject } from "./relatedProject"
import { RelatedPublications } from "./relatedPublications"
import { Tag } from "./tags"

export interface News {
  name: string
  category?: number
  description?: string
  tags?: Tag[]
  image?: Image
  gallery?: Image[]
  color?: string
  url?: URL
  date?: Date
  featured?: Date
  relatedProject?: RelatedProject[] | string[]
  relatedEvents?: RelatedEvent[] | string[]
  relatedPublications?: RelatedPublications[] | string[]
  people?: People[]
  files?: File[]
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

    description: {
      label: "description",
      component: "TextArea",
      type: 0, //
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
      type: 3, //
      default: "",
      description: "",
      rules: {
        required: true,
      },
      meta: "image",
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
    url: {
      label: "url",
      component: "TextField",
      type: 0, //
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
      type: 3, //
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
      type: 3, //
      default: "",
      description: "",
      meta: "gallery",
    },
    date: {
      label: "date",
      component: "DatePicker",
      type: 0, //
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
      type: 0, //
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
      type: 3, //
      default: "",
      description: "",
      rules: {
        required: true,
        min: 1,
      },
      meta: "tags",
    },
    relatedProject: {
      label: "relatedProject",
      component: "DocumentPicker",
      type: 4, //
      default: "",
      description: "",
      rules: {
        required: true,
        min: 1,
      },
      meta: "relatedProject",
    },
    relatedPublications: {
      label: "relatedPublications",
      component: "DocumentPicker",
      type: 4, //
      default: "",
      description: "",
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      meta: "relatedPublications",
    },
    relatedEvents: {
      label: "relatedEvent",
      component: "DocumentPicker",
      type: 4, //
      default: "",
      description: "",
      meta: "event",
    },
    people: {
      label: "people",
      component: "CollectionContainerPanel",
      type: 3, //
      default: "",
      description: "",
      rules: {
        required: true,
        min: 1,
      },
      meta: "people",
    },

    category: {
      label: "category",
      component: "Select",
      type: 0, // 0 = primitive, 1 = object, 2 = array, 3 = template
      default: "",
      description: "",
      rules: {
        required: true,
      },
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
