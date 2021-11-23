import { Header } from "./components/Header"
import { RoutesC } from "./components/RoutesC"
import { GlobalStyle } from "./styles/GlobalStyles"

const App = () => {
  return (
    <div>
      <GlobalStyle />

      <Header />
      <RoutesC />
    </div>
  )
}

export default App
