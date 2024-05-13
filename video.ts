import Model from "./model"

export interface Video {
  url: URL
  alt: string | null
  caption: string | null
  copyright: string
  license: string | null
  licenseUrl: string | null
  backgroundColor: string | null
}
const defaultConfig: Model = {
  source: "md",
  type: null, // 'directory' | 'file' | null
  path: null, // path to the folder where the content is stored
  list: {
    perPage: {
      options: [9, 12, 16],
      default: 9,
    },
    create: true, // allow to create new items
    filters: {
      year: {
        type: "Select",
        rules: {},
        label: "year",
        items: [],
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
    url: {
      type: 0,
      component: "TextField",
      label: "url",
      default: "",
      description: "The url where the image is fetched from",
      hint: false,
      rules: {
        required: true,
        url: true,
        max: 2048,
      },
      visibility: {
        default: true, // socials"default: true" is the same than "hidden = false"
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, // if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "url", // item type on schema.org
    },
    alt: {
      label: "alt",
      type: 0,
      component: "TextField",
      default: "",
      description: "Displayed if the image cannot be loaded",
      hint: false,
      rules: {
        required: true,
        min: 2,
        max: 100,
      },
      visibility: {
        default: true, // socials"default: true" is the same than "hidden = false"
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, // if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "alt", // item type on schema.org
    },
    caption: {
      label: "caption",
      type: 0,
      component: "TextField",
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
        min: 2,
        max: 100,
      },
      visibility: {
        default: true, // socials"default: true" is the same than "hidden = false"
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, // if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "caption", // item type on schema.org
    },
    copyright: {
      label: "copyright",
      type: 0,
      component: "TextField",
      default: "Free of rights",
      description: "Owner of the image copyright",
      hint: false,
      rules: {
        required: true,
        min: 2,
        max: 100,
      },
      visibility: {
        default: true, // socials"default: true" is the same than "hidden = false"
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, // if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "copyright", // item type on schema.org
    },
    licence: {
      label: "licence",
      type: 0,
      component: "TextField", // TODO change for an autocomplete
      default: null,
      description: "The licence of the video",
      hint: false,
      rules: {
        required: true,
        min: 2,
        max: 100,
      },
      visibility: {
        default: true, // socials"default: true" is the same than "hidden = false"
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, // if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "licence", // item type on schema.org
    },
    licenseUrl: {
      label: "licenseUrl",
      type: 0,
      component: "TextField", // TODO change for an autocomplete
      default: null,
      description: "The caption of the video",
      hint: false,
      rules: {
        required: true,
        url: true,
      },
      visibility: {
        default: false, // "default: true" is the same than "hidden = false"
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, // if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "licenseUrl", // item type on schema.org
    },
    backgroundColor: {
      label: "backgroundColor",
      type: 0,
      component: "TextColorPicker", // TODO change for an autocomplete
      default: null,
      description: "",
      hint: false,
      rules: {
        required: true,
        color: true,
      },
      visibility: {
        default: false, // "default: true" is the same than "hidden = false"
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, // if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "backgroundColor", // item type on schema.org
    },
  },
}

export default defaultConfig
