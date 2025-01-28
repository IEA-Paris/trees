import { Form } from "./form"
import { Vintage } from "./vintage"

export interface Groups {
  team?: boolean
  sab?: boolean
  board?: boolean
  fellow?: boolean
  sponsor?: boolean
  vintage?: Vintage[]
}

export interface GroupsForm {
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
      meta: "team",
    },
    sab: {
      label: "sab",
      component: "BooleanCheckbox",
      type: 0, //
      default: "",
      description: "",
      meta: "sab",
    },
    board: {
      label: "board",
      component: "BooleanCheckbox",
      type: 0, //
      default: "",
      description: "",
      meta: "board",
    },
    fellow: {
      label: "fellow",
      component: "BooleanCheckbox",
      type: 0, //
      default: "",
      description: "",
      meta: "fellow",
    },
    sponsor: {
      label: "sponsor",
      component: "BooleanCheckbox",
      type: 0, //
      default: "",
      description: "",
      meta: "sponsor",
    },
    vintage: {
      label: "vintage",
      component: "CollectionContainerPanel",
      type: 3, //
      default: "",
      description: "",
      meta: "vintage",
    },
  },
}

export default defaultConfig
