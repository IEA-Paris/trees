import configPeople, { People } from "./people";
import Model from "../model";

export interface Discussants extends People {}
const defaultConfig: Model = {
  aliases: ["people"],
  ...configPeople,
};
export default defaultConfig;
