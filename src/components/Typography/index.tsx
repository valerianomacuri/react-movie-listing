import styled, {
  css,
  DefaultTheme,
} from "styled-components"

type TypographyProps = {
  variant?: string
  color?: string | ((theme: DefaultTheme) => string)
}

export const Typography = styled.p<TypographyProps>`
  ${({ theme, color }) => css`
    font-family: ${theme.typography.fontFamily};
    color: ${color || theme.colors.grey[100]};
    margin: 0;
    border: none;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  `}
  ${({ variant }) => {
    switch (variant) {
      case "h1":
        return css`
          font-weight: 600;
          font-size: 64px;
          line-height: 80px;
          letter-spacing: -0.02em;
        `
      case "h2":
        return css`
          font-weight: 600;
          font-size: 48px;
          line-height: 56px;
          letter-spacing: -0.02em;
        `
      case "h3":
        return css`
          font-weight: 600;
          font-size: 32px;
          line-height: 40px;
          letter-spacing: -0.02em;
        `
      case "h4":
        return css`
          font-weight: 700;
          font-size: 24px;
          line-height: 32px;
          letter-spacing: -0.015em;
        `
      case "h5":
        return css`
          font-weight: 700;
          font-size: 20px;
          line-height: 24px;
          letter-spacing: -0.015em;
        `
      case "h6":
        return css`
          font-weight: 700;
          font-size: 16px;
          line-height: 24px;
          letter-spacing: -0.015em;
        `
      case "body1":
        return css`
          font-weight: 400;
          font-size: 20px;
          line-height: 32px;
        `
      case "body2":
        return css`
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
        `
      case "body3":
        return css`
          font-weight: 400;
          font-size: 14px;
          line-height: 24px;
        `
      case "body4":
        return css`
          font-weight: 400;
          font-size: 12px;
          line-height: 16px;
        `
      case "caption":
        return css`
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 16px;
        `
      case "overline1":
        return css`
          font-weight: 700;
          font-size: 14px;
          line-height: 24px;
        `
      case "overline2":
        return css`
          font-weight: 700;
          font-size: 12px;
          line-height: 16px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        `
      case "link1":
        return css`
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
          letter-spacing: 0.02em;
        `
      case "link2":
        return css`
          font-weight: 600;
          font-size: 14px;
          line-height: 24px;
          letter-spacing: 0.02em;
        `
      case "link3":
        return css`
          font-weight: 600;
          font-size: 12px;
          line-height: 16px;
          letter-spacing: 0.02em;
        `
      default:
        return
    }
  }}
`
Typography.defaultProps = {
  variant: "body1",
}
