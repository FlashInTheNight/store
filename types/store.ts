interface Datasource {
  sourcename: string
  attribution: string
  license: string
  url: string
}

interface Timezone {
  name: string
  offset_STD: string
  offset_STD_seconds: number
  offset_DST: string
  offset_DST_seconds: number
  abbreviation_STD: string
  abbreviation_DST: string
}

interface Rank {
  importance: number
  popularity: number
}

interface Properties {
  datasource: Datasource
  name: string
  country: string
  country_code: string
  state: string
  city: string
  postcode: string
  district: string
  suburb: string
  street: string
  housenumber: string
  lon: number
  lat: number
  distance: number
  result_type: string
  formatted: string
  address_line1: string
  address_line2: string
  category: string
  timezone: Timezone
  plus_code: string
  rank: Rank
  place_id: string
}

interface Geometry {
  type: string
  coordinates: number[]
}

interface Feature {
  type: string
  properties: Properties
  geometry: Geometry
  bbox: number[]
}

interface Query {
  lat: number
  lon: number
  plus_code: string
}

export interface IGeolocationResponse {
  type: string
  features: Feature[]
  query: Query
}


export interface IGeolocationArgs {
  latitude: number
  longitude: number
}
