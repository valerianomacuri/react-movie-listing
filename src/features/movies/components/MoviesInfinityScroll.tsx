import {
  ChakraMovieItem,
  ChakraMovieList,
  ChakraMovieSkeletonItem,
} from "@/components"
import * as Utils from "@/utils"
import { Box, Button, Text } from "@chakra-ui/react"
import { Fragment } from "react"
import { useInfinityMovies } from "../hooks"

export const MoviesInfinityScroll = () => {
  const {
    movies,
    isLoading,
    isFetchingNextPage,
    isSuccess,
    isError,
    fetchNextPage,
    hasNextPage,
  } = useInfinityMovies()

  if (isError) return <Text>Hubo un Error</Text>
  return (
    <Fragment>
      <ChakraMovieList isLoading={isLoading}>
        {isSuccess &&
          movies?.pages.map(data => {
            return data.results.map(movie => (
              <ChakraMovieItem
                to={`/movie/${movie.id}`}
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
