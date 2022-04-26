import { IconContext } from "react-icons"
import {
  QueryClient,
  QueryClientProvider,
} from "react-query"
import { ThemeProvider } from "styled-components"
import { Router } from "./router"
import theme from "./theme"
import GlobalStyle from "./theme/globalStyles"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <IconContext.Provider
          value={{
            color: theme.colors.grey[600],
            size: "24px",
          }}
        >
          <Router />
        </IconContext.Provider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
