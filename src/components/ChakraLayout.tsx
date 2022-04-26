import { ChakraHero } from "@/features/home/components"
import { Container } from "@chakra-ui/react"
import { Fragment } from "react"
import { Outlet } from "react-router-dom"
import { ChakraNavbar } from "./ChakraNavbar"

export const ChakraLayout = () => {
  return (
    <Fragment>
      <ChakraNavbar />
      <div
        style={{
          height: 72,
        }}
      />
      <Container
        maxW="container.lg"
        minH={"calc(100vh - 72px)"}
      >
        <Outlet />
      </Container>
    </Fragment>
  )
}
