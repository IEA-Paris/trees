export type location = {
  name: string
  details: string // natural language description of the location
  alt: string
  street: string
  city: string
  country: string
  zip: string
  geocode: {
    lat: number
    lng: number
  }
}
