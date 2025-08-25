import { Form } from "./form"
import { formType } from "./form"

export interface Affiliations {
  affiliation: any // Document reference
  positions: any[] // Array of Position templates
}

export interface AffiliationsForm {
  form: Record<string, Form>
}

const defaultConfig: AffiliationsForm = {
  form: {
    affiliation: {
      label: "affiliation",
      component: "AffiliationPicker",
      type: formType.Document,
      meta: "affiliation",
    },
    position: {
      label: "positions",
      component: "CollectionContainerPanel",
      type: formType.Template,
      meta: "positions",
    },
  },
}

export default defaultConfig
