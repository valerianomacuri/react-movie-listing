import { Box, Skeleton } from "@chakra-ui/react"

export const ChakraMovieSkeletonItem = () => {
  return (
    <Box
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
      ></Box>
      <Box
        as={Skeleton}
        objectFit={"cover"}
        borderRadius={"8px"}
        bg={"gray.600"}
        style={{
          aspectRatio: "2 / 3",
        }}
      />
      <Box
        paddingTop="8px"
        display={"flex"}
        flexDirection="column"
        justifyContent={"space-between"}
      >
        <Box
          as={Skeleton}
          borderRadius={"5px"}
          margin="8px"
          width={"70%"}
          height="16px"
          bg={"gray.600"}
        ></Box>
        <Box display={"flex"} flexDirection="row">
          <Box
            as={Skeleton}
            width={"16px"}
            height="16px"
            borderRadius={"50%"}
            bg={"gray.600"}
            margin="8px"
          ></Box>
          <Box
            as={Skeleton}
            borderRadius={"5px"}
            margin="8px"
            width={"70%"}
            height="16px"
            bg={"gray.600"}
          ></Box>
        </Box>
      </Box>
    </Box>
  )
}
