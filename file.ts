export interface File {
  name: string
  url: string
  size: number
  type: string
  hash: string
  path: string
  file: string
  image: string
  thumb: string
  createdAt: string
  updatedAt: string
  id: string
}
// Compare this snippet from data/affiliation.ts:
// import { image } from "./image"
// import { address } from "./address"
//
// export type affiliation = {
//   name: string
// list + form
