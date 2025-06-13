import { Affiliation } from "./affiliations"
import { Image } from "./image"
import { Socials } from "./socials"
import { Position } from "./position"
import { Consent } from "./consent"
import { Groups } from "./groups"
import { Disciplines } from "./disciplines"
import { Video } from "./video"
import Model from "./model"
import { Related } from "./related"
import { mapEnum } from "../lib/utils"
import configPeople, { People } from "./people"
import { FormType } from "./form"

type Settings = {
  lang: String
}
export enum UserStatus {
  ACTIVE,
  PENDING,
  BLOCKED,
  DELETED,
}
export enum UserRole {
  ADMIN,
  EDITOR,
  CONTRIBUTOR,
  VIEWER,
  FELLOW,
  MEMBER,
  GUEST,
}
export interface User extends People {
  admin: Boolean
  apps: [AppRole]
  email: String
  settings: Settings
  status: UserStatus
}
type AppRole = {
  appId: String
  roles: UserRole[]
}
const userConfig: Model = {
  source: "gql",
  type: "", // 'directory' | 'file'
  path: "", // path to the folder where the content is stored
  list: {
    create: true, // allow to create new items
    perPage: {
      options: [9, 12, 16],
      default: 9,
    },
    filters: {
      groups: {
        type: "Select",
      },
      vintage: {
        type: "Select",
        visibility: {
          default: false, // same as hidden = true
          switchIf: [{ groups: "fellows" }], // array of conditions to switch the visibility, each condition will be assessed as a boolean
          disjonctive: false, //TODO: implement.  if true, show only if one of the if is true, if false, show only if all of the if are true
        },
        multiple: true,
      },
      programs: {
        type: "Select",
        visibility: {
          default: false, // same as hidden = true
          switchIf: [{ groups: "fellows" }], // array of conditions to switch the visibility, each condition will be assessed as a boolean
          disjonctive: false, //TODO: implement.  if true, show only if one of the if is true, if false, show only if all of the if are true
        },
        multiple: true,
      },
      disciplines: {
        type: "Select",
        visibility: {
          default: false, // same as hidden = true
          switchIf: [{ groups: "fellows" }], // array of conditions to switch the visibility, each condition will be assessed as a boolean
          disjonctive: false, //TODO: implement.  if true, show only if one of the if is true, if false, show only if all of the if are true
        },
        multiple: true,
      },
      member: {
        type: "Select",
        visibility: {
          default: false, // same as hidden = true
          switchIf: [{ groups: "fellows" }], // array of conditions to switch the visibility, each condition will be assessed as a boolean
          disjonctive: false, //TODO: implement.  if true, show only if one of the if is true, if false, show only if all of the if are true
        },
        multiple: true,
      },
    },
    sort: {
      // sort options
      nameasc: {
        // by name from a to z
        icon: "sort-alphabetical-ascending",
        text: "by-name-from-a-to-z",
        value: ["lastname", 1],
      },
      namedesc: {
        // by name from z to a
        icon: "sort-alphabetical-descending",
        text: "by-name-from-z-to-a",
        value: ["lastname", -1],
      },
      vintagedesc: {
        // by name from z to a
        icon: "sort-calendar-descending",
        text: "by-vintage-from-old-to-recent",
        value: ["groups.vintage.year", -1],
      },
      vintageasc: {
        // by name from z to a
        icon: "sort-calendar-descending",
        text: "by-vintage-from-recent-to-old",
        value: ["groups.vintage.year", 1],
        default: true,
      },
    },
    views: {
      rows: {
        icon: "view-list",
        default: true,
      },
      dense: {
        name: "dense",
        icon: "land-rows-horizontal",
      },
      /*     expanded: {
        name: "expanded",
        icon: "arrow-expand-vertical",
      }, */
    },
  },
  form: {
    name: {
      label: "name",
      component: "TextField",
      type: FormType.PRIMITIVE, // 0 = primitive, 1 = object, 2 = array, 3 = template
      default: "",
      description: "",
      rules: {
        required: true,
        min: 1,
        max: 200,
      },
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, //TODO: implement.  if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "name", // item type on schema.org
    },
    firstname: {
      label: "firstname",
      component: "TextField",
      type: FormType.PRIMITIVE, // 0 = primitive, 1 = object, 2 = array, 3 = template
      default: "",
      description: "",
      rules: {
        required: true,
        min: 1,
        max: 200,
      },
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, //TODO: implement.  if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "firstname", // item type on schema.org
    },
    lastname: {
      label: "lastname",
      component: "TextField",
      type: FormType.PRIMITIVE, // 0 = primitive, 1 = object, 2 = array, 3 = template
      default: "",
      description: "",
      rules: {
        required: true,
        min: 1,
        max: 200,
      },
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, //TODO: implement.  if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "lastname", // item type on schema.org
    },
    affiliations: {
      label: "affiliations",
      component: "CollectionContainerPanel",
      type: FormType.ARRAY, //
      default: "",
      description: "",
      rules: {
        required: false,
      },
      meta: "affiliations",
    },
    image: {
      label: "image",
      component: "ObjectContainerPanel",
      type: FormType.ARRAY, //
      default: "",
      description: "",
      rules: {
        required: false,
      },
      meta: "image",
    },
    socials: {
      label: "socials",
      component: "ObjectContainerPanel",
      type: FormType.ARRAY, //
      default: "",
      description: "",
      meta: "socials",
    },
    disciplines: {
      label: "disciplines",
      component: "CollectionContainerPanel",
      type: FormType.ARRAY, //
      default: "",
      description: "",
      meta: "disciplines",
    },
    video: {
      label: "video",
      component: "CollectionContainerPanel",
      type: FormType.ARRAY, //
      default: "",
      description: "",
      meta: "video",
    },
    biography: {
      label: "biography",
      component: "TextArea",
      i18n: true,
      type: FormType.PRIMITIVE, //
      default: "",
      description: "",
      rules: {
        required: true,
        min: 5,
        max: 2000,
      },
      meta: "biography",
    },

    related: {
      label: "related",
      component: "ObjectContainerPanel",
      type: FormType.ARRAY, //
      default: "",
      description: "",
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      meta: "related",
    },

    consent: {
      label: "consent",
      component: "ObjectContainerPanel",
      type: FormType.ARRAY, //
      default: "",
      description: "",
      rules: {
        required: true,
      },
      meta: "consent",
    },
    groups: {
      label: "groups",
      component: "ObjectContainerPanel",
      type: FormType.ARRAY, //
      default: "",
      description: "",
      rules: {
        required: true,
      },
      meta: "groups",
    },
    lang: {
      label: "lang",
      component: "ListAutoComplete",
      type: FormType.PRIMITIVE, //
      default: "",
      description: "",
      rules: {
        required: true,
      },
      meta: "lang",
    },
  },
}
const defaultConfig: Model = {
  aliases: ["people"],

  ...configPeople,
  ...userConfig,
}
export default defaultConfig
