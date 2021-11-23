import {
  ResultImg,
  ResultInfo,
  ResultPoster,
  StyledResultCard,
} from "../styles/ResultStyles"
import { Button } from "../styles/Button"
export const ResultCard = ({ movie }) => {
  return (
    <StyledResultCard>
      <div>
        {movie.poster_path ? (
          <ResultImg
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          />
        ) : (
          <ResultPoster />
        )}
      </div>
      <ResultInfo>
        <div>
          <h3>{movie.title}</h3>
          <h4>
            {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
          </h4>
        </div>
        <div>
          <Button>Add to Watchlist</Button>
        </div>
      </ResultInfo>
    </StyledResultCard>
  )
}
