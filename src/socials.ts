import { Form } from "./form"

export interface Socials {
  website?: URL
  wikipedia?: URL
  orcid?: string
  linkedin?: URL
  twitter?: URL
  instagram?: URL
  scholar?: URL
  researchgate?: URL
  mendeley?: URL
  idRef?: number
}

export interface SocialsForm {
  form: Record<string, Form>
}
const defaultConfig: SocialsForm = {
  form: {
    website: {
      label: "website",
      type: 0, // 0 = primitive, 1 = object, 2 = array, 3 = template 4 = readonly
      component: "TextField",
      default: "",
      description: "",
      rules: {
        url: true,
      },
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, //TODO: implement.  if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "website", // item type on schema.org
    },
    wikipedia: {
      label: "wikipedia",
      type: 0,
      component: "TextField",
      default: "",
      description: "",
      rules: {
        url: true,
      },
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, //TODO: implement.  if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "wikipedia", // item type on schema.org
    },
    orcid: {
      label: "orcid",
      type: 0,
      component: "TextField",
      default: "",
      description: "",
      rules: {
        orcid: true,
      },
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, //TODO: implement.  if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "orcid", // item type on schema.org
    },
    twitter: {
      label: "twitter",
      type: 0,
      component: "TextField",
      default: "",
      description: "",
      rules: {
        url: true,
      },
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, //TODO: implement.  if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "twitter", // item type on schema.org
    },
    linkedin: {
      label: "linkedin",
      type: 0,
      component: "TextField",
      default: "",
      description: "",
      rules: {
        url: true,
      },
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, //TODO: implement.  if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "linkedin", // item type on schema.org
    },
    instagram: {
      label: "instagram",
      type: 0,
      component: "TextField",
      default: "",
      description: "",
      rules: {
        url: true,
      },
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, //TODO: implement.  if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "instagram", // item type on schema.org
    },
    scholar: {
      label: "scholar",
      type: 0,
      component: "TextField",
      default: "",
      description: "",
      rules: {
        url: true,
      },
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, //TODO: implement.  if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "scholar", // item type on schema.org
    },
    researchgate: {
      label: "researchgate",
      type: 0,
      component: "TextField",
      default: "",
      description: "",
      rules: {
        url: true,
      },
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, //TODO: implement.  if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "researchgate", // item type on schema.org
    },
    mendeley: {
      label: "mendeley",
      type: 0,
      component: "TextField",
      default: "",
      description: "",
      rules: {
        url: true,
      },
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, //TODO: implement.  if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "mendeley", // item type on schema.org
    },
    idRef: {
      label: "idRef",
      type: 0,
      component: "TextField",
      default: "",
      description: "",
      rules: {
        url: true,
      },
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, //TODO: implement.  if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "idRef", // item type on schema.org
    },
  },
}
export default defaultConfig
