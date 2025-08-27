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
    experience: {
      label: "experience",
      type: formType.Object,
      component: "ObjectContainerPanel",
      items: {
        affiliation: {
          label: "affiliation",
          component: "AffiliationPicker",
          type: formType.Document,
          meta: "affiliation",
        },
        positions: {
          label: "positions",
          component: "CollectionContainerPanel",
          type: formType.Template,
          meta: "positions",
        },
      },
    },
  },
}

export default defaultConfig
