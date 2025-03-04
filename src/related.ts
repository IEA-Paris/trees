import Model from "./model"
import { RelatedEvent } from "./relatedEvents"
import { RelatedNews } from "./relatedNews"
import { RelatedProject } from "./relatedProject"
import { RelatedPeople } from "./relatedPeople"
import { RelatedPublications } from "./relatedPublications"

export interface Related {
  events: RelatedEvent[]
  news: RelatedNews[]
  projects: RelatedProject[]
  people: RelatedPeople[]
  publication: RelatedPublications[]
}

const defaultConfig: Model = {
  source: "gql",
  // markdown related keys
  path: "", // path to the folder where the content is stored
  type: "", // 'directory' | 'file'
  // GQL related keys
  form: {
    events: {
      label: "relatedEvent",
      component: "DocumentPicker",
      type: 4, //
      default: "",
      description: "",
      meta: "event",
    },
    news: {
      label: "relatedNews",
      component: "DocumentPicker",
      type: 4, //
      default: "",
      description: "",
      meta: "news",
    },
    publications: {
      label: "relatedPublication",
      component: "DocumentPicker",
      type: 4, //
      default: "",
      description: "",
      meta: "publication",
    },
    projects: {
      label: "relatedProject",
      component: "DocumentPicker",
      type: 4, //
      default: "",
      description: "",
      meta: "project",
    },
  },
}

export default defaultConfig
