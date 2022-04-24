import axios from "axios"
import { MovieDBNowPlaying } from "../features/movies/interfaces/movies"

export const moviesApi = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/",
  params: {
    api_key: "4fcfcc3445a2a119a770be2ccf520fc0",
    language: "es-ES",
  },
})

export const getMoviesNowPlaying = (page: number) =>
  moviesApi
    .get<MovieDBNowPlaying>("now_playing", {
      params: {
        page,
      },
    })
    .then(resp => resp.data)

export default moviesApi
