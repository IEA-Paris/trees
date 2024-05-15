import Model from "./model";
import configPeople, { People } from "./people";

export interface Fellow extends People {
  vintage: number[];
}

const defaultConfig: Model = {
  ...configPeople,
};
export default defaultConfig;
