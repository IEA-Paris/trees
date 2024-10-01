import Model from "./model";
import configPeople, { People } from "./people";

export interface Fellow extends People {
  vintage: number[];
}

const defaultConfig: Model = {
  aliases: ["people"],
  ...configPeople,
};
export default defaultConfig;
