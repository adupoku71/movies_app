import { AppReducer } from "./AppReducer"
import React, { createContext, useReducer, useEffect } from "react"

const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
}

export const MovieContext = createContext(initialState)

export const MovieContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  useEffect(() => {
    console.log("movie context has been mounted/updated")
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist))
    localStorage.setItem("watched", JSON.stringify(state.watched))
  }, [state])

  const addToWatchlist = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie })
  }
  return (
    <MovieContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addToWatchlist,
      }}
    >
      {children}
    </MovieContext.Provider>
  )
}
