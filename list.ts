export interface List {
  create: boolean // allow to create new items
  perPage: {
    options: number[]
    default: number
  }
  filters: {
    year: {
      type: string
      rules: object
      label: string
      items: object[]
    }
  }
  sort: {
    // sort options
    [key: string]: {
      // e.f. by name from a to z
      icon: string
      text: string
      value: [string, number]
    }
  }
  views: {
    [key: string]: {
      icon: string
      default: boolean
    }
  }
}
