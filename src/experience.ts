import { Form } from "./form"
import { formType } from "./form"

export interface Experience {
  affiliation: any // Document reference
  positions: any[] // Array of Position templates
}

export interface ExperienceForm {
  form: Record<string, Form>
}

const defaultConfig: ExperienceForm = {
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
      items: {
        position: {
          label: "position",
          component: "ObjectContainerPanel",
          type: formType.Template,
          meta: "positions",
        },
      },
      meta: "positions",
    },
  },
}

export default defaultConfig
