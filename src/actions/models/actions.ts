import { Image } from "../../files/models/image"
import Model from "../../model"
import { formType } from "../../form"
import { Publications } from "../../publications/models/publications"
import { News } from "../../news/models/news"
import { People } from "../../people/models/people"

export enum ActionSlots {
  All = "ALL",
  Fellowships = "FELLOWSHIPS",
  Network = "NETWORK",
  Projects = "PROJECTS",
  Events = "EVENTS",
  Publications = "PUBLICATIONS",
  News = "NEWS",
  People = "PEOPLE",
}

export interface Actions {
  color?: string
  link: string
  image: Image
  name: string
  video?: URL
  slots: string[]
  start: Date
  stop: Date
}

const defaultConfig: Model = {
  list: {
    create: true, // allow to create new items
    filters: {
      year: {
        type: "Select",
        items: "",
        value: "",
      },
    },
    sort: {
      // sort options
      nameasc: {
        // by name from a to z
        icon: "sort-alphabetical-ascending",
        text: "by-name-from-a-to-z",
        value: ["name", 1],
      },
      namedesc: {
        // by name from z to a
        icon: "sort-alphabetical-descending",
        text: "by-name-from-z-to-a",
        value: ["name", -1],
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
      type: formType.Primitive,
      component: "TextField",
      description: "The name of the ad (internal use only)",
      rules: {
        required: true,
        min: 2,
        max: 200,
      },
      meta: "name", // item type on schema.org
    },
    image: {
      label: "image",
      type: formType.Document,
      component: "ImagePicker",
      description: "Picture to display for the action",
      rules: {
        required: true,
      },
    },
    link: {
      label: "url",
      type: formType.Primitive,
      component: "TextField",
      description: "The url of the action should point to",
      rules: {
        required: true,
        url: true,
      },
      meta: "link", // item type on schema.org
    },
    color: {
      label: "background_color",
      type: formType.Primitive,
      component: "ColorPicker",
      default: "#FFFFFF",
      description: "The background color of the content",
      rules: {
        color: true,
      },
      meta: "color", // item type on schema.org
    },
    video: {
      label: "video",
      component: "TextField",
      description:
        "For video actions only, will replace the picture by a video embed",
      type: formType.Document,
      rules: {
        url: true,
      },
      meta: "video",
    },
    slots: {
      label: "slots",
      component: "Select",
      type: formType.Primitive,
      items: ActionSlots,
      meta: "slots",
    },
  },
}
export default defaultConfig
