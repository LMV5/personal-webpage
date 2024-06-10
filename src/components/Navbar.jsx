import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { media } from "../styles/GlobalStyles";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import MobileMenu from "./MobileMenu";

const StyledNavbar = styled.nav`
  font-size: 3.2rem;
  color: var(--color-grey-100);

  ${media.medium`
    font-size: 1.5rem;
  `}
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${media.small`
    display: none;
  `}
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

const StyledFaBars = styled(FaBars)`
  display: none;
  ${media.small`
    display: block;
    cursor: pointer;
    font-size: 2.5rem;
    &:hover {
      color: var(--color-blue-100);
    }
  `}
`;

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function handleClick() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <StyledNavbar>
      <StyledFaBars onClick={handleClick} />
      {isMobileMenuOpen && (
        <MobileMenu setIsMobileMenuOpen={setIsMobileMenuOpen} />
      )}
      <Ul>
        <Li>
          <NavLinkStyled to="/" activeclassname="active">
            Home
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
