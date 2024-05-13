import config, { Affiliation } from "./affiliation";
import Model from "./model";

export interface Partner extends Affiliation {}
const defaultConfig: Model = {
  aliases: ["Affiliation"],
  ...config,
};
export default defaultConfig;
