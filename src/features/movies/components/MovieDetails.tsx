import { Progress } from "@chakra-ui/react"

import { useParams } from "react-router-dom"
import Details from "@/features/details/Details"
import { useMovieDetails } from "../hooks"
import { NotFound } from "@/features/errors/components"

const MovieDetails = () => {
  const { id } = useParams()
  const {
    videos: { videos, isVideoLoading },
    details: { isLoading, data, isFetching, isError },
  } = useMovieDetails(id as string)

  if (isError) return <NotFound />
  if (isLoading || isFetching)
    return (
      <Progress
        size="sm"
        isIndeterminate
        width="100%"
        position={"fixed"}
        top="72px"
        left={"0"}
        color="purple"
      />
    )

  return (
    <Details
      hasVideo={
        isVideoLoading
          ? false
          : !!(videos?.data.results.length !== 0)
      }
      backdrop_path={data?.data.backdrop_path}
      poster_path={data?.data.poster_path}
      video_key={
        videos?.data.results[0]
          ? videos?.data.results[0].key
          : ""
      }
      title={data?.data.title}
      overview={data?.data.overview}
      vote_average={data?.data.vote_average}
      release_date={data?.data.release_date}
      genres={data?.data.genres}
      runtime={data?.data.runtime}
    />
  )
}

export default MovieDetails
