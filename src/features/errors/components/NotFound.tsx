import { Box, Text } from "@chakra-ui/react"

export const NotFound = () => {
  return (
    <Box
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
      flexDirection="column"
      gap="16px"
      paddingTop={"80px"}
      maxW="640px"
      margin={"auto"}
    >
      <Text
        as="h1"
        fontSize="5xl"
        fontWeight={"bold"}
        textAlign="center"
      >
        Sorry, No results found
      </Text>
      <Text color={"#767E94"} textAlign="center">
        There are no movies or TV shows matching your search
        terms. You can suggest me manually
      </Text>
    </Box>
  )
}
