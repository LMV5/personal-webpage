import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavLinkStyled = styled(NavLink)`
  padding-left: 2rem;
  display: block;
  color: var(--color-white);
  text-decoration: none;

  &.active {
    background-color: var(--color-blue-500);
  }
`;

const MenuContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-size: 2rem;
  padding: 2rem 0;
  border-bottom: 1px solid var(--color-grey-200);
`;

const MenuItem = styled.li`
  &:hover {
    background-color: var(--color-blue-500);
  }
`;

export default function MobileMenu({ setIsMobileMenuOpen }) {
  return (
    <MenuContainer>
      <MenuItem>
        <NavLinkStyled
          to="/"
          activeclassname="active"
          onClick={() => {
            setIsMobileMenuOpen(false);
          }}
        >
          Home
        </NavLinkStyled>
      </MenuItem>
      <MenuItem>
        <NavLinkStyled
          to="/projects"
          activeclassname="active"
          onClick={() => {
            setIsMobileMenuOpen(false);
          }}
        >
          Projects
        </NavLinkStyled>
      </MenuItem>
      <MenuItem>
        <NavLinkStyled
          to="/contacts"
          activeclassname="active"
          onClick={() => {
            setIsMobileMenuOpen(false);
          }}
        >
          Contacts
        </NavLinkStyled>
      </MenuItem>
    </MenuContainer>
  );
}
