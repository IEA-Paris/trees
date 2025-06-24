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
      type: formType.Primitive,
      default: false,
      description: "data consent (display info about me)",
      rules: {
        required: true,
      },
      meta: "data", // item type on schema.org
    },
    record: {
      label: "record",
      component: "Checkbox",
      type: formType.Primitive,
      default: false,
      description: "record consent (record my activity, droit à l'image)",
      rules: {
        required: true,
      },
      meta: "record", // item type on schema.org
    },
    diffusion: {
      label: "diffusion",
      component: "Checkbox",
      type: formType.Primitive,
      default: false,
      description:
        "broadcast consent (broadcast my activity, diffusion de contenus)",
      rules: {
        required: true,
      },
      meta: "diffusion", // item type on schema.org
    },
    publication: {
      label: "publication",
      component: "Checkbox",
      type: formType.Primitive,
      default: false,
      description: "publication consent (publish my content, generate DOIs)",
      rules: {
        required: true,
      },
      meta: "publication", // item type on schema.org
    },
    email: {
      label: "email",
      component: "Checkbox",
      type: formType.Primitive,
      default: false,
      description: "email communications (including newsletter)",
      rules: {
        required: true,
      },
      meta: "email", // item type on schema.org
    },
    newsletter: {
      label: "newsletter",
      component: "Checkbox",
      type: formType.Primitive,
      default: false,
      rules: {
        required: true,
      },
      meta: "newsletter", // item type on schema.org
    },
    fellowshipnewsletter: {
      label: "fellowshipnewsletter",
      component: "Checkbox",
      type: formType.Primitive,
      default: false,
      rules: {
        required: true,
      },
      meta: "fellowshipnewsletter", // item type on schema.org
    },
  },
}

export default defaultConfig
