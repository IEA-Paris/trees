import { Image } from "./image"
import { Affiliation } from "./affiliations"
import { FellowshipDetails } from "./fellowshipDetails"
import { File } from "./files"
import Model from "./model"
import { Video } from "./video"
import { Disciplines } from "./disciplines"
import { RelatedPeople } from "./relatedPeople"
import { mapEnum } from "../lib/utils"
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
  member?: Affiliation[]
  publicationDate?: Date
  summary?: string
  files?: File[]
  fellowshipType: FellowshipType
  gallery?: Image[]
  name: string
  video?: Video[]
  status: FellowshipStatus
}

export enum FellowshipType {
  SHORT_STAY,
  LONG_STAY,
  IN_GROUP,
}
export enum FellowshipStatus {
  PLANNED,
  ONGOING,
  FINISHED,
  CANCELLED,
}

const defaultConfig: Model = {
  type: "", // 'directory' | 'file'
  path: "", // path to the folder where the content is stored
  source: "gql",
  list: {
    create: true, // allow to create new items
    perPage: {
      options: [9, 12, 16],
      default: 9,
    },
    filters: {
      status: {
        type: "Select",
        multiple: true,
        items: mapEnum(FellowshipStatus),
      },
      fellowshipType: {
        type: "Select",
        multiple: true,
        items: mapEnum(FellowshipType),
      },
      affiliation: {
        type: "Select",
        multiple: true,
        items: [],
      },
      discipline: {
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
    action: {
      label: "action",
      component: "TextField",
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
      meta: "action", // item type on schema.org
    },
    affiliations: {
      label: "affiliations",
      component: "CollectionContainerPanel",
      type: 3, // 0 = primitive, 1 = object, 2 = array, 3 = template
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
      meta: "affiliations", // item type on schema.org
    },

    applicationStart: {
      label: "applicationStart",
      component: "DatePicker", //TODO
      type: 0, //
      default: "",
      description: "",
      rules: {
        required: true,
        date: true,
      },
      meta: "applicationStart",
    },
    fellowshipStart: {
      label: "fellowshipStart",
      component: "DatePicker", //TODO
      type: 0, //
      default: "",
      description: "",
      rules: {
        required: true,
        date: true,
      },
      meta: "fellowshipStart",
    },
    contact: {
      label: "contact",
      component: "TextField",
      type: 0, //
      default: "",
      description: "",
      rules: {
        required: true,
        email: true,
      },
      meta: "contact",
    },
    description: {
      label: "description",
      component: "TextArea",
      type: 0, //
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

    disciplines: {
      label: "disciplines",
      component: "CollectionContainerPanel",
      type: 3, //
      default: "",
      description: "",
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
      type: 0, //
      default: "",
      description: "",
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      items: mapEnum(FellowshipType),
      meta: "fellowshipType",
    },
    fellowshipDetails: {
      label: "details",
      component: "ObjectContainerPanel",
      type: 3, //
      default: "",
      description: "",
      rules: {
        required: true,
      },
      meta: "details",
    },
    fellows: {
      label: "fellows",
      component: "ObjectContainerPanel",
      type: 3, //
      default: "",
      description: "",
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      meta: "fellows",
    },
    gallery: {
      label: "gallery",
      component: "CollectionContainerPanel",
      type: 3, //
      default: "",
      description: "",
      meta: "gallery",
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
    fellowshipStop: {
      label: "fellowshipStop",
      component: "DatePicker",
      type: 0, //
      default: "",
      description: "",
      rules: {
        required: true,
        date: true,
      },
      meta: "fellowshipStop",
    },
    applicationStop: {
      label: "applicationStop",
      component: "DatePicker",
      type: 0, //
      default: "",
      description: "",
      rules: {
        required: true,
        date: true,
      },
      meta: "applicationStop",
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
    publicationDate: {
      label: "publicationDate",
      component: "DatePicker",
      type: 0, //
      default: "",
      description: "",
      rules: {
        required: true,
        date: true,
      },
      meta: "publicationDate",
    },
    summary: {
      label: "summary",
      component: "TextArea",
      type: 0, //
      default: "",
      description: "",
      i18n: true,
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      meta: "summary",
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
    name: {
      label: "name",
      component: "TextField",
      i18n: true,
      type: 0, //
      default: "",
      description: "",
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
      type: 0, //
      default: "",
      description: "",
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      meta: "subtitle",
    },
    video: {
      label: "video",
      component: "CollectionContainerPanel",
      type: 3, //
      default: "",
      description: "",
      rules: {
        required: true,
      },
      meta: "video",
    },
  },
}
export default defaultConfig
