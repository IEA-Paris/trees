import { Image } from "./image"
import { Affiliation } from "./affiliation"
import { FellowshipDetails } from "./fellowshipDetails"
import { File } from "./files"
import Model from "./model"
import { Video } from "./video"
import { Disciplines } from "./disciplines"
import { RelatedPeople } from "./relatedPeople"
import { formType } from "./form"
export interface Fellowships {
  action?: string
  affiliations?: Affiliation[] // AKA members behind the fellowships
  applicationStart?: Date
  disciplines?: Disciplines[] // 3 - Server & Client //Inside=> Presentation
  fellowshipStart?: Date
  contact?: string
  description: string
  subtitle: string
  fellowshipDetails: FellowshipDetails
  fellows?: RelatedPeople[]
  url?: URL
  applicationStop?: Date
  fellowshipStop?: Date
  image?: Image
  publicationDate?: Date
  summary?: string
  files?: File[]
  fellowshipType: [FellowshipType]
  gallery?: Image[]
  name: string
  video?: Video[]
  status: FellowshipStatus
}

export enum FellowshipType {
  ShortStay = "SHORT_STAY",
  LongStay = "LONG_STAY",
  InGroup = "IN_GROUP",
}
export enum FellowshipStatus {
  Planned = "PLANNED",
  Ongoing = "ONGOING",
  Finished = "FINISHED",
  Cancelled = "CANCELLED",
}

const defaultConfig: Model = {
  type: "", // 'directory' | 'file'
  path: "", // path to the folder where the content is stored
  source: "gql",
  list: {
    create: true, // allow to create new items

    filters: {
      status: {
        type: "Select",
        multiple: true,
        items: FellowshipStatus,
      },
      fellowshipType: {
        type: "Select",
        multiple: true,
        items: FellowshipType,
      },
      affiliation: {
        type: "Select",
        multiple: true,
        items: [],
      },
      disciplines: {
        type: "Select",
        multiple: true,
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
      } /* /* 
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
      i18n: true,
      type: formType.Primitive,

      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      meta: "name",
    },
    subtitle: {
      label: "subtitle",
      component: "TextField",
      i18n: true,
      type: formType.Primitive,

      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      meta: "subtitle",
    },
    summary: {
      label: "summary",
      component: "TextArea",
      type: formType.Primitive,

      i18n: true,
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      meta: "summary",
    },
    action: {
      label: "action",
      component: "TextField",
      type: formType.Primitive,

      rules: {
        required: true,
      },
      meta: "action", // item type on schema.org
    },
    affiliations: {
      label: "affiliations",
      component: "AffiliationPicker",
      type: formType.Document,
      rules: {
        required: true,
      },
      meta: "affiliations", // item type on schema.org
    },
    applicationStart: {
      label: "applicationStart",
      component: "DatePicker", //TODO
      type: formType.Primitive,

      rules: {
        required: true,
        date: true,
      },
      meta: "applicationStart",
    },
    fellowshipStart: {
      label: "fellowshipStart",
      component: "DatePicker", //TODO
      type: formType.Primitive,

      rules: {
        required: true,
        date: true,
      },
      meta: "fellowshipStart",
    },
    contact: {
      label: "contact",
      component: "TextField",
      type: formType.Primitive,

      rules: {
        required: true,
        email: true,
      },
      meta: "contact",
    },
    description: {
      label: "description",
      component: "TextArea",
      type: formType.Primitive,

      i18n: true,
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      meta: "description",
    },
    disciplines: {
      label: "disciplines",
      component: "DisciplinePicker",
      type: formType.Document,
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      meta: "disciplines",
    },
    fellowshipType: {
      label: "fellowshipType",
      component: "Select",
      type: formType.Primitive,

      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      items: FellowshipType,
      meta: "fellowshipType",
    },
    fellowshipDetails: {
      label: "details",
      component: "ObjectContainerPanel",
      type: formType.Template,
      rules: {
        required: true,
      },
      meta: "details",
    },
    fellows: {
      label: "fellows",
      component: "CollectionContainerPanel",
      type: formType.Array,
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      items: {
        label: "fellow",
        component: "DocumentPicker",
        type: formType.Document,
        meta: "fellow",
      },

      meta: "fellows",
    },
    gallery: {
      label: "gallery",
      component: "ImagePicker",
      type: formType.Document,
      multiple: true,
      meta: "gallery",
    },
    url: {
      label: "url",
      component: "TextField",
      type: formType.Primitive,

      rules: {
        required: true,
        url: true,
      },
      meta: "url",
    },
    fellowshipStop: {
      label: "fellowshipStop",
      component: "DatePicker",
      type: formType.Primitive,

      rules: {
        required: true,
        date: true,
      },
      meta: "fellowshipStop",
    },
    applicationStop: {
      label: "applicationStop",
      component: "DatePicker",
      type: formType.Primitive,

      rules: {
        required: true,
        date: true,
      },
      meta: "applicationStop",
    },
    image: {
      label: "image",
      component: "ImagePicker",
      type: formType.Document,

      rules: {
        required: true,
      },
      meta: "image",
    },
    publicationDate: {
      label: "publicationDate",
      component: "DatePicker",
      type: formType.Primitive,

      rules: {
        required: true,
        date: true,
      },
      meta: "publicationDate",
    },

    files: {
      label: "files",
      component: "FilePicker",
      type: formType.Document,
      rules: {
        required: true,
      },
      meta: "files",
    },

    video: {
      label: "video",
      component: "CollectionContainerPanel",
      type: formType.Template,

      rules: {
        required: true,
      },
      meta: "video",
    },
  },
}
export default defaultConfig
