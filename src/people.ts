import { Affiliations } from "./affiliations"
import { Image } from "./image"
import { Socials } from "./socials"
import { Position } from "./position"
import { Consent } from "./consent"
import { Groups } from "./groups"
import { Disciplines } from "./disciplines"
import { Video } from "./video"
import Model from "./model"
import { Related } from "./related"
import { formType } from "./form"

export interface People {
  name: string
  firstname: string
  lastname: string
  affiliations?: Affiliations[]
  image?: Image
  socials?: Socials
  biography?: string
  consent: Consent
  groups: Groups
  lang: string
  disciplines?: Disciplines[]
  related?: Related[]
  video?: Video[]
}

const defaultConfig: Model = {
  source: "gql",
  type: "", // 'directory' | 'file'
  path: "", // path to the folder where the content is stored
  list: {
    create: true, // allow to create new items

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
        value: ["groups.vintage.year", 1],
      },
      vintageasc: {
        // by name from z to a
        icon: "sort-calendar-descending",
        text: "by-vintage-from-recent-to-old",
        value: ["groups.vintage.year", -1],
        default: true,
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
      /*     expanded: {
        name: "expanded",
        icon: "arrow-expand-vertical",
      }, */
    },
  },
  form: {
    firstname: {
      label: "firstname",
      component: "TextField",
      type: formType.Primitive,
      rules: {
        required: true,
        min: 1,
        max: 200,
      },
      meta: "firstname", // item type on schema.org
    },
    lastname: {
      label: "lastname",
      component: "TextField",
      type: formType.Primitive,

      rules: {
        required: true,
        min: 1,
        max: 200,
      },
      meta: "lastname", // item type on schema.org
    },
    summary: {
      label: "summary",
      component: "TextArea",
      i18n: true,
      type: formType.Primitive,
      rules: {
        required: true,
        min: 5,
        max: 500,
      },
      meta: "biography",
    },
    image: {
      label: "image",
      component: "ImagePicker",
      type: formType.Document,
      meta: "image",
    },
    affiliations: {
      label: "affiliations",
      component: "CollectionContainerPanel",
      type: formType.Template,
      meta: "affiliations",
    },

    socials: {
      label: "socials",
      component: "ObjectKeyPairContainer",
      type: formType.Template,

      meta: "socials",
    },
    disciplines: {
      label: "disciplines",
      component: "DisciplinePicker",
      type: formType.Document,

      meta: "disciplines",
    },
    video: {
      label: "video",
      component: "CollectionContainerPanel",
      type: formType.Template,
      meta: "video",
    },

    related: {
      label: "related",
      component: "ObjectContainerPanel",
      type: formType.Template,

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
      type: formType.Template,
      rules: {
        required: true,
      },
      meta: "consent",
    },
    groups: {
      label: "groups",
      component: "ObjectContainerPanel",
      type: formType.Template,
      rules: {
        required: true,
      },
      meta: "groups",
    },
    lang: {
      label: "lang",
      component: "AutoComplete",
      type: formType.Primitive,
      rules: {
        required: true,
      },
      // items: langs, // TODO add language enum
      meta: "lang",
    },
  },
}

export default defaultConfig
