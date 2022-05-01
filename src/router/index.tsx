import { lazy, Suspense } from "react"
import {
  HashRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"

import { RequireAuth } from "@/features/auth/components/RequiredAuth"
import { PublicPage } from "@/features/auth/components/PublicPage"
import { ChakraLayout } from "@/components/ChakraLayout"
import { Fallback } from "@/components"
import { PrivateLayout } from "@/features/user/components"

const LazyMovieDetails = lazy(
  () =>
    import(
      /* webpackChunkName: "MovieDetails" */ "@/features/movies/components/MovieDetails"
    ),
)

const LazyHome = lazy(
  () =>
    import(
      /* webpackChunkName: "Home" */ "@/features/home/Home"
    ),
)

const LazyMovies = lazy(
  () =>
    import(
      /* webpackChunkName: "Movies" */ "@/features/movies/Movies"
    ),
)

const LazyLogin = lazy(
  () =>
    import(
      /* webpackChunkName: "Login" */ "@/features/auth/Login"
    ),
)

const LazyTV = lazy(
  () =>
    import(/* webpackChunkName: "TV" */ "@/features/tv/TV"),
)

export const Router = () => {
  return (
    <Suspense fallback={<Fallback />}>
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PublicPage>
                <ChakraLayout />
              </PublicPage>
            }
          >
            <Route
              index
              element={<Navigate to="/login" replace />}
            />
            <Route path="movies" element={<LazyMovies />} />
            <Route path="login" element={<LazyLogin />} />
            <Route path="home" element={<LazyHome />} />
            <Route path="tv" element={<LazyTV />} />
            <Route
              path="movie/:id"
              element={<LazyMovieDetails />}
            />
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
          >
            <Route
              index
              element={<Navigate to="dashboard" replace />}
            />
            <Route
              path="dashboard"
              element={<h1>Dashboard</h1>}
            />
            <Route
              path="suggestions"
              element={<h1>Suggestions</h1>}
            />
            <Route path="add" element={<h1>Add</h1>} />
            <Route
              path="*"
              element={<h1>La pagina no existe</h1>}
            />
          </Route>
        </Routes>
      </HashRouter>
    </Suspense>
  )
}
