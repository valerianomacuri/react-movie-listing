import { getMoviesNowPlaying } from "@/api/moviesApi"
import {
  ChakraMovieItem,
  ChakraMovieList,
  ChakraMovieSkeletonItem,
} from "@/components"
import * as Utils from "@/utils"
import { Box, Button, Text } from "@chakra-ui/react"
import { Fragment, useEffect } from "react"
import { useInfiniteQuery } from "react-query"
import { MovieDBNowPlaying } from "../interfaces/movies"

export const MoviesInfinityScroll = () => {
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
  useEffect(() => {}, [])
  if (isError) return <Text>Hubo un Error</Text>
  return (
    <Fragment>
      <ChakraMovieList isLoading={isLoading}>
        {isSuccess &&
          movies?.pages.map(data => {
            return data.results.map(movie => (
              <ChakraMovieItem
                id={movie.id}
                key={movie.id}
                title={Utils.shortTitle(movie.title)}
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
      </ChakraMovieList>
      <Box
        paddingBottom={"156px"}
        paddingTop="40px"
        w="100%"
        display="flex"
        justifyContent={"center"}
      >
        <Button
          onClick={() => {
            if (!isFetchingNextPage && hasNextPage) {
              fetchNextPage()
            }
          }}
          color="gray.50"
        >
          Load more
        </Button>
      </Box>
    </Fragment>
  )
}
