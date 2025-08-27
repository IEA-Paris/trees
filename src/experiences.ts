import { Form, formType } from "./form"

export interface Experiences {
  affiliation: any // Document reference
  positions: any[] // Array of Position templates
}

export interface ExperiencesForm {
  form: Record<string, Form>
}

const defaultConfig: ExperiencesForm = {
  form: {
    affiliation: {
      label: "affiliation",
      component: "AffiliationPicker",
      type: formType.Document,
      meta: "affiliation",
    },
    positions: {
      label: "positions",
      component: "CollectionContainerPanel",
      type: formType.Array,
      meta: "positions",
      items: {
        label: "position",
        component: "ObjectContainerPanel",
        type: formType.Template,
        meta: "position",
      },
    },
  },
}

export default defaultConfig
