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
import { formType } from "./form"

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
  Draft = "DRAFT",
  Published = "PUBLISHED",
  Removed = "REMOVED",
  Finished = "FINISHED",
  Cancelled = "CANCELLED",
  Postponed = "POSTPONED",
  Rescheduled = "RESCHEDULED",
}
export enum bookingState {
  Open = "OPEN",
  Full = "FULL",
  Closed = "CLOSED",
}
export enum eventType {
  Online = "ONLINE",
  Physical = "PHYSICAL",
  Hybrid = "HYBRID",
}
export enum organiserType {
  Ias = "IAS",
  Member = "MEMBER",
  Fellow = "FELLOW",
  External = "EXTERNAL",
}

export enum eventCategories {
  Seminar = "SEMINAR",
  Workshop = "WORKSHOP",
  Conference = "CONFERENCE",
  ConferenceCycle = "CONFERENCE_CYCLE",
  Lecture = "LECTURE",
  Symposium = "SYMPOSIUM",
  Meeting = "MEETING",
  Colloquium = "COLLOQUIUM",
  Forum = "FORUM",
  RoundTable = "ROUND_TABLE",
  Panel = "PANEL",
  Webinar = "WEBINAR",
  FellowPresentation = "FELLOW_PRESENTATION",
  Other = "OTHER",
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
        items: eventCategories,
        multiple: true,
      },
      status: {
        type: "Select",
        items: bookingState,
      },
      organiserCategory: {
        type: "Select",
        items: organiserType,
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
      meta: "name",
    },

    start: {
      label: "start",
      component: "DatePicker",
      type: formType.Primitive,

      rules: {
        required: true,
        date: true,
      },
      meta: "start",
    },

    stop: {
      label: "stop",
      component: "DatePicker",
      type: formType.Primitive,

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
    category: {
      label: "category",
      component: "Select",
      type: formType.Primitive,
      rules: {
        required: true,
      },
      items: eventCategories,
      meta: "category", // item type on schema.org
    },
    eventType: {
      label: "eventType",
      component: "Select",
      type: formType.Primitive,

      rules: {
        required: true,
      },
      items: eventType,
      meta: "eventType",
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
    details: {
      label: "details",
      component: "TextArea",
      type: formType.Primitive,

      i18n: true,
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      meta: "details",
    },
    program: {
      label: "program",
      component: "TextArea",
      type: formType.Primitive,

      i18n: true,
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      meta: "program",
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
    appId: {
      label: "appId",
      component: false, // TODO maybe consider multiple appids for a single event
      type: formType.Primitive,
      meta: "appId", // item type on schema.org
    },
    bookingState: {
      label: "bookingState",
      component: false,
      type: formType.Primitive,
      default: 0,
      meta: "bookingState",
    },

    delay: {
      label: "delay",
      component: false,
      type: formType.Primitive,
      default: 0,
      rules: {
        required: true,
      },
      meta: "delay",
    },

    dateText: {
      label: "dateText",
      component: "TextArea",
      type: formType.Primitive,
      i18n: true,
      rules: {
        min: 5,
        max: 200,
      },
      meta: "dateText",
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
    discussants: {
      label: "discussants",
      component: "CollectionContainerPanel",
      type: formType.Document,

      rules: {
        required: true,
      },
      meta: "discussants",
    },

    organiserType: {
      label: "organiserType",
      component: "Select",
      type: formType.Primitive,

      rules: {
        required: true,
      },
      items: organiserType,
      meta: "organiserType",
    },
    lang: {
      label: "lang",
      component: "Select",
      type: formType.Primitive,

      rules: {
        required: true,
      },
      meta: "lang",
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
    image: {
      label: "image",
      component: "ImagePicker",
      type: formType.Document,

      rules: {
        required: true,
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
    eventSlot: {
      label: "eventSlot",
      component: "CollectionContainerPanel",
      type: formType.Template, //TODO, create an eventSlot dedicated form to manually add participants from back office
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
      type: formType.Array,
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      items: [
        {
          label: "organizer",
          component: "DocumentPicker",
          type: formType.Document,
          meta: "organizers",
        },
      ],
      meta: "organizers",
    },
    organizerState: {
      label: "organizerState",
      component: "ListRadio",
      type: formType.Primitive,

      rules: {
        required: true,
      },
      meta: "organizerState",
    },
    outside: {
      label: "outside",
      component: "Checkbox",
      type: formType.Primitive,

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
      type: formType.Template,

      rules: {
        required: true,
      },
      meta: "place",
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
    speakers: {
      label: "speakers",
      component: "CollectionContainerPanel",
      type: formType.Document,

      rules: {
        required: true,
      },
      meta: "speakers",
    },
    state: {
      label: "state",
      component: "ListRadio",
      type: formType.Primitive,

      rules: {
        required: true,
      },
      meta: "state",
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
    totalSlots: {
      label: "totalSlots",
      component: false,
      type: formType.Primitive,

      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      meta: "totalSlots",
    },
    stream: {
      label: "stream",
      component: "TextField",
      type: formType.Primitive,

      rules: {
        required: true,
        url: true,
      },
      meta: "stream",
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
  },
}

export default defaultConfig
