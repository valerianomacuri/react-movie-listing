import { POSTER_URL } from "@/services"
import { AspectRatio, Box } from "@chakra-ui/react"

export const MoviePoster = ({
  backdrop_path,
}: {
  backdrop_path?: string | null
}) => {
  return (
    <AspectRatio maxW="100%" ratio={8 / 3}>
      <Box
        background={`linear-gradient(180deg, rgba(54, 44, 146, 0.4) 0%, rgba(18, 98, 151, 0.4) 100%), url(${
          backdrop_path
            ? POSTER_URL + backdrop_path
            : "./assets/images/movie-placeholder.svg"
        })`}
        objectFit="cover"
        backgroundSize={"cover"}
        backgroundPosition="center"
        borderRadius={{
          base: "10px",
          sm: "20px",
          md: "40px",
        }}
      />
    </AspectRatio>
  )
}
