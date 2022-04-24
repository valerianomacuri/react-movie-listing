import { Outlet } from "react-router-dom"
import styled, { css } from "styled-components"
import { Navbar } from "../Navbar"
import { NavLinks } from "../NavLinks"

export const Layout = styled(({ ...rest }) => {
  return (
    <div {...rest}>
      <Navbar>
        <NavLinks />
      </Navbar>
      <Outlet />
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
