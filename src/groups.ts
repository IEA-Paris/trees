import { Form } from "./form";
import { Vintage } from "./vintage";
import { formType } from "./form";

export interface Groups {
  team?: boolean;
  sab?: boolean;
  board?: boolean;
  fellows?: boolean;
  sponsor?: boolean;
  vintage?: Vintage[];
}

export interface GroupsForm {
  form: Record<string, Form>;
}

const defaultConfig: GroupsForm = {
  form: {
    team: {
      label: "team",
      component: "Checkbox",
      type: formType.Primitive,
      meta: "team",
    },
    sab: {
      label: "sab",
      component: "Checkbox",
      type: formType.Primitive,
      meta: "sab",
    },
    board: {
      label: "board",
      component: "Checkbox",
      type: formType.Primitive,
      meta: "board",
    },
    fellows: {
      label: "fellows",
      component: "Checkbox",
      type: formType.Primitive,
      meta: "fellow",
    },
    sponsor: {
      label: "sponsor",
      component: "Checkbox",
      type: formType.Primitive,
      meta: "sponsor",
    },
    vintage: {
      label: "vintage",
      component: "CollectionContainerPanel",
      type: formType.Template,
      meta: "vintage",
    },
  },
};

export default defaultConfig;
