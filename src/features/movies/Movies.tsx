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
import { useSearchParams } from "react-router-dom"

const Movies = () => {
  const [searchParams] = useSearchParams();
  const { searchedMovies, isSearchedFetching } = useSearchedMovies(searchParams.get("req") || "")
  return (
    <Fragment>
      <ChakraHero />
      {typeof searchParams.get("req") !== "string" || searchParams.get("req") === ""
        ? <MoviesInfinityScroll />
        : <ChakraMovieList isLoading={isSearchedFetching}>
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
        </ChakraMovieList>}
    </Fragment>
  )
}

export default Movies
