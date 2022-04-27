import { Box, Image, SimpleGrid } from "@chakra-ui/react"
import { Fragment } from "react"
import { LoginForm } from "./components/LoginForm"

const Login = () => {
  return (
    <Fragment>
      <SimpleGrid
        columns={{
          base: 1,
          sm: 1,
          md: 2,
        }}
        justifyContent="center"
        alignItems={"center"}
        minHeight="calc(100vh - 72px)"
        padding={{
          base: "40px 0",
          sm: "40px 0",
          md: "0",
        }}
      >
        <Box
          height="100%"
          display={"flex"}
          alignItems="center"
        >
          <Image
            src="./assets/images/cartoon.png"
            objectFit={"cover"}
            paddingRight={"120px"}
            margin={"auto"}
          />
        </Box>
        <Box>
          <LoginForm />
        </Box>
      </SimpleGrid>
      {/* </Box> */}
    </Fragment>
  )
}

export default Login
