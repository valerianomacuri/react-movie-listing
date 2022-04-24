import styled, { css } from "styled-components"

export const Logo = styled.img.attrs(() => ({
  src: "./assets/images/logo.svg",
  size: "44px",
}))`
  ${({ size }) => css`
    width: ${size};
    height: ${size};
    cursor: pointer;
  `}
`
