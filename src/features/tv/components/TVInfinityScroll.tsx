import { getTvPopular } from "@/api/tvApi"
import {
  ChakraMovieItem,
  ChakraMovieList,
  ChakraMovieSkeletonItem,
} from "@/components"
import * as Utils from "@/utils"
import { Box, Text } from "@chakra-ui/react"
import { Fragment, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { useInfiniteQuery } from "react-query"
import { MovieDBTVPopular } from "../interfaces"

export const TVInfinityScroll = () => {
  const { ref: loadMoreRef, inView } = useInView()
  const {
    data: tv,
    isLoading,
    isFetchingNextPage,
    isSuccess,
    isError,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery<MovieDBTVPopular>(
    "popular",
    ({ pageParam = 1 }) => getTvPopular(pageParam),
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
  useEffect(() => {
    if (inView && !isFetchingNextPage && hasNextPage) {
      fetchNextPage()
    }
  }, [inView])

  if (isError) return <Text>Hubo un Error</Text>
  return (
    <Fragment>
      <ChakraMovieList isLoading={isLoading}>
        {isSuccess &&
          tv?.pages.map(data => {
            return data.results.map(tv => (
              <ChakraMovieItem
                to={`/movie/${tv.id}`}
                id={tv.id}
                key={tv.id}
                title={Utils.shortTitle(tv.name)}
                rating={tv.vote_average}
                source={tv.poster_path}
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
      <div ref={loadMoreRef}></div>
      <Box paddingBottom={"156px"} />
    </Fragment>
  )
}
