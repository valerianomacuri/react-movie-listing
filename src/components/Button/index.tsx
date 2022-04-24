import { FC } from "react"
import styled, { css } from "styled-components"

type ButtonBaseProps = {
  fullWidth?: boolean
}
const ButtonBase = styled.button<ButtonBaseProps>`
  ${({ theme, fullWidth }) => css`
    padding: 16px 32px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${theme.colors.commmon.white};
    white-space: nowrap;
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;
    background: ${theme.colors.primary[400]};
    border: 2px solid ${theme.colors.primary[400]};
    border-radius: ${theme.shape.borderRadius};
    transition: all 0.3s ease;
    width: ${fullWidth ? "100%" : "auto"};
    cursor: pointer;
    & > svg > path {
      stroke: ${theme.colors.commmon.white};
    }
  `}

  &:hover {
    ${({ theme }) => css`
      background: ${theme.colors.primary[500]};
    `}
  }

  &:disabled {
    ${({}) => css``}
  }
`

type ButtonProps = {
  fullWidth?: boolean
  loading?: boolean
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export const Button: FC<ButtonProps> = ({
  children,
  type,
  onClick,
  fullWidth = false,
  loading = false,
}) => {
  return (
    <ButtonBase
      type={type}
      onClick={onClick}
      fullWidth={fullWidth}
      disabled={loading}
    >
      {loading ? (
        <i
          className="bx bx-loader-alt bx-spin"
          color="white"
          style={{
            fontSize: 24,
          }}
        ></i>
      ) : (
        children
      )}
    </ButtonBase>
  )
}
