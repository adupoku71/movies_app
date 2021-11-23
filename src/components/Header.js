import { LinkButton } from "../styles/Button"
import { Container } from "../styles/Container"
import {
  Brand,
  InnerContext,
  Navlinks,
  StyledLink,
  StyledHeader,
} from "../styles/HeaderStyles"

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <InnerContext>
          <Brand>
            <StyledLink to="/">WatchList</StyledLink>
          </Brand>
          <Navlinks>
            <li>
              <StyledLink to="/">Watch List</StyledLink>
            </li>
            <li>
              <StyledLink to="/watched">Watched</StyledLink>
            </li>
            <li>
              <LinkButton to="/add">+ Add</LinkButton>
            </li>
          </Navlinks>
        </InnerContext>
      </Container>
    </StyledHeader>
  )
}
