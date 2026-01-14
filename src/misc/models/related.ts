import Model from "../../model"
import { RelatedEvent } from "./relatedEvents"
import { RelatedNews } from "./relatedNews"
import { RelatedProject } from "./relatedProject"
import { RelatedPeople } from "./relatedPeople"
import { RelatedPublications } from "./relatedPublications"
import { RelatedFellowships } from "./relatedFellowships"
import { formType } from "../../form"
export interface Related {
  events: RelatedEvent[]
  news: RelatedNews[]
  projects: RelatedProject[]
  people: RelatedPeople[]
  publications: RelatedPublications[]
  fellowships: RelatedFellowships[]
}

const defaultConfig: Model = {
  list: {
    filters: {},
    sort: {
      // sort options
      nameasc: {
        // by name from a to z
        icon: "sort-alphabetical-ascending",
        text: "by-name-from-a-to-z",
        value: [{ article_title: 1 }],
        active: false,
      },
      namedesc: {
        // by name from z to a
        icon: "sort-alphabetical-descending",
        text: "by-name-from-z-to-a",
        value: [{ article_title: -1 }],
        active: false,
      },
      dateasc: {
        // by date from most recent to oldest
        icon: "sort-calendar-descending",
        text: "by-date-most-recent-first",
        value: [{ date: -1 }],
        default: true,
        active: true,
      },
      datedesc: {
        // by date from oldest to most recent
        icon: "sort-calendar-ascending",
        text: "by-date-oldest-first",
        value: [{ date: 1 }],
        active: false,
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
      type: formType.Document,
      meta: "event",
    },
    news: {
      label: "relatedNews",
      component: "DocumentPicker",
      type: formType.Document,
      meta: "news",
    },
    people: {
      label: "relatedPeople",
      component: "DocumentPicker",
      type: formType.Document,
      meta: "people",
    },
    publications: {
      label: "relatedPublication",
      component: "DocumentPicker",
      type: formType.Document,
      meta: "publication",
    },
    projects: {
      label: "relatedProject",
      component: "DocumentPicker",
      type: formType.Document,
      meta: "project",
    },
    fellowships: {
      label: "relatedFellowships",
      component: "DocumentPicker",
      type: formType.Document,
      meta: "fellowship",
    },
  },
}

export default defaultConfig
