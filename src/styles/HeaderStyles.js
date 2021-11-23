import styled from "styled-components"
import { Link } from "react-router-dom"
export const StyledHeader = styled.header`
  background-color: #032541;
`
export const StyledLink = styled(Link)`
  color: #ffffff;
  font-size: 1.25rem;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.7;
  }
`
export const InnerContext = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`

export const Brand = styled.div`
  a {
    font-weight: 700;
    font-size: 1.5rem;
  }
`
export const Navlinks = styled.ul`
  display: flex;
  align-items: center;

  li {
    color: red;
    display: inline-block;
    margin-right: 20px;
  }
  li:last-child {
    margin-right: 0;
  }
`
