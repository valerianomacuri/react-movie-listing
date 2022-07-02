import tvApi from "@/api/tvApi"
import { useQueries } from "react-query"
import { TVDetails, TVVideos } from "../interfaces"

export const useTVDetails = (id: string) => {
  const results = useQueries([
    {
      queryKey: "videos",
      queryFn: () =>
        tvApi.get<TVVideos>(`${id}/videos`),
    },
    {
      queryKey: "details",
      queryFn: () => tvApi.get<TVDetails>(`${id}`),
      staleTime: 0,
    },
  ])
  const { data: videos, isLoading: isVideoLoading } =
    results[0] //videos

  const { isLoading, data, isFetching, isError } =
    results[1] //details
  console.log(results)
  console.log({data, videos})
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
