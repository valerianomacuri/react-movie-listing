// 1. import `extendTheme` function
import {
  extendTheme,
  ThemeConfig,
  Theme,
  withDefaultColorScheme,
  ComponentStyleConfig,
} from "@chakra-ui/react"

// 2. Extend the theme to include custom colors, fonts, etc
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

const Input: ComponentStyleConfig = {
  defaultProps: {
    size: "lg",
  },
  sizes: {
    lg: {
      field: {
        fontSize: "lg",
        px: 4,
        h: "62px",
        borderRadius: "12px",
      },
      addons: {
        fontSize: "lg",
        px: 4,
        h: "62px",
        borderRadius: "12px",
      },
    },
  },
}
const Button: ComponentStyleConfig = {
  sizes: {
    lg: {
      h: "62px",
      minW: 12,
      fontSize: "lg",
      px: 4,
      borderRadius: "12px",
    },
  },
}

const theme = {
  config,
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Poppins, sans-serif",
  },
  components: {
    Input,
    Button,
  },
}

export const chakraTheme = extendTheme(
  { ...theme },
  withDefaultColorScheme({ colorScheme: "purple" }),
)
