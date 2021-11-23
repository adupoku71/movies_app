import { createGlobalStyle } from "styled-components"
export const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    box-sizing: border-box;
    padding: 0;
    list-style: none;
    text-decoration: none;
  }

  body {
    font-family: 'Source Sans Pro', sans-serif;    font-size: 1.15rem;
  }

  input:focus {
    outline: none;
  }
`
