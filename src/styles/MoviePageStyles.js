import styled from "styled-components"

export const MoviePage = styled.div`
  padding: 30px 0;

  h2 {
    color: #c4c4c4;
    font-size: 3rem;
    text-align: center;
  }
`

export const MovieHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  h1 {
    color: #032541;
    margin: 0;
  }
`

export const StyledMovieCard = styled.div`
  width: 100%;
  position: relative;
  border: 0;
  display: block;
  img {
    width: 100%;
    display: block;
    border-radius: 5px;
  }
`
export const MovieOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid transparent;
  transition: all 0.3s ease;
  &:hover {
    border: 1px solid #21d07a;
  }
`
export const InnerCardControls = styled.div`
  display: inline;
  background-color: red;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.8);
  border-radius: 5px;
  padding: 3px;
  opacity: 0;
  transition: all 0.3s ease;
`

export const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;

  @media (min-width: 992px) {
    grid-template-columns: repeat(5, 1fr);
  }
`
