import { createGlobalStyle, css } from "styled-components"

const GlobalStyle = createGlobalStyle`
${({ theme }) => css`
  * {
    padding: 0;
    margin: 0;
    outline: none;
    border: none;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }

  #root {
    background-color: ${theme.colors.grey[900]};
    background-image: url("./assets/images/background.svg");
    background-repeat: no-repeat;
    background-size: cover;
  }
`}
`

export default GlobalStyle
