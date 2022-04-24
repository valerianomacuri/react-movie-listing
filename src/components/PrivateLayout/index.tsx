import styled, { css, useTheme } from "styled-components"
import { Navbar } from "../Navbar"
import { Link, useNavigate } from "react-router-dom"
import { Typography } from "../Typography"
import {
  logout,
  useAuth,
} from "../../features/auth/authSlice"
import { useAppDispatch } from "../../app/hooks"

const styles = css`
  display: flex;
  gap: 48px;
  ${Typography} {
    cursor: pointer;
  }
`

export const NavLinks = styled(({ ...rest }) => {
  const theme = useTheme()
  const dispatch = useAppDispatch()
  return (
    <div {...rest}>
      <Typography
        as="span"
        variant="link1"
        color={theme.colors.grey[200]}
        onClick={() => {
          dispatch(logout())
        }}
      >
        Log out
      </Typography>
    </div>
  )
})`
  ${styles}
`

export const PrivateLayout = styled(({ ...rest }) => {
  return (
    <div {...rest}>
      <Navbar>
        <NavLinks />
      </Navbar>
    </div>
  )
})`
  ${({ theme }) => css`
    box-sizing: border-box;
    border: none;
    margin: 0;
    outline: none;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;
    padding: 0 120px;
    padding-top: 80px;
  `}
`
