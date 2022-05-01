import {
  AspectRatio,
  Box,
  Image,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react"
import { FC, Fragment } from "react"

import { IMAGE_URL } from "@/services"
import { MovieVideos } from "./components/MovieVideos"
import { MoviePoster } from "./components/MoviePoster"
import { MovieBlurredCard } from "./components/MovieBlurredCard"
import { MovieRating } from "@/components"

interface Genre {
  id: number | string
  name: string
}

interface DetailsProps {
  backdrop_path?: string
  title?: string
  hasVideo: boolean
  poster_path?: string
  vote_average?: number
  overview?: string
  video_key?: string
  genres?: Genre[]
  release_date?: string
  runtime?: string | number
}

const Details: FC<DetailsProps> = ({
  backdrop_path,
  title,
  hasVideo,
  poster_path,
  vote_average,
  overview,
  video_key,
  genres,
  release_date,
  runtime,
}) => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  return (
    <Fragment>
      <Box paddingTop={"45px"} minHeight="calc(100% -72px)">
        <Box position={"relative"}>
          <MoviePoster backdrop_path={backdrop_path} />
          <MovieBlurredCard
            onPlay={onOpen}
            title={title}
            isDisabled={!hasVideo}
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
                poster_path
                  ? IMAGE_URL + poster_path
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
              {title}
            </Text>
            <Text color={"gray.600"} fontWeight="normal">
              {overview}
            </Text>
            <MovieRating rating={vote_average} />
            <Box
              display={"flex"}
              flexDirection="column"
              gap="24px"
            >
              <Box
                display={"flex"}
                flexDirection="column"
                gap="8px"
              >
                <Text fontSize={"sm"} color="#767E94">
                  Type
                </Text>
                <Text>Movie</Text>
              </Box>
              <Box
                display={"flex"}
                flexDirection="column"
                gap="8px"
              >
                <Text fontSize={"sm"} color="#767E94">
                  Release Date:
                </Text>
                <Text>{release_date}</Text>
              </Box>
              <Box
                display={"flex"}
                flexDirection="column"
                gap="8px"
              >
                <Text fontSize={"sm"} color="#767E94">
                  Runtime
                </Text>
                <Text>{runtime} min</Text>
              </Box>
              <Box
                display={"flex"}
                flexDirection="column"
                gap="8px"
              >
                <Text fontSize={"sm"} color="#767E94">
                  Genres
                </Text>
                <Text>
                  {genres?.map(genre => (
                    <Text as="span" key={genre.id}>
                      {genre.name},{" "}
                    </Text>
                  ))}
                </Text>
              </Box>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
      <MovieVideos
        title={title as string}
        isOpen={isOpen}
        onClose={onClose}
      >
        {hasVideo && (
          <AspectRatio maxW="716px" ratio={716 / 403}>
            <iframe
              title={title}
              src={`https://www.youtube.com/embed/${video_key}`}
              allowFullScreen
            />
          </AspectRatio>
        )}
      </MovieVideos>
    </Fragment>
  )
}

export default Details
