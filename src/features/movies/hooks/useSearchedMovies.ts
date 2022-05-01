import searchApi from "@/api/searchApi"
import { useQuery } from "react-query"
import { MovieDBSearchedMovies } from "../interfaces"

export const useSearchedMovies = (
  valueToSearch: string,
) => {
  const {
    data: searchedMovies,
    isFetching: isSearchedFetching,
  } = useQuery(
    ["searched_movies", valueToSearch],
    () =>
      searchApi.get<MovieDBSearchedMovies>("movie", {
        params: {
          query: valueToSearch,
        },
      }),
    {
      // deshabilitar la consulta cuando no hay texto
      enabled: Boolean(valueToSearch.trim()),
    },
  )
  return {
    searchedMovies,
    isSearchedFetching,
  }
}
