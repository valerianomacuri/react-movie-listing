import moviesApi from "@/api/moviesApi"
import {
  MovieDBDetails,
  MovieDBVideos,
} from "@/features/details/interfaces"
import { useQueries } from "react-query"

export const useMovieDetails = (id: string) => {
  const results = useQueries([
    {
      queryKey: "videos",
      queryFn: () =>
        moviesApi.get<MovieDBVideos>(`${id}/videos`),
    },
    {
      queryKey: "details",
      queryFn: () => moviesApi.get<MovieDBDetails>(`${id}`),
      staleTime: 0,
    },
  ])
  const { data: videos, isLoading: isVideoLoading } =
    results[0] //videos

  const { isLoading, data, isFetching, isError } =
    results[1] //details
  console.log(results)
  return {
    videos: {
      videos,
      isVideoLoading,
    },
    details: {
      isLoading,
      data,
      isFetching,
      isError,
    },
  }
}
