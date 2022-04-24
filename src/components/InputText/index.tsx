import styled, { css, useTheme } from "styled-components"
import { Label } from "../Label/index"
import { useState, useEffect, useRef } from "react"
import { Typography } from "../Typography"

const stylesInputText = css`
  ${({ theme }) => css`
    background: rgba(0, 0, 0, 0.1);
    border: 1px solid #323b54;
    box-sizing: border-box;
    border-radius: 12px;
    height: 64px;
    display: flex;
    align-items: center;
    padding: 0 16px;
    & > #WrapperInputText {
      position: relative;
      width: 100%;
      height: 100%;

      & > input {
        border: none;
        background-color: transparent !important;
        outline: none;
        width: 100%;
        height: 100%;
        position: relative;
        top: 8px;
        font-family: "Poppins";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: ${({ theme }) => theme.colors.grey[400]};
      }

      & > input:focus + label {
        top: 12px;
        left: 0;
      }
    }

    & > svg:first-child {
      margin-right: 16px;
    }
  `}
`

type InputTextProps = {
  label?: string
  startIcon?: JSX.Element
  endIcon?: JSX.Element
  error?: boolean
  helperText?: React.ReactNode
  inputProps?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
  fullWidth?: boolean
}
export const InputText = styled(
  ({
    startIcon,
    endIcon,
    label,
    inputProps,
    fullWidth = false,
    error = false,
    helperText,
    ...rest
  }: InputTextProps) => {
    const [isTop, setIsTop] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)
    const theme = useTheme()
    useEffect(() => {
      if (!!inputRef.current?.value) {
        setIsTop(true)
      } else {
        setIsTop(false)
      }
    }, [inputRef.current?.value])
    return (
      <div>
        <div
          style={{
            width: fullWidth ? "100%" : "344px",
            border: error
              ? `1px solid ${theme.colors.error[600]}`
              : "",
          }}
          {...rest}
        >
          {startIcon}
          <div id="WrapperInputText">
            <input
              ref={inputRef}
              type={"text"}
              autoComplete="off"
              {...inputProps}
            />
            <Label top={isTop}>{label}</Label>
          </div>
          {endIcon}
        </div>
        {error && (
          <Typography
            variant="body3"
            color={theme.colors.error[600]}
            style={{
              marginTop: "4px",
            }}
          >
            {helperText}
          </Typography>
        )}
      </div>
    )
  },
)`
  ${stylesInputText}
`
