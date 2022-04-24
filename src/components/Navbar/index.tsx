import { useAuth } from "@/features/auth/authSlice"
import { Link, useLocation } from "react-router-dom"
import styled, { css } from "styled-components"
import { Logo } from "../Logo"

const styles = css`
  box-sizing: border-box;
  margin: 0;
  border: none;
  outline: none;
  padding: 0;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  padding: 16px 120px;
  background: rgba(18, 24, 41, 0.8);
  backdrop-filter: blur(40px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
`

export const Navbar = styled(({ children, ...rest }) => {
  const { isAuthenticated } = useAuth()
  return (
    <div {...rest}>
      {isAuthenticated ? (
        <Logo />
      ) : (
        <Link to={"/home"}>
          <Logo />
        </Link>
      )}
      {children}
    </div>
  )
})`
  ${styles}
`
