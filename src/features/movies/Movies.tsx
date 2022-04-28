import { Fragment, useState } from "react"
import { useQuery } from "react-query"
import { ChakraHero } from "./components"
import { MovieDBSearchedMovies } from "./interfaces/movies"
import searchApi from "@/api/searchApi"
import { useDebounce } from "@/hooks"
import { shortTitle } from "@/utils"
import {
  ChakraMovieList,
  ChakraMovieItem,
} from "@/components"
import { MoviesInfinityScroll } from "./components"

const Movies = () => {
  const [searchValue, setSearchValue] = useState("")
  const debouncedValue = useDebounce(searchValue, 500)
  const {
    data: searchedMovies,
    isFetching: isSearchedFetching,
  } = useQuery(
    // identificadores unicos, debouncedValue permite el refetch
    ["searched_movies", debouncedValue],
    () =>
      searchApi.get<MovieDBSearchedMovies>("movie", {
        params: {
          query: debouncedValue,
        },
      }),
    {
      // deshabilitar la consulta cuando no hay texto
      enabled: Boolean(debouncedValue.trim()),
    },
  )

  return (
    <Fragment>
      <ChakraHero
        onSearch={setSearchValue}
        value={searchValue}
      />
      {Boolean(debouncedValue.trim()) ? (
        <ChakraMovieList isLoading={isSearchedFetching}>
          {searchedMovies?.data.results.map(movie => (
            <ChakraMovieItem
              id={movie.id}
              key={movie.id}
              title={shortTitle(movie.title)}
              rating={movie.vote_average}
              source={movie.poster_path}
            />
          ))}
        </ChakraMovieList>
      ) : (
        <MoviesInfinityScroll />
      )}
    </Fragment>
  )
}

export default Movies
