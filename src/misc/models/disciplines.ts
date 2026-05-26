import Model from "../../model"
import { formType } from "../../form"
import { Image } from "../../files/models/image"

export enum DisciplinesOptions {
  AnthropologyAndEthnology = "ANTHROPOLOGY_AND_ETHNOLOGY",
  ArchitectureAndUrbanPlanning = "ARCHITECTURE_AND_URBAN_PLANNING",
  Archaeology = "ARCHAEOLOGY",
  ArtAndHistoryOfArt = "ART_AND_HISTORY_OF_ART",
  ClassicalStudies = "CLASSICAL_STUDIES",
  Demography = "DEMOGRAPHY",
  DigitalHumanities = "DIGITAL_HUMANITIES",
  Economics = "ECONOMICS",
  EducationSciences = "EDUCATION_SCIENCES",
  EnvironmentalSciences = "ENVIRONMENTAL_SCIENCES",
  Geography = "GEOGRAPHY",
  History = "HISTORY",
  InformationAndCommunicationSciences = "INFORMATION_AND_COMMUNICATION_SCIENCES",
  InternationalRelations = "INTERNATIONAL_RELATIONS",
  Law = "LAW",
  Linguistics = "LINGUISTICS",
  Literature = "LITERATURE",
  ManagementAndPublicAdministration = "MANAGEMENT_AND_PUBLIC_ADMINISTRATION",
  NeurosciencesAndCognitiveSciences = "NEUROSCIENCES_AND_COGNITIVE_SCIENCES",
  Philosophy = "PHILOSOPHY",
  PoliticalScience = "POLITICAL_SCIENCE",
  Psychology = "PSYCHOLOGY",
  Sociology = "SOCIOLOGY",
  StudiesInScienceAndTechnology = "STUDIES_IN_SCIENCE_AND_TECHNOLOGY",
  Theology = "THEOLOGY",
  Biology = "BIOLOGY",
  Chemistry = "CHEMISTRY",
  ComputerScience = "COMPUTER_SCIENCE",
  Medicine = "MEDICINE",
  PhysicsMathematicsAndEngineering = "PHYSICS_MATHEMATICS_AND_ENGINEERING",
}

export interface Disciplines {
  createdAt: Date
  description: string
  icon: string
  name: string
  updatedAt: Date
  image: Image
}

const configDefault: Model = {
  list: {
    filters: {},
    sort: {
      // sort options
      nameasc: {
        // by name from a to z
        icon: "sort-alphabetical-ascending",
        text: "by-name-from-a-to-z",
        value: [{ article_title: 1 }],
      },
      namedesc: {
        // by name from z to a
        icon: "sort-alphabetical-descending",
        text: "by-name-from-z-to-a",
        value: [{ article_title: -1 }],
      },
      dateasc: {
        // by date from most recent to oldest
        icon: "sort-calendar-descending",
        text: "by-date-most-recent-first",
        value: [{ date: -1 }],
        default: true,
      },
      datedesc: {
        // by date from oldest to most recent
        icon: "sort-calendar-ascending",
        text: "by-date-oldest-first",
        value: [{ date: 1 }],
      },
    },
    views: {
      rows: {
        name: "rows",
        icon: "view-list",
        perPage: {
          options: [9, 12, 16],
          default: 9,
        },
      },
      dense: {
        default: true,
        name: "dense",
        icon: "land-rows-horizontal",
        perPage: {
          options: [20, 40, 60, 80, 100],
          default: 20,
        },
      },
      tiles: {
        name: "tiles",
        icon: "view-quilt",
      },
      grid: {
        name: "grid",
        icon: "view-day",
      },
    },
  },
  form: {
    name: {
      label: "name",
      component: "TextField",
      type: formType.Primitive,

      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      meta: "name",
    },
    description: {
      label: "description",
      component: "TextField",
      type: formType.Primitive,
      rules: {
        required: true,
        min: 5,
        max: 2000,
      },
      meta: "description",
    },
    image: {
      label: "image",
      component: "ImagePicker",
      type: formType.Document,
      rules: {
        required: true,
      },
      meta: "image",
    },
    // TODO: add discipline picker based on the complete list of disciplines
    /*     icon: {
      label: "icon",
      component: "TextField",
      type: formType.Primitive, 
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      meta: "icon",
    }, */
  },
}

export default configDefault
