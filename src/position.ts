import { Form } from "./form"
import { FormType } from "./form"

export interface Position {
  role: string
  department?: string
  start?: Date
  stop?: Date
}

export interface PositionForm {
  form: Record<string, Form>
}
const defaultConfig: PositionForm = {
  form: {
    role: {
      label: "role",
      component: "TextField",
      type: FormType.PRIMITIVE, //
      default: "",
      description: "",
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      meta: "role",
    },
    department: {
      label: "department",
      component: "TextField",
      type: FormType.PRIMITIVE, //
      default: "",
      description: "",
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      meta: "department",
    },
    start: {
      label: "start",
      component: "DatePicker",
      type: FormType.PRIMITIVE, //
      default: "",
      description: "",
      rules: {
        required: true,
        date: true,
      },
      meta: "start",
    },
    stop: {
      label: "stop",
      component: "DatePicker",
      type: FormType.PRIMITIVE, //
      default: "",
      description: "",
      rules: {
        required: true,
        date: true,
      },
      meta: "stop",
    },
  },
}

export default defaultConfig
