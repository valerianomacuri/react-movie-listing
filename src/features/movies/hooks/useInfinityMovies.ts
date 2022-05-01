import { getMoviesNowPlaying } from "@/api/moviesApi"
import { useInfiniteQuery } from "react-query"
import { MovieDBNowPlaying } from "../interfaces"

export const useInfinityMovies = () => {
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

  return {
    movies,
    isLoading,
    isFetchingNextPage,
    isSuccess,
    isError,
    fetchNextPage,
    hasNextPage,
  }
}
