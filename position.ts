import { Form } from "./form"

export interface Position {
  role: string
  department: string
  start: Date
  stop: Date
}

interface PositionForm {
  form: Record<string, Form>
}
const defaultConfig: PositionForm = {
  form: {
    role: {
      label: "role",
      component: "TextField",
      type: 0, //
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "role",
    },
    department: {
      label: "department",
      component: "TextField",
      type: 0, //
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "department",
    },
    start: {
      label: "start",
      component: "DatePicker",
      type: 0, //
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
        date: true,
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "start",
    },
    stop: {
      label: "stop",
      component: "DatePicker",
      type: 0, //
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
        date: true,
      },
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "stop",
    },
  },
}

export default defaultConfig
