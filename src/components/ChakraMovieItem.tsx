import { IMAGE_URL } from "@/services"
import { VStack, Image, Text, Box } from "@chakra-ui/react"
import { FC } from "react"
import { FiStar } from "react-icons/fi"
import { Link } from "react-router-dom"

type MovieItemProps = {
  title?: string
  rating?: number
  source?: string | null
  children?: React.ReactNode
  id: number
}
export const ChakraMovieItem: FC<MovieItemProps> = ({
  title,
  rating,
  source,
  id,
}) => {
  return (
    <Box
      as={Link}
      to={`/movie/${id}`}
      display={"flex"}
      flexDirection={"column"}
      borderRadius={"12px"}
      position="relative"
      bg={"gray.700"}
      padding={2}
    >
      <Box
        position={"absolute"}
        top="18px"
        left={"16px"}
        background={"rgba(0, 0, 0, 0.65)"}
        padding={"4px 8px"}
        height="40px"
        width="60px"
        display={"flex"}
        color="#ffad49"
        borderRadius={"8px"}
        gap="4px"
        flexDirection={"row"}
        alignItems="center"
      >
        <FiStar color="#ffad49" />
        {rating}
      </Box>
      <Image
        objectFit={"cover"}
        borderRadius={"8px"}
        src={
          source === null || source === "null"
            ? "./assets/images/movie-placeholder.svg"
            : IMAGE_URL + source
        }
        style={{
          aspectRatio: "2 / 3",
        }}
      />
      <Box paddingTop="8px">
        <Text
          as="h3"
          fontSize={"lg"}
          color={"gray.50"}
          padding="8px"
        >
          {title}
        </Text>
      </Box>
    </Box>
  )
}
