import { useAppSelector } from "@/app/hooks"
import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "../authSlice"
export function PublicPage({
  children,
}: {
  children: JSX.Element
}) {
  let { isAuthenticated } = useAuth()
  let location = useLocation()
  if (isAuthenticated) {
    return (
      <Navigate
        to="/u"
        state={{ from: location }}
        replace
      />
    )
  }

  return children
}
