import Model from "../../model"
import configPeople, { People } from "./people"
import { formType } from "../../form"

type Settings = {
  lang: String
}
export enum userStatus {
  Active = "ACTIVE",
  Pending = "PENDING",
  Blocked = "BLOCKED",
  Deleted = "DELETED",
}
export enum userRole {
  Admin = "ADMIN",
  Editor = "EDITOR",
  Contributor = "CONTRIBUTOR",
  Viewer = "VIEWER",
  Fellow = "FELLOW",
  Member = "MEMBER",
  Guest = "GUEST",
}
export interface Users extends People {
  admin: Boolean
  apps: [AppRole]
  email: String
  settings: Settings
  status: userStatus
}
type AppRole = {
  appId: String
  roles: userRole[]
}
const userConfig: Model = {
  list: {
    filters: {
      groups: {
        type: "Select",
        value: "",
      },
      vintage: {
        type: "Select",
        show: {
          default: false, // same as hidden = true
          switchIf: [{ groups: "fellows" }], // array of conditions to switch the show, each condition will be assessed as a boolean
          disjonctive: false, //TODO: implement.  if true, show only if one of the if is true, if false, show only if all of the if are true
        },
        multiple: true,
        value: "",
      },
      programs: {
        type: "Select",
        show: {
          default: false, // same as hidden = true
          switchIf: [{ groups: "fellows" }], // array of conditions to switch the show, each condition will be assessed as a boolean
          disjonctive: false, //TODO: implement.  if true, show only if one of the if is true, if false, show only if all of the if are true
        },
        multiple: true,
        value: "",
      },
      disciplines: {
        type: "Select",
        show: {
          default: false, // same as hidden = true
          switchIf: [{ groups: "fellows" }], // array of conditions to switch the show, each condition will be assessed as a boolean
          disjonctive: false, //TODO: implement.  if true, show only if one of the if is true, if false, show only if all of the if are true
        },
        multiple: true,
        value: "",
      },
      member: {
        type: "Select",
        show: {
          default: false, // same as hidden = true
          switchIf: [{ groups: "fellows" }], // array of conditions to switch the show, each condition will be assessed as a boolean
          disjonctive: false, //TODO: implement.  if true, show only if one of the if is true, if false, show only if all of the if are true
        },
        multiple: true,
        value: "",
      },
    },
    sort: {
      // sort options
      nameasc: {
        // by name from a to z
        icon: "sort-alphabetical-ascending",
        text: "by-name-from-a-to-z",
        value: [{ lastname: 1 }],
      },
      namedesc: {
        // by name from z to a
        icon: "sort-alphabetical-descending",
        text: "by-name-from-z-to-a",
        value: [{ lastname: -1 }],
      },
      vintagedesc: {
        // by name from z to a
        icon: "sort-calendar-descending",
        text: "by-vintage-from-old-to-recent",
        value: [{ "groups.vintage.year": -1 }, { lastname: 1 }],
      },
      vintageasc: {
        // by name from z to a
        icon: "sort-calendar-descending",
        text: "by-vintage-from-recent-to-old",
        value: [{ "groups.vintage.year": 1 }, { lastname: 1 }],
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
    affiliations: {
      label: "affiliations",
      component: "DocumentPicker",
      type: formType.Document,

      meta: "affiliations",
    },
    image: {
      label: "image",
      component: "ImagePicker",
      type: formType.Document,

      meta: "image",
    },
    socials: {
      label: "socials",
      component: "ObjectContainerPanel",
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
      type: formType.Array,
      meta: "video",
      items: {
        label: "video",
        component: "ObjectContainerPanel",
        type: formType.Template,
        meta: "video",
      },
    },
    biography: {
      label: "biography",
      component: "TextArea",
      i18n: true,
      type: formType.Primitive,
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
      type: formType.Template,

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
      //  items: Groups // TODO: make groups enum
      meta: "groups",
    },
    lang: {
      label: "lang",
      component: "AutoComplete",
      type: formType.Primitive,
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
