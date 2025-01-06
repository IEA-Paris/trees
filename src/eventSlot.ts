import { Form } from "./form"

export interface EventSlot {
  email: string
  firstname: string
  institution?: string
  lang: string
  lastname: string
}
// form

export interface EventSlotForm {
  form: Record<string, Form>
}

const defautConfig: EventSlotForm = {
  form: {
    email: {
      label: "email",
      component: "TextField",
      type: 0, //
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
        email: true,
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "email",
    },
    firstname: {
      label: "firstname",
      component: "TextField",
      type: 0, //
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
        min: 1,
        max: 200,
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "firstname",
    },
    institution: {
      label: "institution",
      component: "TextField",
      type: 0, //
      default: "",
      description: "",
      hint: false,
      rules: {
        required: false,
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "institution",
    },
    lang: {
      label: "lang",
      component: "ListSelect",
      type: 0, //
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "lang",
    },
    lastname: {
      label: "lastname",
      component: "TextField",
      type: 0, //
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
        min: 1,
        max: 200,
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "lastname",
    },
  },
}

export default defautConfig
