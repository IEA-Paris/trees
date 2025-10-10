import Model from "../model"
import configImage, { Image } from "./image"

export interface Gallery extends Image {}

const defaultConfig: Model = {
  aliases: ["image"],
  ...configImage,
}

export default defaultConfig
