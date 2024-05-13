import { Form } from "./form"

export interface Groups {
  team: boolean
  sab: boolean
  board: boolean
  fellow: boolean
  sponsor: boolean
  mileage: number[]
}

interface GroupsForm {
  form: Record<string, Form>
}

const defaultConfig: GroupsForm = {
  form: {
    team: {
      label: "team",
      component: "BooleanCheckbox",
      type: 0, //
      default: "",
      description: "",
      hint: false,
      rules: {},
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "team",
    },
    sab: {
      label: "sab",
      component: "BooleanCheckbox",
      type: 0, //
      default: "",
      description: "",
      hint: false,
      rules: {},
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "sab",
    },
    board: {
      label: "board",
      component: "BooleanCheckbox",
      type: 0, //
      default: "",
      description: "",
      hint: false,
      rules: {},
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "board",
    },
    fellow: {
      label: "fellow",
      component: "BooleanCheckbox",
      type: 0, //
      default: "",
      description: "",
      hint: false,
      rules: {},
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "fellow",
    },

    sponsor: {
      label: "sponsor",
      component: "BooleanCheckbox",
      type: 0, //
      default: "",
      description: "",
      hint: false,
      rules: {},
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "sponsor",
    },

    mileage: {
      label: "mileage",
      component: "ListAutoComplete",
      type: 2, //
      default: "",
      description: "",
      hint: false,
      rules: {},
      visibility: {
        default: true,
        switchIf: [],
        disjonctive: false,
      },
      meta: "mileage",
    },
  },
}

export default defaultConfig
