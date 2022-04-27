import { Fragment, useEffect, useState } from "react"
import { useInfiniteQuery, useQuery } from "react-query"
import moviesApi, {
  getMoviesNowPlaying,
} from "@/api/moviesApi"
import { ChakraHero } from "./components"
import {
  MovieDBNowPlaying,
  MovieDBSearchedMovies,
} from "./interfaces/movies"
import { useInView } from "react-intersection-observer"
import searchApi from "@/api/searchApi"
import { useDebounce } from "@/hooks"
import { shortTitle } from "@/utils"
import {
  ChakraMovieSkeletonItem,
  ChakraMovieList,
  ChakraMovieItem,
} from "@/components"

const Movies = () => {
  const { ref: loadMoreRef, inView } = useInView()
  const {
    data: movies,
    isLoading,
    isFetchingNextPage,
    isSuccess,
    isError,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery<MovieDBNowPlaying>(
    "now_playing",
    ({ pageParam = 1 }) => getMoviesNowPlaying(pageParam),
    {
      getNextPageParam: (pageParam, pages) => {
        if (pageParam.total_pages > pageParam.page) {
          return pageParam.page + 1
        }
        alert("No hay más paginas")
      },
      // tiempo en cache de 5 minutos
      staleTime: 60000 * 5,
    },
  )
  //* ==============================================

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

  useEffect(() => {
    if (inView && !isFetchingNextPage && hasNextPage) {
      fetchNextPage()
    }
  }, [inView])

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
        <ChakraMovieList isLoading={isLoading}>
          {movies?.pages.map(data => {
            return data.results.map(movie => (
              <ChakraMovieItem
                id={movie.id}
                key={movie.id}
                title={shortTitle(movie.title)}
                rating={movie.vote_average}
                source={movie.poster_path}
              />
            ))
          })}
          {isFetchingNextPage ? (
            <Fragment>
              <ChakraMovieSkeletonItem />
              <ChakraMovieSkeletonItem />
              <ChakraMovieSkeletonItem />
              <ChakraMovieSkeletonItem />
            </Fragment>
          ) : null}
          <div ref={loadMoreRef}></div>
        </ChakraMovieList>
      )}
    </Fragment>
  )
}

export default Movies
