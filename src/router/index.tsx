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

const LazyMovieDetails = lazy(
  () =>
    import(
      /* webpackChunkName: "MovieDetails" */ "@/features/details/MovieDetails"
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
                <div>Hello Leonardo</div>
              </RequireAuth>
            }
          />
          <Route path="/p" element={<ChakraLayout />} />
        </Routes>
      </HashRouter>
    </Suspense>
  )
}
