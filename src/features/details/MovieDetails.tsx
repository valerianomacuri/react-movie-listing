import moviesApi from "@/api/moviesApi"
import { AspectRatio, Button } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import {
  Navigate,
  useParams,
  useNavigate,
} from "react-router-dom"

const MovieDetails = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState<any>({})
  const navigate = useNavigate()
  useEffect(() => {
    moviesApi
      .get(`${id}/videos`)
      .then(setMovie)
      .catch(() => {
        setMovie(null)
      })
  }, [])
  useEffect(() => {
    console.log(movie)
  }, [movie])
  if (!movie)
    return <Navigate to="/movies" replace={true} />
  return (
    <div>
      MovieDetails #{id}
      {movie.data?.results[0] ? (
        <AspectRatio maxW="560px" ratio={716 / 403}>
          <iframe
            title="Trailer"
            src={`https://www.youtube.com/embed/${movie.data.results[0].key}`}
            allowFullScreen
          />
        </AspectRatio>
      ) : (
        <Button
          onClick={() => {
            navigate("/movies", { replace: true })
          }}
        >
          Regresar
        </Button>
      )}
    </div>
  )
}

export default MovieDetails
