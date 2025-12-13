import { Image } from "../../files/models/image"
import { People } from "../../people/models/people"
import { Disciplines } from "../../misc/models/disciplines"
import { Video } from "../../files/models/video"
import { Tag } from "../../misc/models/tags"
import Model from "../../model"
// define format from set of articles formats offered by PIAS (i.e. Zenodo api)import { formType } from "./form"
import { formType } from "../../form"
export interface Article {
  name: string
  abstract: string
  image?: Image
  video?: Video
  needDOI: boolean
  DOI?: string
  Zid?: string
  highlight: boolean
  date?: Date
  authors: People[]
  issue?: string
  lang: string
  disciplines?: Disciplines[]
  //format: Format[]
  tags?: Tag[]
}

const defautConfig: Model = {
  list: {
    filters: {},
    sort: {
      // sort options
      nameasc: {
        // by name from a to z
        icon: "sort-alphabetical-ascending",
        text: "by-name-from-a-to-z",
        value: [{ name: 1 }],
      },
      namedesc: {
        // by name from z to a
        icon: "sort-alphabetical-descending",
        text: "by-name-from-z-to-a",
        value: [{ name: -1 }],
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
    abstract: {
      label: "abstract",
      component: "TextArea",
      type: formType.Primitive,

      rules: {
        required: true,
        min: 5,
        max: 2000,
      },
      meta: "abstract",
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
    video: {
      label: "video",
      component: "ObjectContainerPanel",
      type: formType.Template,

      rules: {
        required: true,
      },
      meta: "video",
    },
    needDOI: {
      label: "needDOI",
      component: "Checkbox",
      type: formType.Primitive,

      rules: {
        required: true,
      },
      meta: "needDOI",
    },
    DOI: {
      label: "DOI",
      component: "TextField",
      type: formType.Primitive,

      rules: {
        required: true,
        DOI: true,
      },
      meta: "DOI",
    },
    Zid: {
      label: "Zid",
      component: "TextField",
      type: formType.Primitive,

      rules: {
        required: true,
        // TODO add a Zenodo Id validation regex
      },
      meta: "Zid",
    },
    highlight: {
      label: "highlight",
      component: "Checkbox",
      type: formType.Primitive,

      rules: {
        required: true,
      },
      meta: "highlight",
    },
    date: {
      label: "date",
      component: "DatePicker", // TODO create the date picker
      type: formType.Primitive,

      rules: {
        required: true,
        date: true,
      },
      meta: "date",
    },
    authors: {
      label: "authors",
      component: "CollectionContainerPanel",
      type: formType.Template,

      rules: {
        required: true,
      },
      meta: "authors",
    },
    issue: {
      label: "issue",
      component: "TextField",
      type: formType.Primitive,

      rules: {
        required: true,
      },
      meta: "issue",
    },
    lang: {
      label: "lang",
      component: "TextField",
      type: formType.Primitive,

      rules: {
        required: true,
      },
      meta: "lang",
    },
    disciplines: {
      label: "disciplines",
      component: "DisciplinePicker",
      type: formType.Document,

      rules: {
        required: true,
      },
      meta: "disciplines",
    },
    // format: {
    //   // TODO define inline @Antoine
    //   label: "format",
    //   component: "CollectionContainerPanel",
    //   type: formType.Array,

    //       //
    //   rules: {
    //     required: true,
    //   },
    //   show: {
    //     default: true,
    //     switchIf: [],
    //     disjonctive: false,
    //   },
    //   meta: "format",
    // },
    tags: {
      label: "tag",
      component: "TagPicker",
      type: formType.Document,
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      meta: "tag",
    },
  },
}

export default defautConfig
