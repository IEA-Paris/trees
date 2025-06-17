import { Location } from "./location"
import { Image } from "./image"
import { EventSlot } from "./eventSlot"
import { Disciplines } from "./disciplines"
import { Tag } from "./tags"
import { People } from "./people"
import { Affiliation } from "./affiliations"
import { File } from "./files"
import { Related } from "./related"
import Model from "./model"
import { mapEnum } from "../lib/utils"
import { FormType } from "./form"

export interface Event {
  affiliations?: Affiliation[] // 3 - Server & Client - //Bottom left Document
  appId: string // 0 - Server & Client -
  availableSlots: number // 0 - Server & Client - ? => Claire
  bookingState: bookingState // 0 - Server & Client -
  category: eventCategories // 0 - Server & Client -
  createdAt?: Date // 0 - Server & Client -
  dateText: string // 0 - Server & Client -
  delay?: number // 0 - Server & Client -
  description: string // 0 - Server & Client -
  details: String // 0 - Server & Client -
  disciplines?: Disciplines[] // 3 - Server & Client //Inside=> Presentation
  discussants?: People[] // 0 - Server & Client -
  files?: File[] // 3 - Server & Client -
  lang: string[]
  image?: Image // 3 - Server & Client -
  gallery?: Image[]
  name: string // 0 - Server & Client -
  eventSlot?: EventSlot[] //// 3 - Server -
  organizers: People[] | Affiliation[] // 3 - Server & Client -
  outside: boolean // 0 - Server & Client -  // Near inscription
  location: Location // 0 - Server & Client -
  organiserType: organiserType // server & client - 0 = IAS, 1 = member, 2 = fellow, 3 = external
  program: String // 0 - Server & Client -
  related: Related
  // slots?: EventSlot[]; //// 3 - Server
  speakers?: People[] // 3 - Server & Client -
  start: string // 0 - Server & Client -   A verifier string ? string[]
  state: eventState // 0 - Server & Client -
  stop: string // 0 - Server & Client - A verifier string ? string[]
  stream?: string // 0 - Server & Client -
  subtitle?: string // 0 - Server &
  summary?: string // 0 - Server & Client -
  tags?: Tag[] // 3 - Server & Client - Inside=> Presentation
  totalSlots: number // 0 - Server & Client
  eventType: eventType // 0 : online, 1: physical, 2: hybrid// 0 - Server & Client -
  updatedAt: Date // 0 - Server & Client -
  url?: URL // 0 - Server & Client -
}
export enum eventState {
  DRAFT,
  PUBLISHED,
  REMOVED,
  FINISHED,
  CANCELLED,
  POSTPONED,
  RESCHEDULED,
}
export enum bookingState {
  OPEN,
  FULL,
  CLOSED,
}
export enum eventType {
  ONLINE,
  PHYSICAL,
  HYBRID,
}
export enum organiserType {
  IAS,
  MEMBER,
  FELLOW,
  EXTERNAL,
}

export enum eventCategories {
  SEMINAR,
  WORKSHOP,
  CONFERENCE,
  CONFERENCE_CYCLE,
  LECTURE,
  SYMPOSIUM,
  MEETING,
  COLLOQUIUM,
  FORUM,
  ROUND_TABLE,
  PANEL,
  WEBINAR,
  FELLOW_PRESENTATION,
  OTHER,
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
      category: {
        type: "Select",
        items: mapEnum(eventCategories),
        multiple: true,
      },

      status: {
        type: "Select",
        items: mapEnum(bookingState),
      },
      organiserCategory: {
        type: "Select",
        items: mapEnum(organiserType),
        multiple: true,
      },
      tags: {
        type: "AutoComplete",
        items: [],
        multiple: true,
      },
      disciplines: {
        type: "AutoComplete",
        items: [],
        multiple: true,
      },
      fellowship: {
        type: "AutoComplete",
        items: [],
        multiple: true,
      },
      online: {
        type: "Checkbox",
        items: false,
      },
      outside: {
        type: "Checkbox",
        items: false,
      },
      past: {
        type: "Checkbox",
        items: false,
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
      type: FormType.ARRAY, // 0 = primitive, 1 = object, 2 = array, 3 = template
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
    appId: {
      label: "appId",
      component: false,
      type: FormType.PRIMITIVE, // 0 = primitive, 1 = object, 2 = array, 3 = template
      default: "",
      description: "",
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, //TODO: implement.  if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "appId", // item type on schema.org
    },
    availableSlots: {
      label: "availableSlots",
      component: false,
      type: FormType.PRIMITIVE,
      default: 0,
      description: "",
      meta: "availableSlots",
    },
    bookingState: {
      label: "bookingState",
      component: false,
      type: FormType.PRIMITIVE, //
      default: 0,
      description: "",
      meta: "bookingState",
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
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, //TODO: implement.  if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      items: mapEnum(eventCategories),
      meta: "category", // item type on schema.org
    },
    createdAt: {
      label: "createdAt",
      component: false,
      type: FormType.PRIMITIVE, //
      default: "",
      description: "",

      meta: "createdAt",
    },

    delay: {
      label: "delay",
      component: false,
      type: FormType.PRIMITIVE, //
      default: 0,
      description: "",
      rules: {
        required: true,
      },
      meta: "delay",
    },

    description: {
      label: "description",
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
      meta: "description",
    },
    dateText: {
      label: "dateText",
      component: "TextArea",
      type: FormType.PRIMITIVE, //
      default: "",
      i18n: true,
      description: "",
      rules: {
        required: false,
        min: 5,
        max: 200,
      },
      meta: "dateText",
    },
    details: {
      label: "details",
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
      meta: "details",
    },
    disciplines: {
      label: "disciplines",
      component: "CollectionContainerPanel",
      type: FormType.ARRAY, //
      default: "",
      description: "",
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      meta: "disciplines",
    },

    discussants: {
      label: "discussants",
      component: "CollectionContainerPanel",
      type: FormType.ARRAY, //
      default: "",
      description: "",
      rules: {
        required: true,
      },
      meta: "discussants",
    },
    eventType: {
      label: "eventType",
      component: "Select",
      type: FormType.PRIMITIVE, //
      default: "",
      description: "",
      rules: {
        required: true,
      },
      items: mapEnum(eventType),
      meta: "eventType",
    },
    organiserType: {
      label: "organiserType",
      component: "Select",
      type: FormType.PRIMITIVE, //
      default: "",
      description: "",
      rules: {
        required: true,
      },
      items: mapEnum(organiserType),
      meta: "organiserType",
    },
    lang: {
      label: "lang",
      component: "Select",
      type: FormType.PRIMITIVE, //
      default: "",
      description: "",
      rules: {
        required: true,
      },
      meta: "lang",
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
    gallery: {
      label: "gallery",
      component: "CollectionContainerPanel",
      type: FormType.ARRAY, //
      default: "",
      description: "",
      meta: "gallery",
    },
    name: {
      label: "name",
      component: "TextField",
      type: FormType.PRIMITIVE, //
      default: "",
      i18n: true,
      description: "",
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      meta: "name",
    },
    eventSlot: {
      label: "eventSlot",
      component: "CollectionContainerPanel",
      type: FormType.ARRAY, //
      default: "",
      description: "",
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      meta: "eventSlot",
    },
    organizers: {
      label: "organizers",
      component: "CollectionContainerPanel",
      type: FormType.ARRAY, //
      default: "",
      description: "",
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      meta: "organizers",
    },
    organizerState: {
      label: "organizerState",
      component: "ListRadio",
      type: FormType.PRIMITIVE, //
      default: "",
      description: "",
      rules: {
        required: true,
      },
      meta: "organizerState",
    },
    outside: {
      label: "outside",
      component: "Checkbox",
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
    location: {
      label: "place",
      component: "ObjectContainerPanel",
      type: FormType.ARRAY, //
      default: "",
      description: "",
      rules: {
        required: true,
      },
      meta: "place",
    },
    program: {
      label: "program",
      component: "TextArea",
      type: FormType.PRIMITIVE, //
      default: "",
      description: "",
      i18n: true,
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      meta: "program",
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
    speakers: {
      label: "speakers",
      component: "CollectionContainerPanel",
      type: FormType.ARRAY, //
      default: "",
      description: "",
      rules: {
        required: true,
      },
      meta: "speakers",
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
    stop: {
      label: "stop",
      component: "DatePicker",
      type: FormType.PRIMITIVE, //
      default: "",
      description: "",
      rules: {
        required: true,
        date: true,
      },
      meta: "stop",
    },
    subtitle: {
      label: "subtitle",
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
      meta: "subtitle",
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
    tags: {
      label: "tags",
      component: "CollectionContainerPanel",
      type: FormType.ARRAY, //
      default: "",
      description: "",
      rules: {
        required: true,
      },
      meta: "tags",
    },
    totalSlots: {
      label: "totalSlots",
      component: false,
      type: FormType.PRIMITIVE, //
      default: "",
      description: "",
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      meta: "totalSlots",
    },
    updatedAt: {
      label: "updatedAt",
      component: false,
      type: FormType.PRIMITIVE, //
      default: "",
      description: "",
      rules: {
        required: true,
      },
      meta: "updatedAt",
    },
    stream: {
      label: "stream",
      component: "TextField",
      type: FormType.PRIMITIVE, //
      default: "",
      description: "",
      rules: {
        required: true,
        url: true,
      },
      meta: "stream",
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

//
