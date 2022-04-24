import {
  HashRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import { Layout, PrivateLayout } from "@/components"
import { RequireAuth } from "@/features/auth/components/RequiredAuth"
import { PublicPage } from "@/features/auth/components/PublicPage"
import Home from "@/features/home/Home"
import Movies from "@/features/movies/Movies"
import Login from "@/features/auth/Login"

export const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PublicPage>
              <Layout />
            </PublicPage>
          }
        >
          <Route
            index
            element={<Navigate to="/login" replace />}
          />
          <Route path="movies" element={<Movies />} />
          <Route path="login" element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route
            path="*"
            element={<Navigate to="/login" replace />}
          />
          {/* <Route path="teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} />
            <Route path="new" element={<NewTeamForm />} />
            <Route index element={<LeagueStandings />} />
          </Route> */}
        </Route>
        <Route
          path="/u"
          element={
            <RequireAuth>
              <PrivateLayout />
            </RequireAuth>
          }
        />
      </Routes>
    </HashRouter>
  )
}
