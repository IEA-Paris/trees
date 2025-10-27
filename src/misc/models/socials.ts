import { formType, Form } from "../../form"

export interface Socials {
  website?: URL
  wikipedia?: URL
  orcid?: string
  linkedin?: URL
  twitter?: URL
  bluesky?: URL
  instagram?: URL
  scholar?: URL
  researchgate?: URL
  mendeley?: URL
  idRef?: number
}

export interface SocialsForm {
  form: Record<string, Form>
}
const defaultConfig: SocialsForm = {
  form: {
    website: {
      label: "website",
      type: formType.Primitive,
      component: "TextField",
      rules: {
        url: true,
      },
      meta: "website", // item type on schema.org
    },
    wikipedia: {
      label: "wikipedia",
      type: formType.Primitive,
      component: "TextField",
      rules: {
        url: true,
      },
      meta: "wikipedia", // item type on schema.org
    },
    orcid: {
      label: "orcid",
      type: formType.Primitive,
      component: "TextField",
      rules: {
        orcid: true,
      },
      meta: "orcid", // item type on schema.org
    },
    scholar: {
      label: "scholar",
      type: formType.Primitive,
      component: "TextField",
      rules: {
        url: true,
      },
      meta: "scholar", // item type on schema.org
    },
    researchgate: {
      label: "researchgate",
      type: formType.Primitive,
      component: "TextField",
      rules: {
        url: true,
      },
      meta: "researchgate", // item type on schema.org
    },
    mendeley: {
      label: "mendeley",
      type: formType.Primitive,
      component: "TextField",
      rules: {
        url: true,
      },
      meta: "mendeley", // item type on schema.org
    },
    idRef: {
      label: "idRef",
      type: formType.Primitive,
      component: "TextField",
      rules: {
        url: true,
      },
      meta: "idRef", // item type on schema.org
    },
    twitter: {
      label: "twitter",
      type: formType.Primitive,
      component: "TextField",
      rules: {
        url: true,
      },
      meta: "twitter", // item type on schema.org
    },
    linkedin: {
      label: "linkedin",
      type: formType.Primitive,
      component: "TextField",
      rules: {
        url: true,
      },
      meta: "linkedin", // item type on schema.org
    },
    bluesky: {
      label: "bluesky",
      type: formType.Primitive,
      component: "TextField",
      rules: {
        url: true,
      },
      meta: "bluesky", // item type on schema.org
    },
    instagram: {
      label: "instagram",
      type: formType.Primitive,
      component: "TextField",
      rules: {
        url: true,
      },
      meta: "instagram", // item type on schema.org
    },
    youtube: {
      label: "youtube",
      type: formType.Primitive,
      component: "TextField",
      rules: {
        url: true,
      },
      meta: "youtube", // item type on schema.org
    },
  },
}
export default defaultConfig
