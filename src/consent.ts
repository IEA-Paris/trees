import { Form } from "./form";
import { formType } from "./form";

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

export interface ConsentForm {
  form: Record<string, Form>;
}
const defaultConfig: ConsentForm = {
  form: {
    data: {
      label: "data",
      component: "Checkbox",
      type: formType.Primitive,
      default: false,
      hint: "My profile will be showcased on the Paris IAS websites",
      meta: "data", // item type on schema.org
    },
    record: {
      label: "record",
      component: "Checkbox",
      type: formType.Primitive,
      default: false,
      hint: "Necessary if you appear in a video or audio recording",
      meta: "record", // item type on schema.org
    },
    diffusion: {
      label: "diffusion",
      component: "Checkbox",
      type: formType.Primitive,
      default: false,
      hint: "To make available my video and audio recordings in publicaitons, news, events...",
      meta: "diffusion", // item type on schema.org
    },
    publication: {
      label: "publication",
      component: "Checkbox",
      type: formType.Primitive,
      default: false,
      hint: "To be officially published as an academic author and provide your content with a DOI",
      meta: "publication", // item type on schema.org
    },
    email: {
      label: "email",
      component: "Checkbox",
      type: formType.Primitive,
      default: false,
      hint: "To allow us to send you email communications in general (including newsletter)",
      meta: "email", // item type on schema.org
    },
    newsletter: {
      label: "newsletter",
      component: "Checkbox",
      type: formType.Primitive,
      default: false,
      meta: "newsletter", // item type on schema.org
    },
    fellowshipnewsletter: {
      label: "fellowshipnewsletter",
      component: "Checkbox",
      type: formType.Primitive,
      default: false,
      meta: "fellowshipnewsletter", // item type on schema.org
    },
  },
};

export default defaultConfig;
