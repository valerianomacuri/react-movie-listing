import { MovieDBTVPopular } from "@/features/tv/interfaces"
import axios from "axios"

export const tvApi = axios.create({
  baseURL: "https://api.themoviedb.org/3/tv/",
  params: {
    api_key: "4fcfcc3445a2a119a770be2ccf520fc0",
    language: "es-ES",
  },
})

export const getTvPopular = (page: number) =>
  tvApi
    .get<MovieDBTVPopular>("popular", {
      params: {
        page,
      },
    })
    .then(resp => resp.data)

export default tvApi
