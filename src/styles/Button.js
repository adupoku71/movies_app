import styled from "styled-components"
import { Link } from "react-router-dom"
export const Button = styled.button`
  padding: 10px 15px;
  background-color: #21d07a;
  color: #032541;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: 700;
  display: inline-block;
  border: none;
  font-size: 1rem;
  transition: all 0.3s ease;
  line-height: 1.1;
  &:hover {
    background-color: #1aa762;
    opacity: 1;
    cursor: pointer;
  }
  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }
`

export const LinkButton = styled(Link)`
  padding: 10px 15px;
  background-color: #21d07a;
  color: #032541;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: 700;
  display: inline-block;
  border: none;
  font-size: 1rem;
  transition: all 0.3s ease;
  line-height: 1.1;

  &:hover {
    background-color: #1aa762;
    opacity: 1;
    cursor: pointer;
  }
  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }
`
