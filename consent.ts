export type consent = {
  //data consent (display info about me)
  data: boolean
  // record consent (record my activity, droit à l'image)
  record: boolean
  // broadcast consent (broadcast my activity, diffusion de contenus)
  diffusion: boolean
  // publication consent (publish my content, generate DOIs)
  publication: boolean
  // email communications (including newsletter)
  email: boolean
  // IEA newsletter
  newsletter: boolean
}
