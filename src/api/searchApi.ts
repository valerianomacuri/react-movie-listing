import axios from "axios"

export const searchApi = axios.create({
  baseURL: "https://api.themoviedb.org/3/search/",
  params: {
    api_key: "4fcfcc3445a2a119a770be2ccf520fc0",
    language: "es-ES",
  },
})

export default searchApi
