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
      rules: {
        required: true,
        email: true,
      },
      meta: "email",
    },
    firstname: {
      label: "firstname",
      component: "TextField",
      type: 0, //
      default: "",
      description: "",
      rules: {
        required: true,
        min: 1,
        max: 200,
      },
      meta: "firstname",
    },
    institution: {
      label: "institution",
      component: "TextField",
      type: 0, //
      default: "",
      description: "",
      rules: {
        required: false,
      },
      meta: "institution",
    },
    lang: {
      label: "lang",
      component: "ListSelect",
      type: 0, //
      default: "",
      description: "",
      rules: {
        required: true,
      },
      meta: "lang",
    },
    lastname: {
      label: "lastname",
      component: "TextField",
      type: 0, //
      default: "",
      description: "",
      rules: {
        required: true,
        min: 1,
        max: 200,
      },
      meta: "lastname",
    },
  },
}

export default defautConfig
