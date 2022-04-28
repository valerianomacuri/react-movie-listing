import { Box } from "@chakra-ui/react"
import { FiStar } from "react-icons/fi"

export const MovieRating = ({
  rating,
}: {
  rating?: string | number
}) => {
  return (
    <Box
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
  )
}
