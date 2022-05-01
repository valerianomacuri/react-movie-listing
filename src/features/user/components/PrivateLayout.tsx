import { Container } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import { Navbar } from "./Navbar"

export const PrivateLayout = () => {
  return (
    <div>
      <Navbar />
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
