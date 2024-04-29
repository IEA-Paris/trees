import { Image } from "./molecules/image"
export interface App {
  name: string
  logo: Image
}

export default {
  // fitlers used in the query by default (e.g. only published articles)
  queryFilters: {},
  styles: ["APA" /* 'vancouver' , */, "harvard1"],
  source: "md",
  perPage: {
    options: [9, 12, 16],
    default: 9,
  },
  path: "content/app", // path to the folder where the content is stored
  create: true, // allow to create new items
  type: "directory", // 'directory' | 'file
  listFilters: {
    year: {
      type: "Select",
      rules: {},
      label: "year",
      items: (articles) => {
        return articles.map((article) => new Date(article.date).getFullYear())
      },
    } /* 
    categories: {
      type: 'TextInput',
      rules: {},
      label: 'Search',
    },
    author: {
      type: 'Autocomplete',
      rules: {},
      label: 'authors',
    }, */,
  },
  sort: {
    // sort options
    nameasc: {
      // by name from a to z
      icon: "sort-alphabetical-ascending",
      text: "by-name-from-a-to-z",
      value: ["name", 1],
    },
    namedesc: {
      // by name from z to a
      icon: "sort-alphabetical-descending",
      text: "by-name-from-z-to-a",
      value: ["name", -1],
    },
    dateasc: {
      // by date from most recent to oldest
      icon: "sort-calendar-descending",
      text: "by-date-most-recent-first",
      value: ["date", -1],
      default: true,
    },
    datedesc: {
      // by date from oldest to most recent
      icon: "sort-calendar-ascending",
      text: "by-date-oldest-first",
      value: ["date", 1],
    },
  },
  views: [
    {
      name: "rows",
      icon: "view-list",
      default: true,
    },
    {
      name: "tiles",
      icon: "view-quilt",
    },
    {
      name: "grid",
      icon: "view-day",
    },
  ],
  schema: {
    name: {
      label: "name",
      type: "TextField",
      default: "",
      description:
        "The name of the app as displayed on google or the header of the app",
      hint: false,
      rules: {
        required: true,
        min: 2,
        max: 4,
      },
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, // if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "name", // item type on schema.org
    },
    authors: {
      label: "authors",
      type: "CollectionContainerPanel",
      description: "The authors of the app",
      rules: {
        required: true,
      },
      items: [
        {
          key: "firstname",
          label: "firstname",
          type: "TextField",
          default: "",
          description:
            "The name of the app as displayed on google or the header of the app",
          hint: false,
          rules: {
            required: true,
            min: 2,
            max: 4,
          },
          visibility: {
            default: true, // same as hidden = true
            switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
            disjonctive: false, // if true, show only if one of the if is true, if false, show only if all of the if are true
          },
          meta: "name", // item type on schema.org
        },
        {
          key: "lastname",
          label: "lastname",
          type: "TextField",
          default: "",
          description:
            "The name of the app as displayed on google or the header of the app",
          hint: false,
          rules: {
            required: true,
            min: 2,
            max: 4,
          },
          visibility: {
            default: true, // same as hidden = true
            switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
            disjonctive: false, // if true, show only if one of the if is true, if false, show only if all of the if are true
          },
          meta: "name", // item type on schema.org
        },
      ],
    },
    logo: {
      label: "logo",
      type: "ObjectContainerPanel",
      description: "The logo of the app",
      rules: {
        required: true,
      },
      default: { url: "", licence: "" }, // default value
      items: {
        url: {
          label: "url",
          type: "FileInput",
          default: "",
          description: "The image file used as app logo",
          hint: false,
          accept: "image/*",
          multiple: false,
          rules: {
            required: true,
          },
          visibility: {
            default: true, // same as hidden = true
            switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
            disjonctive: false, // if true, show only if one of the if is true, if false, show only if all of the if are true
          },
          meta: "logo", // item type on schema.org
        },
        licence: {
          label: "licence",
          type: "TextField",
          default: "",
          description: "The name of the author and the licencing information",
          hint: false,
          rules: {
            required: true,
            min: 2,
            max: 4,
          },
          visibility: {
            default: true, // same as hidden = true
            switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
            disjonctive: false, // if true, show only if one of the if is true, if false, show only if all of the if are true
          },
          meta: "licence", // item type on schema.org
        },
      },
    },
    /* 
    
    url: {
      type: "TextField",
      rules: {
        url: true,
        max: 2048,
      },
      label: "Logo URL",
      hidden: true,
      default: "",
      showOnly: {
        if: [],
        disjonctive: false, // if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "logo", // item type on schema.org
      description:
        "The name of the app as displayed on google or the header of the app",
      hint: false,
    },
    logo: {
      type: "FileInput",
      rules: {
        url: true,
        max: 2048,
      },
      label: "Logo URL",
      hidden: true,
      default: [],
      showOnly: {
        if: [],
        disjonctive: false, // if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "logo", // item type on schema.org
      description:
        "The name of the app as displayed on google or the header of the app",
      hint: false,
    }, */
  },
}
