import { Image } from "../../files/models/image"
import { Affiliations } from "../../affiliations/models/affiliations"
import { Files } from "../../files/models/files"
import { Video } from "../../files/models/video"
import Model from "../../model"
import { Related } from "../../misc/models/related"
import { Tag } from "../../misc/models/tags"
import { eventCategories } from "../../events/models/events"
import { RelatedPeople } from "../../misc/models/relatedPeople"
import { DisciplinesOptions } from "../../misc/models/disciplines"
import { formType } from "../../form"
import { Thematics } from "../../misc/models/thematics"

export enum videoType {
  Fellows = "FELLOWS",
  Events = "EVENTS",
  Ideas = "IDEAS",
  ConferenceCycle = "CONFERENCE_CYCLE",
  Other = "OTHER",
}

export enum newsCategories {
  Announcement = "ANNOUNCEMENT",
  Article = "ARTICLE",
  Audio = "AUDIO",
  Award = "AWARD",
  Blog = "BLOG",
  Data = "DATA",
  Event = "EVENT",
  Fellowship = "FELLOWSHIP",
  Grant = "GRANT",
  Interview = "INTERVIEW",
  Job = "JOB",
  LifeAtTheInstitute = "LIFE_AT_THE_INSTITUTE",
  Opinion = "OPINION",
  Other = "OTHER",
  Ppias = "PPIAS",
  PressRelease = "PRESS_RELEASE",
  Project = "PROJECT",
  Publication = "PUBLICATION",
  Report = "REPORT",
  Software = "SOFTWARE",
  Tool = "TOOL",
  Video = "VIDEO",
}
export interface Publications {
  authors: [RelatedPeople]
  color?: string
  date?: Date
  description?: string
  disciplines?: DisciplinesOptions[]
  eventCategories?: eventCategories
  featured?: Date
  files?: Files[]
  gallery?: Image[]
  image?: Image
  name: string
  newsCategories?: newsCategories
  related?: Related[]
  subtitle?: string
  summary?: string
  tags?: Tag[]
  type: publicationType
  url?: URL
  video?: Video
}

export enum publicationType {
  Article = "ARTICLE",
  ConferencePaper = "CONFERENCE_PAPER",
  Book = "BOOK",
  BookChapter = "BOOK_CHAPTER",
  Thesis = "THESIS",
  Report = "REPORT",
  Software = "SOFTWARE",
  News = "NEWS",
  Data = "DATA",
  Video = "VIDEO",
  Audio = "AUDIO",
  Podcast = "PODCAST",
}
const defaultConfig: Model = {
  list: {
    filters: {
      type: {
        type: "Select",
        items: publicationType,
        multiple: true,
        value: "",
      },
      thematics: {
        type: "AutoComplete",
        items: Thematics,
        multiple: true,
        show: {
          default: true,
          switchIf: [{ groups: "news" }, { type: "videos" }], // array of conditions to switch the show, each condition will be assessed as a boolean
          disjonctive: false,
        },
        value: "",
      },
      disciplines: {
        type: "AutoComplete",
        items: DisciplinesOptions,
        show: {
          default: false,
          switchIf: [{ groups: "news" }, { type: "videos" }], // array of conditions to switch the show, each condition will be assessed as a boolean
          disjonctive: false,
        },
        multiple: true,
        value: "",
      },
      videoType: {
        type: "Select",
        items: videoType,
        show: {
          default: false,
          switchIf: [{ type: "videos" }], // array of conditions to switch the show, each condition will be assessed as a boolean
          disjonctive: false,
        },
        multiple: true,
        value: "",
      },
      newsCategories: {
        type: "Select",
        items: newsCategories,
        multiple: true,
        show: {
          default: false,
          switchIf: [{ type: "news" }], // array of conditions to switch the show, each condition will be assessed as a boolean
          disjonctive: false,
        },
        value: "",
      },
    },
    sort: {
      // sort options
      nameasc: {
        // by name from a to z
        icon: "sort-alphabetical-ascending",
        text: "by-name-from-a-to-z",
        value: [{ name: 1 }, { date: 1 }],
      },
      namedesc: {
        // by name from z to a
        icon: "sort-alphabetical-descending",
        text: "by-name-from-z-to-a",
        value: [{ name: -1 }, { date: 1 }],
      },
      dateasc: {
        // by date from most recent to oldest
        icon: "sort-calendar-descending",
        text: "by-date-most-recent-first",
        value: [{ date: -1 }, { name: 1 }],
        default: true,
      },
      datedesc: {
        // by date from oldest to most recent
        icon: "sort-calendar-ascending",
        text: "by-date-oldest-first",
        value: [{ date: 1 }, { name: 1 }],
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
        min: 5,
        max: 200,
      },
      meta: "name", // item type on schema.org
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
    authors: {
      label: "authors",
      component: "RelatedPeoplePicker",
      type: formType.Document,
      rules: {
        required: true,
      },
      meta: "authors",
    },
    url: {
      label: "url",
      component: "TextField",
      type: formType.Primitive,

      rules: {
        required: true,
        url: true,
      },
      meta: "url", // item type on schema.org
    },
    affiliations: {
      label: "affiliations",
      component: "DocumentPicker",
      type: formType.Document,

      meta: "affiliations",
    },
    eventCategories: {
      label: "eventCategories",
      component: "ListSelect",
      type: formType.Primitive,

      rules: {
        required: true,
      },
      meta: "eventCategories",
    },
    newsCategories: {
      label: "newsCategories",
      component: "Select",
      type: formType.Primitive,
      rules: {
        required: true,
      },
      items: newsCategories,
      meta: "newsCategories",
    },
    type: {
      label: "type",
      component: "ListSelect",
      type: formType.Primitive,

      rules: {
        required: true,
      },
      meta: "type",
    },
    related: {
      label: "related",
      component: "ObjectContainerPanel",
      type: formType.Template,

      meta: "related",
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
    image: {
      label: "image",
      component: "ImagePicker",
      type: formType.Document,
      rules: {
        max: 1,
      },
      meta: "image",
    },
    gallery: {
      label: "gallery",
      component: "ImagePicker",
      type: formType.Document,
      rules: {
        max: 24,
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
      rules: {
        required: true,
      },
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
        required: true,
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
        required: true,
        date: true,
      },
      meta: "featured",
    },
  },
}
export default defaultConfig
