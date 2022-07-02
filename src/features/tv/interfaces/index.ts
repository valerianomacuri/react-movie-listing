export * from "./TVDetails"
export * from "./TVVideos"

export interface MovieDBTVPopular {
  page: number
  results: TV[]
  total_pages: number
  total_results: number
}

export interface TV {
  backdrop_path: string
  first_air_date: string
  genre_ids: number[]
  id: number
  name: string
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  vote_average: number
  vote_count: number
}
