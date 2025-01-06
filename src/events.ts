import { Location } from "./location"
import { Image } from "./image"
import { EventSlot } from "./eventSlot"
import { Disciplines } from "./disciplines"
import { Tag } from "./tags"
import { People } from "./people"
import { Affiliation } from "./affiliations"
import { RelatedProject } from "./relatedProject"
import { RelatedPublications } from "./relatedPublications"
import { RelatedNews } from "./relatedNews"
import { File } from "./files"
import Model from "./model"

export interface Event {
  affiliations?: Affiliation[] // 3 - Server & Client - //Bottom left Document
  appId: string // 0 - Server & Client -
  availableSlots: number // 0 - Server & Client - ? => Claire
  bookingState: number // 0 - Server & Client -
  category: number // 0 - Server & Client -
  createdAt?: Date // 0 - Server & Client -
  delay?: number // 0 - Server & Client -
  description: string // 0 - Server & Client -
  disciplines?: Disciplines[] // 3 - Server & Client //Inside=> Presentation
  discussants?: People[] // 0 - Server & Client -
  files?: File[] // 3 - Server & Client -
  image?: Image // 3 - Server & Client -
  gallery?: Image[]
  name: string // 0 - Server & Client -
  eventSlot?: EventSlot[] //// 3 - Server -
  organizers: People[] | Affiliation[] // 3 - Server & Client -
  outside: boolean // 0 - Server & Client -  // Near inscription
  location: Location // 0 - Server & Client -
  organiserType: number // server & client - 0 = IAS, 1 = member, 2 = fellow, 3 = external
  relatedProject?: RelatedProject[] | string[] // 0 - Server & Client -
  relatedPublications?: RelatedPublications[] | string[] // 0 - Server & Client -
  relatedNews?: RelatedNews[] | string[] // 0 - Server & Client -
  // slots?: EventSlot[]; //// 3 - Server
  speakers?: People[] // 3 - Server & Client -
  start: string // 0 - Server & Client -   A verifier string ? string[]
  state: number // 0 - Server & Client -
  stop: string // 0 - Server & Client - A verifier string ? string[]
  stream?: string // 0 - Server & Client -
  subtitle?: string // 0 - Server &
  summary?: string // 0 - Server & Client -
  tags?: Tag[] // 3 - Server & Client - Inside=> Presentation
  totalSlots: number // 0 - Server & Client
  eventType: number // 0 : online, 1: physical, 2: hybrid// 0 - Server & Client -
  updatedAt: Date // 0 - Server & Client -
  url?: URL // 0 - Server & Client -
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
      outside: {
        type: "Checkbox",
        rules: {},
        label: "outside",
        items: [],
      },
      category: {
        type: "Select",
        rules: {},
        label: "category",
        items: [],
        multiple: true,
      },
      past: {
        type: "Checkbox",
        rules: {},
        label: "past",
        items: [],
      },
      status: {
        type: "Select",
        rules: {},
        label: "status",
        items: [],
      },
      organiserCategory: {
        type: "Select",
        rules: {},
        label: "organiserCategory",
        items: [],
        multiple: true,
      },
      online: {
        type: "Checkbox",
        rules: {},
        label: "online",
        items: [],
      },
      disciplines: {
        type: "AutoComplete",
        rules: {},
        label: "disciplines",
        items: [],
        multiple: true,
      },
      fellowship: {
        type: "AutoComplete",
        rules: {},
        label: "fellowship",
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
        value: ["start", -1],
        default: true,
      },
      datedesc: {
        // by date from oldest to most recent
        icon: "sort-calendar-ascending",
        text: "by-date-oldest-first",
        value: ["start", 1],
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
    affiliations: {
      label: "affiliations",
      component: "CollectionContainerPanel",
      type: 3, // 0 = primitive, 1 = object, 2 = array, 3 = template
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
      },
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, // if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "affiliations", // item type on schema.org
    },
    appId: {
      label: "appId",
      component: false,
      type: 0, // 0 = primitive, 1 = object, 2 = array, 3 = template
      default: "",
      description: "",
      hint: false,
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, // if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "appId", // item type on schema.org
    },
    availableSlots: {
      label: "availableSlots",
      component: false,
      type: 0,
      default: 0,
      description: "",
      hint: false,
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "availableSlots",
    },
    bookingState: {
      label: "bookingState",
      component: false,
      type: 0, //
      default: 0,
      description: "",
      hint: false,
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "bookingState",
    },
    category: {
      label: "category",
      component: "Select",
      type: 0, // 0 = primitive, 1 = object, 2 = array, 3 = template
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
      },
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, // if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "category", // item type on schema.org
    },
    createdAt: {
      label: "createdAt",
      component: false,
      type: 0, //
      default: "",
      description: "",
      hint: false,

      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "createdAt",
    },

    delay: {
      label: "delay",
      component: false,
      type: 0, //
      default: 0,
      description: "",
      hint: false,
      rules: {
        required: true,
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "delay",
    },

    description: {
      label: "description",
      component: "TextArea",
      type: 0, //
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "description",
    },

    disciplines: {
      label: "disciplines",
      component: "CollectionContainerPanel",
      type: 3, //
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "disciplines",
    },

    discussants: {
      label: "discussants",
      component: "CollectionContainerPanel",
      type: 3, //
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "discussants",
    },
    eventType: {
      label: "eventType",
      component: "Select",
      type: 0, //
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "eventType",
    },
    files: {
      label: "files",
      component: "CollectionContainerPanel",
      type: 3, //
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "files",
    },
    image: {
      label: "image",
      component: "ObjectContainerPanel",
      type: 3, //
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "image",
    },
    gallery: {
      label: "gallery",
      component: "CollectionContainerPanel",
      type: 3, //
      default: "",
      description: "",
      hint: false,
      rules: {},
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "gallery",
    },
    name: {
      label: "name",
      component: "TextField",
      type: 0, //
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "name",
    },
    eventSlot: {
      label: "eventSlot",
      component: "CollectionContainerPanel",
      type: 3, //
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "eventSlot",
    },
    organizers: {
      label: "organizers",
      component: "CollectionContainerPanel",
      type: 3, //
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "organizers",
    },
    organizerState: {
      label: "organizerState",
      component: "ListRadio",
      type: 0, //
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "organizerState",
    },
    outside: {
      label: "outside",
      component: "BooleanCheckbox",
      type: 0, //
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "outside",
    },
    location: {
      label: "place",
      component: "ObjectContainerPanel",
      type: 3, //
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "place",
    },
    relatedNews: {
      label: "relatedNews",
      component: "DocumentPicker",
      type: 4, //
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "relatedNews",
    },
    relatedPublications: {
      label: "relatedPublications",
      component: "DocumentPicker",
      type: 4, //
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "relatedPublications",
    },
    relatedProject: {
      label: "relatedProject",
      component: "DocumentPicker",
      type: 4, //
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "relatedProject",
    },
    speakers: {
      label: "speakers",
      component: "CollectionContainerPanel",
      type: 3, //
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "speakers",
    },
    start: {
      label: "start",
      component: "DatePicker",
      type: 0, //
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
        date: true,
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "start",
    },
    state: {
      label: "state",
      component: "ListRadio",
      type: 0, //
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "state",
    },
    stop: {
      label: "stop",
      component: "DatePicker",
      type: 0, //
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
        date: true,
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "stop",
    },
    subtitle: {
      label: "subtitle",
      component: "TextArea",
      type: 0, //
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "subtitle",
    },
    summary: {
      label: "summary",
      component: "TextArea",
      type: 0, //
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "summary",
    },
    tags: {
      label: "tags",
      component: "CollectionContainerPanel",
      type: 3, //
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "tags",
    },
    totalSlots: {
      label: "totalSlots",
      component: false,
      type: 0, //
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "totalSlots",
    },
    updatedAt: {
      label: "updatedAt",
      component: false,
      type: 0, //
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "updatedAt",
    },
    stream: {
      label: "stream",
      component: "TextField",
      type: 0, //
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
        url: true,
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "stream",
    },
    url: {
      label: "url",
      component: "TextField",
      type: 0, //
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
        url: true,
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "url",
    },
  },
}

export default defaultConfig

//
