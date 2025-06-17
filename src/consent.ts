import { Form } from "./form"
import { formType } from "./form"

export interface Consent {
  //data consent (display info about me)
  data: boolean
  // record consent (record my activity, droit à l'image)
  record: boolean
  // broadcast consent (broadcast my activity, diffusion de contenus)
  diffusion: boolean
  // publication consent (publish my content, generate DOIs)
  publication: boolean
  // email communications (including newsletter)
  email: boolean
  // IEA newsletter
  newsletter: boolean
  // news about IEA fellowship
  fellowshipnewsletter: boolean
}

export interface ConsentForm {
  form: Record<string, Form>
}
const defaultConfig: ConsentForm = {
  form: {
    data: {
      label: "data",
      component: "Checkbox",
      type: formType.Primitive, // 0 = primitive, 1 = object, 2 = array, 3 = template
      default: false,
      description: "data consent (display info about me)",
      rules: {
        required: true,
      },
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, //TODO: implement.  if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "data", // item type on schema.org
    },
    record: {
      label: "record",
      component: "Checkbox",
      type: formType.Primitive, // 0 = primitive, 1 = object, 2 = array, 3 = template
      default: false,
      description: "record consent (record my activity, droit à l'image)",
      rules: {
        required: true,
      },
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, //TODO: implement.  if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "record", // item type on schema.org
    },
    diffusion: {
      label: "diffusion",
      component: "Checkbox",
      type: formType.Primitive, // 0 = primitive, 1 = object, 2 = array, 3 = template
      default: false,
      description:
        "broadcast consent (broadcast my activity, diffusion de contenus)",
      rules: {
        required: true,
      },
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, //TODO: implement.  if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "diffusion", // item type on schema.org
    },
    publication: {
      label: "publication",
      component: "Checkbox",
      type: formType.Primitive, // 0 = primitive, 1 = object, 2 = array, 3 = template
      default: false,
      description: "publication consent (publish my content, generate DOIs)",
      rules: {
        required: true,
      },
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, //TODO: implement.  if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "publication", // item type on schema.org
    },
    email: {
      label: "email",
      component: "Checkbox",
      type: formType.Primitive, // 0 = primitive, 1 = object, 2 = array, 3 = template
      default: false,
      description: "email communications (including newsletter)",
      rules: {
        required: true,
      },
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, //TODO: implement.  if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "email", // item type on schema.org
    },
    newsletter: {
      label: "newsletter",
      component: "Checkbox",
      type: formType.Primitive, // 0 = primitive, 1 = object, 2 = array, 3 = template
      default: false,
      description: "",
      rules: {
        required: true,
      },
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, //TODO: implement.  if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "newsletter", // item type on schema.org
    },
    fellowshipnewsletter: {
      label: "fellowshipnewsletter",
      component: "Checkbox",
      type: formType.Primitive, // 0 = primitive, 1 = object, 2 = array, 3 = template
      default: false,
      description: "",
      rules: {
        required: true,
      },
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, //TODO: implement.  if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "fellowshipnewsletter", // item type on schema.org
    },
  },
}

export default defaultConfig
