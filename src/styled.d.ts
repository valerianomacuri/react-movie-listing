import "styled-components"

type Color = {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
}

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      commmon: {
        white: string
        black: string
      }
      primary: Color
      secondary: Color
      tertary: Color
      success: Color
      error: Color
      warning: Color
      grey: Color
    }
    typography: {
      fontFamily: string
    }
    shape: {
      borderRadius: string
    }
  }
}
