import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "../authSlice"
export function RequireAuth({
  children,
}: {
  children: JSX.Element
}) {
  let { isAuthenticated } = useAuth()
  let location = useLocation()

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        state={{ from: location }}
        replace
      />
    )
  }

  return children
}
