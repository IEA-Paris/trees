export type fellowshipDetails = {
  type: string //en groupe, durée courte ou longue, etc.
  fundingPeriod: string // Dates et détails temporels
  profile: string // profile, CV, disciplines, expérience, origine
  tasks: string // obligations type conférences, publications, attendance -seminaire, bureau
  location: string // texte court sur l’emplacement IEA avec lien vers page dédiée
  funding: string // texte sur la bourse, minimal
  housing: string // texte court sur logement avec lien page dédiée CIUP
  meals: string // texte court repas, forfait, annulations…
  applicationMaterials: string // liste des éléments à fournir
  selectionProcess: string // Dates, arbitrages, etc.
  researchSupport: string // cf les moyens de la recherche
}
