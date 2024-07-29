export interface CountryLevelInterface {
  id: string
  country: {
    name: string
    code: string
  }
  name: string
  code: string
  max_level: number
  level: string[]
}
