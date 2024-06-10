import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import { media } from "./styles/GlobalStyles";

const StyledAppLayout = styled.div`
  background-color: var(--color-blue-900);
  color: var(--color-grey-100);
  display: grid;
  grid-template-columns: 16rem 1fr;
  padding: 10rem 2rem 0 2rem;
  position: relative;

  ${media.small`
    display: flex;
    flex-direction: column;
    padding-top: 3rem;
    padding-left: 3rem;
  `}

  ${media.medium`
    grid-template-columns: 10rem 1fr;
    padding-top: 5rem;
    padding-left: 2rem;
  `}

  ${media.large`
    grid-template-columns: 10rem 1fr;
    padding-top: 7rem;
    padding-left: 4rem;
  `}
`;

const Main = styled.main`
  max-width: 100%;
  overflow-x: hidden;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
