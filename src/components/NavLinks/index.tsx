import { Link } from "react-router-dom"
import styled, { css, useTheme } from "styled-components"
import { CustomLink } from "../CustomLink"
import { Typography } from "../Typography"

const styles = css`
  display: flex;
  gap: 48px;
  ${Typography} {
    cursor: pointer;
  }
`

export const NavLinks = styled(({ ...rest }) => {
  const theme = useTheme()
  return (
    <div {...rest}>
      <CustomLink to={"/login"}>Login</CustomLink>
      <CustomLink to={"/movies"}>Movies</CustomLink>
      <Typography as="span" variant="link1">
        TV Shows
      </Typography>
      <Typography as="span" variant="link1">
        Suggest me
      </Typography>
    </div>
  )
})`
  ${styles}
`
