import { Image } from "./image"
import { Affiliation } from "./affiliations"
import { File } from "./files"
import { Video } from "./video"
import Model from "./model"
import { Related } from "./related"
import { Tag } from "./tags"
import { formType } from "./form"

export interface Projects {
  name: string
  subtitle?: string
  description?: string
  summary?: string
  url?: URL
  affiliations?: Affiliation[]
  related?: Related[]
  gallery?: Image[]
  image?: Image
  video?: Video
  tags?: Tag[]
  files?: File[]
  color?: string
  date?: Date
  featured?: Date
  status: projectStatus
}

export enum projectStatus {
  Planned = "PLANNED",
  InProgress = "IN_PROGRESS",
  Finished = "FINISHED",
  Canceled = "CANCELED",
}
const defaultConfig: Model = {
  source: "md",
  type: "", // 'directory' | 'file'
  path: "", // path to the folder where the content is stored
  list: {
    create: true, // allow to create new items
    filters: {
      status: {
        type: "Select",
        items: projectStatus,
      },
      tags: {
        type: "AutoComplete",
        items: [],
        multiple: true,
      },
    },
    sort: {
      // sort options
      nameasc: {
        // by name from a to z
        icon: "sort-alphabetical-ascending",
        text: "by-name-from-a-to-z",
        value: ["title", 1],
      },
      namedesc: {
        // by name from z to a
        icon: "sort-alphabetical-descending",
        text: "by-name-from-z-to-a",
        value: ["title", -1],
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
          options: [20, 60, 80],
          default: 20,
        },
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
      type: formType.Primitive,
      i18n: true,
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      meta: "title", // item type on schema.org
    },
    subtitle: {
      label: "subtitle",
      component: "TextArea",
      type: formType.Primitive,
      i18n: true,
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      meta: "subtitle", // item type on schema.org
    },
    description: {
      label: "description",
      component: "TextArea",
      type: formType.Primitive,
      i18n: true,
      rules: {
        required: true,
        min: 5,
        max: 2000,
      },
      meta: "description", // item type on schema.org
    },
    summary: {
      label: "summary",
      component: "TextArea",
      type: formType.Primitive,
      i18n: true,
      rules: {
        required: true,
        min: 5,
        max: 2000,
      },
      meta: "summary", // item type on schema.org
    },
    url: {
      label: "url",
      component: "TextField",
      type: formType.Primitive,

      rules: {
        required: true,
        url: true,
      },
      meta: "url", // item type on schema.org
    },
    status: {
      label: "status",
      component: "Select",
      type: formType.Primitive,
      rules: {
        required: true,
      },
      items: projectStatus,
      meta: "status",
    },
    affiliations: {
      label: "affiliations",
      component: "AffiliationPicker",
      type: formType.Document,
      meta: "affiliations",
    },
    related: {
      label: "related",
      component: "ObjectContainerPanel",
      type: formType.Template,

      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      meta: "related",
    },
    image: {
      label: "image",
      component: "ImagePicker",
      type: formType.Document,
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      meta: "image",
    },
    gallery: {
      label: "gallery",
      component: "ImagePicker",
      type: formType.Document,
      multiple: true,
      meta: "gallery",
    },
    video: {
      label: "video",
      component: "ObjectContainerPanel",
      type: formType.Template,

      meta: "video",
    },
    tags: {
      label: "tags",
      component: "TagPicker",
      type: formType.Document,
      rules: {
        required: true,
      },
      meta: "tags",
    },
    files: {
      label: "files",
      component: "FilePicker",
      type: formType.Document,
      meta: "files",
    },
    color: {
      label: "color",
      component: "ColorPicker",
      type: formType.Primitive,
      rules: {
        required: true,
        color: true,
      },
      meta: "color",
    },
    date: {
      label: "date",
      component: "FiDatePicker",
      type: formType.Primitive,
      rules: {
        required: true,
        date: true,
      },
      meta: "date",
    },
    featured: {
      label: "featured",
      component: "DatePicker",
      type: formType.Primitive,
      rules: {
        required: true,
        date: true,
      },
      meta: "featured",
    },
  },
}
export default defaultConfig
