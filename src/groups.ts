import { Form } from "./form"
import { Vintage } from "./vintage"
import { formType } from "./form"

export interface Groups {
  team?: boolean
  sab?: boolean
  board?: boolean
  fellows?: boolean
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
      component: "Checkbox",
      type: formType.Primitive, //
      default: "",
      description: "",
      meta: "team",
    },
    sab: {
      label: "sab",
      component: "Checkbox",
      type: formType.Primitive, //
      default: "",
      description: "",
      meta: "sab",
    },
    board: {
      label: "board",
      component: "Checkbox",
      type: formType.Primitive, //
      default: "",
      description: "",
      meta: "board",
    },
    fellows: {
      label: "fellows",
      component: "Checkbox",
      type: formType.Primitive, //
      default: "",
      description: "",
      meta: "fellow",
    },
    sponsor: {
      label: "sponsor",
      component: "Checkbox",
      type: formType.Primitive, //
      default: "",
      description: "",
      meta: "sponsor",
    },
    vintage: {
      label: "vintage",
      component: "CollectionContainerPanel",
      type: formType.Template, //
      default: "",
      description: "",
      meta: "vintage",
    },
  },
}

export default defaultConfig
