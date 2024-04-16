import { location } from "./location"
import { image } from "./image"
import { eventSlot } from "./eventSlot"
import { discipline } from "./discipline"
import { tag } from "./tag"
import { people } from "./people"
import { affiliation } from "./affiliation"
import { file } from "./file"

export type event = {
  affiliations: [affiliation]
  appId: string
  availableSlots: number
  bookingState: number
  createdAt: string
  delay: number
  description: string
  disciplines: [discipline]
  discussants: [people]
  files: [file]
  image: image
  name: string
  onlineSlots: [eventSlot]
  organizers: [people]
  outside: boolean
  place: location
  slots: [eventSlot]
  speakers: [people]
  start: string
  state: number
  stop: string
  subtitle: string
  tags: [tag]
  totalSlots: number
  type: number // 0 : online, 1: physical, 2: hybrid
  updatedAt: string
  url: string
}

export default {
  source: "md",
  perPage: {
    options: [9, 12, 16],
    default: 9,
  },
  type: null, // 'directory' | 'file' | null
  path: null, // path to the folder where the content is stored
  create: true, // allow to create new items
  filters: {
    year: {
      type: "Select",
      rules: {},
      label: "year",
      items: (articles) => {
        return articles.map((article) => new Date(article.date).getFullYear())
      },
    } /* 
      categories: {
        type: 'TextInput',
        rules: {},
        label: 'Search',
      },
      author: {
        type: 'Autocomplete',
        rules: {},
        label: 'authors',
      }, */,
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
  schema: {
    /* firstname: string
    lastname: string
    affiliations: [{ affiliation: affiliation; positions: [position] }]
    picture: image
    socials: socials
    biography: string
    consent: consent
    groups: groups */
    firstname: {
      label: "firstname",
      component: "TextField",
      type: 0, // 0 = primitive, 1 = object, 2 = array, 3 = template
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, // if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "firstname", // item type on schema.org
    },
    lastname: {
      label: "lastname",
      component: "TextField",
      type: 0, // 0 = primitive, 1 = object, 2 = array, 3 = template
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, // if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "lastname", // item type on schema.org
    },
    consent: {
      label: "consent",
      component: "SimpleObjectWrapper",
      type: 3, // 0 = primitive, 1 = object, 2 = array, 3 = template
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, // if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "consent", // item type on schema.org
    },
  },
}
