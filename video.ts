export type video = {
  url: string
  alt: string | null
  copyright: string
  license: string | null
  licenseUrl: string | null
  backgroundColor: string | null
}
export default {
  url: {
    type: "image",
    label: "Image URL",
    default: "",
    description: "The url where the image is fetched from",
    meta: "logo", // item type on schema.org
    hint: false,
    rules: {
      required: true,
      url: true,
      max: 2048,
      maxSize: 1000000,
    },
    formats: ["jpg", "jpeg", "png", "gif", "svg"],
    allow_multiple: true,
    urlOnly: false,
    defaultFolder: "images",
    visibility: {
      default: true, // socials"default: true" is the same than "hidden = false"
      switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
      disjonctive: false, // if true, show only if one of the if is true, if false, show only if all of the if are true
    },
  },
  alt: {
    label: "Alternative Name",
    type: "TextField",
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
    // meta: 'name', // item type on schema.org
  },
  copyright: {
    label: "Copyright",
    type: "TextField",
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
    // meta: 'name', // item type on schema.org
  },
  licence: {
    label: "Licence",
    type: "TextField", // TODO change for an autocomplete
    default: null,
    description: "The licence of the image",
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
    // meta: 'name', // item type on schema.org
  },
  caption: {
    label: "Caption",
    type: "TextField", // TODO change for an autocomplete
    default: null,
    description: "The caption of the image",
    hint: false,
    rules: {
      required: true,
      min: 2,
      max: 100,
    },
    visibility: {
      default: false, // "default: true" is the same than "hidden = false"
      switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
      disjonctive: false, // if true, show only if one of the if is true, if false, show only if all of the if are true
    },
    // meta: 'name', // item type on schema.org
  },
}
