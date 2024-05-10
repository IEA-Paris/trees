import { Location } from "./location";
import { Image } from "./image";
import { EventSlot } from "./eventSlot";
import { Discipline } from "./discipline";
import { Tag } from "./tag";
import { People } from "./people";
import { Affiliation } from "./affiliation";
import { File } from "./file";
import { List } from "./list";
import { Form } from "./form";

export interface Event {
  affiliations: [Affiliation];
  appId: string;
  availableSlots: number;
  bookingState: number;
  createdAt: string;
  delay: number;
  description: string;
  disciplines: [Discipline];
  discussants: [People];
  files: [File];
  image: Image;
  name: string;
  onlineSlots: [EventSlot];
  organizers: [People];
  outside: boolean;
  place: Location;
  slots: [EventSlot];
  speakers: [People];
  start: string;
  state: number;
  stop: string;
  subtitle: string;
  summary: string;
  tags: [Tag];
  totalSlots: number;
  type: number; // 0 : online, 1: physical, 2: hybrid
  updatedAt: string;
  url: string;
}

export interface ConfigEvent {
  source: string;
  path: string | null;
  type: string | null;
  list: List;
  form: Record<string, Form>;
}

const defaultConfig: ConfigEvent = {
  source: "md",
  // markdown related keys
  path: null, // path to the folder where the content is stored
  type: null, // 'directory' | 'file' | null
  // GQL related keys

  //Features related keys
  list: {
    create: true, // allow to create new items
    perPage: {
      options: [9, 12, 16],
      default: 9,
    },
    filters: {
      year: {
        type: "Select",
        rules: {},
        label: "year",
        items: [],
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
        value: ["article_title", 1],
      },
      namedesc: {
        // by name from z to a
        icon: "sort-alphabetical-descending",
        text: "by-name-from-z-to-a",
        value: ["article_title", -1],
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
    views: {
      rows: {
        icon: "view-list",
        default: true,
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
    firstname: {
      label: "firstname",
      component: "TextField",
      type: 0, // 0 = primitive, 1 = object, 2 = array, 3 = template
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, // if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "firstname", // item type on schema.org
    },
    lastname: {
      label: "lastname",
      component: "TextField",
      type: 0, // 0 = primitive, 1 = object, 2 = array, 3 = template
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, // if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "lastname", // item type on schema.org
    },
    consent: {
      label: "consent",
      component: "SimpleObjectWrapper",
      type: 3, // 0 = primitive, 1 = object, 2 = array, 3 = template
      default: "",
      description: "",
      hint: false,
      rules: {
        required: true,
        min: 5,
        max: 200,
      },
      visibility: {
        default: true, // same as hidden = true
        switchIf: [], // array of conditions to switch the visibility, each condition will be assessed as a boolean
        disjonctive: false, // if true, show only if one of the if is true, if false, show only if all of the if are true
      },
      meta: "consent", // item type on schema.org
    },
  },
};

export default defaultConfig;
