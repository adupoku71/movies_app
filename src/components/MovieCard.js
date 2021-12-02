import { StyledMovieCard } from "../styles/MoviePageStyles"
import { ResultPoster } from "../styles/ResultStyles"
export const MovieCard = ({ movie, type }) => {
  return (
    <StyledMovieCard>
      {movie.poster_path ? (
        <img
          alt={movie.title}
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        />
      ) : (
        <ResultPoster />
      )}
    </StyledMovieCard>
  )
}
