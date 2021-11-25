import React from "react"
import ReactDOM from "react-dom"
import { MovieContextProvider } from "./context/MovieContextProvider"

import { BrowserRouter as Router } from "react-router-dom"
import App from "./App"

ReactDOM.render(
  <MovieContextProvider>
    <Router>
      <App />
    </Router>
  </MovieContextProvider>,
  document.getElementById("root")
)
