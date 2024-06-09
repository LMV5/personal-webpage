import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavbar = styled.nav`
  font-size: 2.5rem;
  color: var(--color-grey-100);
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Li = styled.li`
  &:hover {
    background-color: var(--color-blue-500);
  }
`;
const NavLinkStyled = styled(NavLink)`
  padding-left: 2rem;
  display: block;
  color: var(--color-white);
  text-decoration: none;

  &.active {
    background-color: var(--color-blue-500);
  }
`;

export default function Navbar() {
  return (
    <StyledNavbar>
      <Ul>
        <Li>
          <NavLinkStyled to="/" activeclassname="active">
            Home
          </NavLinkStyled>
        </Li>
        <Li>
          <NavLinkStyled to="/about" activeclassname="active">
            About
          </NavLinkStyled>
        </Li>
        <Li>
          <NavLinkStyled to="/projects" activeclassname="active">
            Projects
          </NavLinkStyled>
        </Li>
        <Li>
          <NavLinkStyled to="/contacts" activeclassname="active">
            Contacts
          </NavLinkStyled>
        </Li>
      </Ul>
    </StyledNavbar>
  );
}
