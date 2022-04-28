import { IconContext } from "react-icons"
import {
  QueryClient,
  QueryClientProvider,
} from "react-query"
import { Router } from "./router"
import theme from "./theme"

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
      <IconContext.Provider
        value={{
          color: theme.colors.grey[600],
          size: "24px",
        }}
      >
        <Router />
      </IconContext.Provider>
    </QueryClientProvider>
  )
}

export default App
