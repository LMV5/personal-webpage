import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNavbar = styled.nav`
  background-color: var(--color-blue-900);
  color: var(--color-white);
`;

export default function Navbar() {
  return (
    <StyledNavbar>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
      </ul>
    </StyledNavbar>
  );
}
