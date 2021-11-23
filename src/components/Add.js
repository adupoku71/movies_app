import axios from "axios"
import { useState } from "react"
import { ResultContainer } from "../styles/ResultStyles"
import { AddContent, Input } from "../styles/AddPageStyles"
import { Container } from "../styles/Container"
import { ResultCard } from "./ResultCard"

export const Add = () => {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])
  const handleInput = (e) => {
    e.preventDefault()
    setQuery(e.target.value)

    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
      )
      .then(({ data }) => {
        setResults(data.results)
      })
      .catch((err) => {
        console.log("couldn't fetch movie" + err)
        setResults([])
      })
  }
  return (
    <Container>
      <AddContent>
        <div>
          <Input
            onChange={handleInput}
            type="text"
            placeholder="Search for movies..."
            value={query}
          />
        </div>
        {results.length > 0 && (
          <ResultContainer>
            {results.map((movie) => (
              <li key={movie.id}>
                <ResultCard movie={movie} />
              </li>
            ))}
          </ResultContainer>
        )}
      </AddContent>
    </Container>
  )
}
