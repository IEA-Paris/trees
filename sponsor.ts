import configPeople, { People } from "./people";
import configAffiliation, { Affiliation } from "./affiliation";
import Model from "./model";

export interface Sponsor extends People, Affiliation {}
const defaultConfig: Model = {
  aliases: ["People", "Affiliation"],
  ...configPeople,
  ...configAffiliation,
};
export default defaultConfig;
