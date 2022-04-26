import { Box, Image } from "@chakra-ui/react"
import { Fragment } from "react"
import styled, { css } from "styled-components"
import { LoginForm } from "./components/LoginForm"

// const styles = css`
//   display: flex;
//   justify-content: space-between;
//   gap: 126px;
//   align-items: center;
//   padding-top: 40px;
//   padding-bottom: 40px;
//   height: calc(100vh - 80px);
//   ${Image} {
//     height: 100%;
//   }
// `

const Login = () => {
  return (
    <Fragment>
      <Box
        display={"flex"}
        flexDirection={{
          base: "column",
          md: "row",
        }}
        justifyContent="center"
        alignItems={"center"}
        paddingTop={10}
        minHeight="calc(100vh - 72px)"
        paddingBottom={{
          base: "40px",
          md: 0,
        }}
      >
        <Box
          margin={{
            base: "0 30px",
            sm: "0 90px",
            md: "0 100px 0 70px",
          }}
        >
          <Image
            src="./assets/images/cartoon.png"
            objectFit={"cover"}
          />
        </Box>

        <LoginForm />
      </Box>
    </Fragment>
  )
}

export default Login
