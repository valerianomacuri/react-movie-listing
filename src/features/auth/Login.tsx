import { Fragment } from "react"
import styled, { css } from "styled-components"
import { LoginForm } from "./components/LoginForm"

const Image = styled.img``

const styles = css`
  display: flex;
  justify-content: space-between;
  gap: 126px;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  height: calc(100vh - 80px);
  ${Image} {
    height: 100%;
  }
`

const Login = styled(({ ...rest }) => {
  return (
    <Fragment>
      <div {...rest}>
        <Image src="./assets/images/cartoon.png" />
        <LoginForm />
      </div>
    </Fragment>
  )
})`
  ${styles}
`

export default Login
