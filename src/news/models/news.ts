import { Image } from "../../files/models/image"
import Model from "../../model"
import { RelatedPeople } from "../../misc/models/relatedPeople"
import { Related } from "../../misc/models/related"
import { Tag } from "../../misc/models/tags"
import { formType } from "../../form"
import { Files } from "../../files/models/files"

export interface News {
  name: string
  authors: [RelatedPeople]
  category?: newsCategories
  description?: string
  summary?: string
  subtitle?: string
  tags?: Tag[]
  image?: Image
  gallery?: Image[]
  color?: string
  url?: URL
  date?: Date
  featured?: Date
  related?: Related[]
  files?: Files
}
export enum newsCategories {
  PressRelease = "PRESS_RELEASE",
  Interview = "INTERVIEW",
  Article = "ARTICLE",
  Opinion = "OPINION",
  Report = "REPORT",
  Blog = "BLOG",
  LifeAtTheInstitute = "LIFE_AT_THE_INSTITUTE",
  Event = "EVENT",
  Announcement = "ANNOUNCEMENT",
  Job = "JOB",
  Fellowship = "FELLOWSHIP",
  Grant = "GRANT",
  Award = "AWARD",
  Project = "PROJECT",
  Tool = "TOOL",
  Software = "SOFTWARE",
  Data = "DATA",
  Publication = "PUBLICATION",
  Video = "VIDEO",
  Audio = "AUDIO",
}
const defaultConfig: Model = {
  list: {
    filters: {
      tags: {
        type: "AutoComplete",
        multiple: true,
        value: "",
      },
      category: {
        type: "Select",
        multiple: true,
        items: newsCategories,
        value: "",
      },
    },
    sort: {
      dateasc: {
        // by date from most recent to oldest
        icon: "sort-calendar-descending",
        text: "by-date-most-recent-first",
        value: [{ date: -1 }],
        default: true,
      },
      datedesc: {
        // by date from oldest to most recent
        icon: "sort-calendar-ascending",
        text: "by-date-oldest-first",
        value: [{ date: 1 }],
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
    category: {
      label: "category",
      component: "Select",
      type: formType.Primitive,
      rules: {
        required: true,
      },
      items: newsCategories,
      meta: "category", // item type on schema.org
    },
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
    summary: {
      label: "summary",
      component: "TextArea",
      type: formType.Primitive,
      i18n: true,
      description: "Will be extracted from description if left empty",
      rules: {
        min: 5,
        max: 200,
      },
      meta: "summary", // item type on schema.org
    },
    subtitle: {
      label: "subtitle",
      component: "TextField",
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
      i18n: true,
      type: formType.Primitive,
      rules: {
        required: true,
        min: 5,
        max: 2000,
      },
      meta: "description",
    },
    date: {
      label: "date",
      component: "DatePicker",
      type: formType.Primitive,
      description:
        "If the date is in the future, will be scheduled for publication at due time/date",
      rules: {
        required: true,
        date: true,
      },
      meta: "date",
    },

    image: {
      label: "image",
      component: "ImagePicker",
      type: formType.Document,
      meta: "image",
    },
    color: {
      label: "color",
      component: "ColorPicker",
      type: formType.Primitive,
      rules: {
        color: true,
      },
      meta: "color",
    },
    url: {
      label: "url",
      component: "TextField",
      type: formType.Primitive,
      rules: {
        url: true,
      },
      meta: "url",
    },
    files: {
      label: "files",
      component: "FilePicker",
      type: formType.Document,
      meta: "files",
    },
    gallery: {
      label: "gallery",
      component: "ImagePicker",
      type: formType.Document,
      meta: "gallery",
      rules: {
        max: 100,
      },
    },

    featured: {
      label: "featured",
      component: "DatePicker",
      type: formType.Primitive,
      rules: {
        date: true,
      },
      meta: "featured",
    },
    tags: {
      label: "tags",
      component: "TagPicker",
      type: formType.Document,
      rules: {
        min: 1,
      },
      meta: "tags",
    },
    related: {
      label: "related",
      component: "ObjectContainerPanel",
      type: formType.Template,
      meta: "related",
    },
  },
}

export default defaultConfig
