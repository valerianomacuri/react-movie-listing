import { Box, Progress } from "@chakra-ui/react"

export const Fallback = () => {
  return (
    <Box height={"100vh"} width="100vw">
      <Progress size="xs" isIndeterminate />
    </Box>
  )
}
