import config, { Affiliation } from "./affiliation";
import Model from "./model";

export interface Member extends Affiliation {}

const defaultConfig: Model = {
  aliases: ["Affiliation"],
  ...config,
};

export default defaultConfig;
