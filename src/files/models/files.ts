import Model from "../../model"
import { formType } from "../../form"

export enum FileCategory {
  Document = "DOCUMENT",
  Image = "IMAGE",
  Video = "VIDEO",
  Audio = "AUDIO",
  Dataset = "DATASET",
  Software = "SOFTWARE",
  Other = "OTHER",
}
export interface Files {
  name: string
  url: URL
  size: number
  fileType: string
  catetgory: FileCategory
  hash: string
  path: string
  thumb: URL
  createdAt: Date
  updatedAt: Date
  slug: string
}

const defautConfig: Model = {
  list: {
    create: true, // allow to create new items

    filters: {
      year: {
        type: "Select",
        value: "",
      },
      category: {
        type: "Select",
        items: [
          { text: "Document", value: FileCategory.Document },
          { text: "Image", value: FileCategory.Image },
          { text: "Video", value: FileCategory.Video },
          { text: "Audio", value: FileCategory.Audio },
          { text: "Dataset", value: FileCategory.Dataset },
          { text: "Software", value: FileCategory.Software },
          { text: "Other", value: FileCategory.Other },
        ],
        value: "",
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
    name: {
      label: "name",
      component: "TextField",
      type: formType.Primitive,
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      meta: "name",
    },
  },
}

export default defautConfig
