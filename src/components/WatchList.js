import React, { useContext } from "react"
import { MovieContext } from "../context/MovieContextProvider"
import { Container } from "../styles/Container"
import { MovieGrid, MovieHeader, MoviePage } from "../styles/MoviePageStyles"
import { MovieCard } from "./MovieCard"

export const WatchList = () => {
  const { watchlist } = useContext(MovieContext)
  return (
    <MoviePage>
      <Container>
        <MovieHeader>
          <h1>My WatchList</h1>
        </MovieHeader>
        {watchlist.length > 0 ? (
          <MovieGrid>
            {watchlist.map((movie) => (
              <MovieCard key={movie.id} movie={movie} type="watchlist" />
            ))}
          </MovieGrid>
        ) : (
          <h2>No movies in your list, add some!!!</h2>
        )}
      </Container>
    </MoviePage>
  )
}
