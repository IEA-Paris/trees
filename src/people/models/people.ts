import { Affiliations } from "../../affiliations/models/affiliations"
import { Image } from "../../files/models/image"
import { Socials } from "../../misc/models/socials"
import { Position } from "./position"
import { Consent } from "./consent"
import { Groups } from "./groups"
import { Disciplines } from "../../misc/models/disciplines"
import { Video } from "../../files/models/video"
import Model from "../../model"
import { Related } from "../../misc/models/related"
import { formType, Transformers } from "../../form"
import { userRole } from "./users"

export interface People {
  name: string
  firstname: string
  lastname: string
  affiliations?: [{ affiliation: Affiliations; positions: [Position] }]
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
  list: {
    create: true, // allow to create new items

    filters: {
      groups: {
        type: "Select",
      },
      vintage: {
        type: "Select",
        show: {
          default: false, // same as hidden = true
          switchIf: [{ groups: "fellows" }], // array of conditions to switch the show, each condition will be assessed as a boolean
          disjonctive: false, //TODO: implement.  if true, show only if one of the if is true, if false, show only if all of the if are true
        },
        multiple: true,
      },
      programs: {
        type: "Select",
        show: {
          default: false, // same as hidden = true
          switchIf: [{ groups: "fellows" }], // array of conditions to switch the show, each condition will be assessed as a boolean
          disjonctive: false, //TODO: implement.  if true, show only if one of the if is true, if false, show only if all of the if are true
        },
        multiple: true,
      },
      disciplines: {
        type: "Select",
        show: {
          default: false, // same as hidden = true
          switchIf: [{ groups: "fellows" }], // array of conditions to switch the show, each condition will be assessed as a boolean
          disjonctive: false, //TODO: implement.  if true, show only if one of the if is true, if false, show only if all of the if are true
        },
        multiple: true,
      },
      member: {
        type: "Select",
        show: {
          default: false, // same as hidden = true
          switchIf: [{ groups: "fellows" }], // array of conditions to switch the show, each condition will be assessed as a boolean
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
    biography: {
      label: "biography",
      component: "TextArea",
      i18n: true,
      type: formType.Primitive,
      rules: {
        required: true,
        min: 5,
        max: 500,
      },
      meta: "biography",
      transformers: [Transformers.Options],
    },
    image: {
      label: "image",
      component: "ImagePicker",
      type: formType.Document,
      meta: "image",
    },
    experiences: {
      label: "experiences",
      component: "CollectionContainerPanel",
      type: formType.Array,
      items: {
        label: "experiences",
        component: "ObjectContainerPanel",
        type: formType.Template,
        meta: "experiences",
      },
    },

    socials: {
      label: "socials",
      component: "ObjectKeyPairContainer",
      type: formType.Template,
      meta: "socials",
    },
    disciplines: {
      label: "disciplines",
      component: "DocumentPicker",
      type: formType.Document,
      meta: "disciplines",
    },
    video: {
      label: "videos",
      component: "CollectionContainerPanel",
      type: formType.Array,
      meta: "video",
      items: {
        label: "video",
        component: "ObjectCollapsiblePanel",
        type: formType.Template,
        meta: "video",
      },
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
      meta: "consent",
    },
    groups: {
      label: "groups",
      groups: [userRole.Admin], // restrict to some groups
      component: "ObjectContainerPanel",
      type: formType.Template,
      meta: "groups",
    },
    /*     lang: {
      label: "lang",
      component: "Select",
      type: formType.Primitive,
      rules: {
        required: true,
      },
      // items: langs, // TODO add language enum
      meta: "lang",
    }, */
  },
}

export default defaultConfig
