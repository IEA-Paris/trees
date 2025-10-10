import Model from "../model";
import configPeople, { People } from "./people";

export interface Fellows extends People {
  vintage: number[];
}

const defaultConfig: Model = {
  aliases: ["people"],
  ...configPeople,
};
export default defaultConfig;
