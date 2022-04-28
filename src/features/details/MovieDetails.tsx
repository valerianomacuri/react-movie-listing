import moviesApi from "@/api/moviesApi"
import {
  AspectRatio,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Container,
  IconButton,
  Image,
  Progress,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react"
import { Fragment } from "react"
import { useQueries } from "react-query"
import { MovieDBVideos } from "./interfaces/movieVideos"
import { MovieDBDetails } from "./interfaces/movieDetails"
import {
  Navigate,
  useParams,
  useNavigate,
} from "react-router-dom"
import { IMAGE_URL, POSTER_URL } from "@/services"
import { MovieVideos } from "./components/MovieVideos"
import { MovieDescription } from "./components/MovieDescription"
import { MoviePoster } from "./components/MoviePoster"
import { MovieBlurredCard } from "./components/MovieBlurredCard"
import { MovieRating } from "@/components"

const MovieDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
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
  const {
    isError: isVideoError,
    isLoading: isVideoLoading,
    isFetching: isVideoFetching,
    data: videos,
  } = results[0] //videos
  const {
    isError,
    isLoading,
    isSuccess,
    data,
    isFetching,
  } = results[1] //details

  const { isOpen, onClose, onOpen } = useDisclosure()
  return (
    <Fragment>
      {isLoading || isFetching ? (
        <Progress
          size="sm"
          isIndeterminate
          width="100%"
          position={"fixed"}
          top="72px"
          left={"0"}
          color="purple"
        />
      ) : (
        <Box
          paddingTop={"45px"}
          minHeight="calc(100% -72px)"
        >
          <Box position={"relative"}>
            <MoviePoster
              backdrop_path={data?.data.backdrop_path}
            />
            <MovieBlurredCard
              onPlay={onOpen}
              title={data?.data.title}
              isDisabled={
                !(
                  videos && videos.data.results.length !== 0
                ) || isVideoError
              }
              isLoading={isVideoLoading || isVideoFetching}
            />
          </Box>
          <SimpleGrid
            margin={"auto"}
            paddingTop={"158px"}
            paddingBottom={"160px"}
            maxW="container.lg"
            height={"100%"}
            columns={{
              base: 1,
              sm: 1,
              md: 2,
            }}
            spacing={"80px"}
          >
            <AspectRatio w="100%" ratio={2 / 3}>
              <Image
                src={
                  data?.data.poster_path
                    ? IMAGE_URL + data.data.poster_path
                    : `./assets/images/movie-placeholder.svg`
                }
                alt="naruto"
                objectFit="cover"
                borderRadius={"24px"}
              />
            </AspectRatio>
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={"24px"}
            >
              <Text
                color="gray.50"
                fontWeight={"bold"}
                fontSize="2xl"
              >
                {data?.data.title}
              </Text>
              <Text color={"gray.600"} fontWeight="normal">
                {data?.data.overview}
              </Text>
              <MovieRating
                rating={data?.data.vote_average}
              />
            </Box>
          </SimpleGrid>
        </Box>
      )}
      <MovieVideos
        title={data?.data.title as string}
        isOpen={isOpen}
        onClose={onClose}
      >
        {videos && videos.data.results.length !== 0 && (
          <AspectRatio maxW="716px" ratio={716 / 403}>
            <iframe
              title={data?.data.title as string}
              src={`https://www.youtube.com/embed/${videos.data.results[0].key}`}
              allowFullScreen
            />
          </AspectRatio>
        )}
      </MovieVideos>
    </Fragment>
  )
}

export default MovieDetails
