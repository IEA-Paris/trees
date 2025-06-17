import Model from "./model"
import { RelatedEvent } from "./relatedEvents"
import { RelatedNews } from "./relatedNews"
import { RelatedProject } from "./relatedProject"
import { RelatedPeople } from "./relatedPeople"
import { RelatedPublications } from "./relatedPublications"
import { RelatedFellowships } from "./relatedFellowships"
import { formType } from "./form"
export interface Related {
  events: RelatedEvent[]
  news: RelatedNews[]
  projects: RelatedProject[]
  people: RelatedPeople[]
  publications: RelatedPublications[]
  fellowships: RelatedFellowships[]
}

const defaultConfig: Model = {
  source: "gql",
  // markdown related keys
  path: "", // path to the folder where the content is stored
  type: "", // 'directory' | 'file'
  // GQL related keys

  list: {
    perPage: {
      options: [9, 12, 16],
      default: 9,
    },
    create: true, // allow to create new items
    filters: {
      year: {
        type: "Select",
        items: "",
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
      tiles: {
        name: "tiles",
        icon: "view-quilt",
      },
      grid: {
        name: "grid",
        icon: "view-day",
      },
    },
  },

  form: {
    events: {
      label: "relatedEvent",
      component: "DocumentPicker",
      type: formType.Template, //
      default: "",
      description: "",
      meta: "event",
    },
    news: {
      label: "relatedNews",
      component: "DocumentPicker",
      type: formType.Template, //
      default: "",
      description: "",
      meta: "news",
    },
    publications: {
      label: "relatedPublication",
      component: "DocumentPicker",
      type: formType.Template, //
      default: "",
      description: "",
      meta: "publication",
    },
    projects: {
      label: "relatedProject",
      component: "DocumentPicker",
      type: formType.Template, //
      default: "",
      description: "",
      meta: "project",
    },
    fellowships: {
      label: "relatedFellowships",
      component: "DocumentPicker",
      type: formType.Template, //
      default: "",
      description: "",
      meta: "fellowship",
    },
  },
}

export default defaultConfig
