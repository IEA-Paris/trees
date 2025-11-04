import { Image } from "../../files/models/image"
import { Affiliations } from "../../affiliations/models/affiliations"
import { Files } from "../../files/models/files"
import { Video } from "../../files/models/video"
import Model from "../../model"
import { Related } from "../../misc/models/related"
import { Tag } from "../../misc/models/tags"
import { formType } from "../../form"

export interface Projects {
  name: string
  subtitle?: string
  description?: string
  summary?: string
  url?: URL
  affiliations?: Affiliations[]
  related?: Related[]
  gallery?: Image[]
  image?: Image
  video?: Video
  tags?: Tag[]
  files?: Files[]
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
  list: {
    create: true, // allow to create new items
    filters: {
      status: {
        type: "Select",
        items: projectStatus,
        value: "",
      },
      tags: {
        type: "AutoComplete",
        items: [],
        multiple: true,
        value: "",
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
          options: [20, 40, 60, 80, 100],
          default: 20,
        },
      } /* 
      expanded: {
        name: "expanded",
        icon: "arrow-expand-vertical",
      }, */,
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
        min: 2,
        max: 50,
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
      description: "Will be extracted from description if left empty",
      i18n: true,
      rules: {
        min: 5,
        max: 2000,
      },
      meta: "summary", // item type on schema.org
    },
    image: {
      label: "image",
      component: "ImagePicker",
      type: formType.Document,
      rules: {
        required: true,
        max: 1,
      },
      meta: "image",
    },
    url: {
      label: "url",
      component: "TextField",
      type: formType.Primitive,
      rules: {
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
      component: "DocumentPicker",
      type: formType.Document,
      meta: "affiliations",
    },
    related: {
      label: "related",
      component: "ObjectContainerPanel",
      type: formType.Template,
      meta: "related",
    },
    gallery: {
      label: "gallery",
      component: "ImagePicker",
      type: formType.Document,
      rules: {
        max: 100,
      },
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
      rules: {},
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
        color: true,
      },
      meta: "color",
    },
    date: {
      label: "date",
      component: "DatePicker",
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
        date: true,
      },
      meta: "featured",
    },
  },
}
export default defaultConfig
