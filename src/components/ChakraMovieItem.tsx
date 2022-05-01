import { IMAGE_URL } from "@/services"
import { Image, Text, Box } from "@chakra-ui/react"
import { FC, memo } from "react"
import { FiStar } from "react-icons/fi"
import { Link, To } from "react-router-dom"

type MovieItemProps = {
  title?: string
  rating?: number
  source?: string | null
  children?: React.ReactNode
  id: number
  to: To
}

export const ChakraMovieItem: FC<MovieItemProps> = memo(
  ({ title, rating, source, id, to }) => {
    return (
      <Box
        as={Link}
        to={to}
        display={"flex"}
        flexDirection={"column"}
        borderRadius={"12px"}
        position="relative"
        bg={"rgba(32, 40, 62, 0.8)"}
        padding={2}
        style={{
          backdropFilter: "blur(80px)",
        }}
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
  },
)
