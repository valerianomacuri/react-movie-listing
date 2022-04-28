import { Container } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import { ChakraNavbar } from "./ChakraNavbar"

export const ChakraLayout = () => {
  return (
    <div style={{}}>
      <ChakraNavbar />
      <div
        style={{
          height: 72,
          background: "transparent",
        }}
      />
      <Container
        maxW="container.xl"
        minH={"calc(100vh - 72px)"}
      >
        <Outlet />
      </Container>
    </div>
  )
}
