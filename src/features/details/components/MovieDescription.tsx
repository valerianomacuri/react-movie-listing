import { SimpleGrid } from "@chakra-ui/react"
import {
  AspectRatio,
  Box,
  Container,
  Image,
} from "@chakra-ui/react"

export const MovieDescription = () => {
  return (
    <SimpleGrid
      display={"flex"}
      paddingTop={"158px"}
      maxW="container.lg"
      height={"100%"}
    >
      <AspectRatio w="480px" maxW={"480px"} ratio={2 / 3}>
        <Image
          src={`./assets/images/movie-placeholder.svg`}
          alt="naruto"
          objectFit="cover"
        />
      </AspectRatio>

      <Box></Box>
    </SimpleGrid>
  )
}
