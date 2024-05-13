import { Form } from "./form";

export interface Consent {
  //data consent (display info about me)
  data: boolean;
  // record consent (record my activity, droit à l'image)
  record: boolean;
  // broadcast consent (broadcast my activity, diffusion de contenus)
  diffusion: boolean;
  // publication consent (publish my content, generate DOIs)
  publication: boolean;
  // email communications (including newsletter)
  email: boolean;
  // IEA newsletter
  newsletter: boolean;
  // news about IEA fellowship
  fellowshipnewsletter: boolean;
}

interface ConsentForm {
  form: Record<string, Form>;
}
const defaultConfig: ConsentForm = {
  form: {
    data: {
      label: "data",
      component: "BooleanCheckbox",
      type: 0, // 0 = primitive, 1 = object, 2 = array, 3 = template
      default: false,
      description: "data consent (display info about me)",
      hint: false,
      rules: {
        required: true,
      },
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, // if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "data", // item type on schema.org
    },
    record: {
      label: "record",
      component: "BooleanCheckbox",
      type: 0, // 0 = primitive, 1 = object, 2 = array, 3 = template
      default: false,
      description: "record consent (record my activity, droit à l'image)",
      hint: false,
      rules: {
        required: true,
      },
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, // if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "record", // item type on schema.org
    },
    diffusion: {
      label: "diffusion",
      component: "BooleanCheckbox",
      type: 0, // 0 = primitive, 1 = object, 2 = array, 3 = template
      default: false,
      description:
        "broadcast consent (broadcast my activity, diffusion de contenus)",
      hint: false,
      rules: {
        required: true,
      },
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, // if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "diffusion", // item type on schema.org
    },
    publication: {
      label: "publication",
      component: "BooleanCheckbox",
      type: 0, // 0 = primitive, 1 = object, 2 = array, 3 = template
      default: false,
      description: "publication consent (publish my content, generate DOIs)",
      hint: false,
      rules: {
        required: true,
      },
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, // if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "publication", // item type on schema.org
    },
    email: {
      label: "email",
      component: "BooleanCheckbox",
      type: 0, // 0 = primitive, 1 = object, 2 = array, 3 = template
      default: false,
      description: "email communications (including newsletter)",
      hint: false,
      rules: {
        required: true,
      },
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, // if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "email", // item type on schema.org
    },
    newsletter: {
      label: "newsletter",
      component: "BooleanCheckbox",
      type: 0, // 0 = primitive, 1 = object, 2 = array, 3 = template
      default: false,
      description: "",
      hint: false,
      rules: {
        required: true,
      },
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, // if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "newsletter", // item type on schema.org
    },
  },
};

export default defaultConfig;
