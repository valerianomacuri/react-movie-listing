import { Fragment, useState } from "react"
import {
  ChakraMovieList,
  ChakraMovieItem,
} from "@/components"
import {
  ChakraHero,
  MoviesInfinityScroll,
} from "./components"
import { useDebounce } from "@/hooks"
import { shortTitle } from "@/utils"
import { useSearchedMovies } from "./hooks"

const Movies = () => {
  const [searchValue, setSearchValue] = useState("")
  const debouncedValue = useDebounce(searchValue, 500)
  const { isSearchedFetching, searchedMovies } =
    useSearchedMovies(debouncedValue)

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
              to={`/movie/${movie.id}`}
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
