export interface Socials {
  website: string
  wikipedia: string
  orcid: string
  linkedin: string
  twitter: string
  instagram: string
  scholar: string
  researchgate: string
  mendeley: string
}
export default {
  website: {
    label: "website",
    type: "TextField",
    default: "",
    description: "",
    hint: false,
    rules: {
      url: true,
    },
    visibility: {
      default: true, // same as hidden = true
      switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
      disjonctive: false, // if true, show only if one of the if is true, if false, show only if all of the if are true
    },
    meta: "website", // item type on schema.org
  },
  wikipedia: {
    label: "wikipedia",
    type: "TextField",
    default: "",
    description: "",
    hint: false,
    rules: {
      url: true,
    },
    visibility: {
      default: true, // same as hidden = true
      switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
      disjonctive: false, // if true, show only if one of the if is true, if false, show only if all of the if are true
    },
    meta: "wikipedia", // item type on schema.org
  },
  orcid: {
    label: "orcid",
    type: "TextField",
    default: "",
    description: "",
    hint: false,
    rules: {
      number: true,
    },
    visibility: {
      default: true, // same as hidden = true
      switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
      disjonctive: false, // if true, show only if one of the if is true, if false, show only if all of the if are true
    },
    meta: "orcid", // item type on schema.org
  },
  twitter: {
    label: "twitter",
    type: "TextField",
    default: "",
    description: "",
    hint: false,
    rules: {
      url: true,
    },
    visibility: {
      default: true, // same as hidden = true
      switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
      disjonctive: false, // if true, show only if one of the if is true, if false, show only if all of the if are true
    },
    meta: "twitter", // item type on schema.org
  },
  linkedin: {
    label: "linkedin",
    type: "TextField",
    default: "",
    description: "",
    hint: false,
    rules: {
      url: true,
    },
    visibility: {
      default: true, // same as hidden = true
      switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
      disjonctive: false, // if true, show only if one of the if is true, if false, show only if all of the if are true
    },
    meta: "linkedin", // item type on schema.org
  },
  instagram: {
    label: "instagram",
    type: "TextField",
    default: "",
    description: "",
    hint: false,
    rules: {
      url: true,
    },
    visibility: {
      default: true, // same as hidden = true
      switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
      disjonctive: false, // if true, show only if one of the if is true, if false, show only if all of the if are true
    },
    meta: "instagram", // item type on schema.org
  },
  scholar: {
    label: "scholar",
    type: "TextField",
    default: "",
    description: "",
    hint: false,
    rules: {
      url: true,
    },
    visibility: {
      default: true, // same as hidden = true
      switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
      disjonctive: false, // if true, show only if one of the if is true, if false, show only if all of the if are true
    },
    meta: "scholar", // item type on schema.org
  },
  researchgate: {
    label: "researchgate",
    type: "TextField",
    default: "",
    description: "",
    hint: false,
    rules: {
      url: true,
    },
    visibility: {
      default: true, // same as hidden = true
      switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
      disjonctive: false, // if true, show only if one of the if is true, if false, show only if all of the if are true
    },
    meta: "researchgate", // item type on schema.org
  },
  mendeley: {
    label: "mendeley",
    type: "TextField",
    default: "",
    description: "",
    hint: false,
    rules: {
      url: true,
    },
    visibility: {
      default: true, // same as hidden = true
      switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
      disjonctive: false, // if true, show only if one of the if is true, if false, show only if all of the if are true
    },
    meta: "mendeley", // item type on schema.org
  },
}
//TODO  form
