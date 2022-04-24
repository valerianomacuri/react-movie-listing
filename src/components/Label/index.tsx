import styled, { css } from "styled-components"

type LabelProps = {
  top?: boolean
}

export const Label = styled.label<LabelProps>`
  position: absolute;
  pointer-events: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition: 0.2s ease;
  top: 24px;
  /* Caption */

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  /* identical to box height, or 114% */

  /* Grey/600 */

  color: #475069;

  ${({ top }) =>
    top
      ? css`
          top: 12px;
          left: 0;
        `
      : null}
`

Label.defaultProps = {
  top: false,
}
