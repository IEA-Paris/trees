import { Form, formType } from "../form"

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
      type: formType.Primitive,

      rules: {
        required: true,
        email: true,
      },
      meta: "email",
    },
    firstname: {
      label: "firstname",
      component: "TextField",
      type: formType.Primitive,

      rules: {
        required: true,
        min: 1,
        max: 200,
      },
      meta: "firstname",
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
      meta: "lastname",
    },
    institution: {
      label: "institution",
      component: "TextField",
      type: formType.Primitive,

      meta: "institution",
    },
    lang: {
      label: "lang",
      component: "ListSelect",
      type: formType.Primitive,

      rules: {
        required: true,
      },
      meta: "lang",
    },
  },
}

export default defautConfig
