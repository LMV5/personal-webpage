import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import { media } from "./styles/GlobalStyles";

const StyledAppLayout = styled.div`
  color: var(--color-grey-100);
  display: grid;
  grid-template-columns: 18rem 1fr;
  padding-right: 1rem;

  ${media.small`
    display: flex;
    flex-direction: column;
    padding: 1rem 0 0 1rem;
  `}

  ${media.medium`
    grid-template-columns: 10rem 1fr;
    padding-top: 2rem;
    gap: 1rem;
  `}

  ${media.large`
    grid-template-columns: 16rem 1fr;
    padding-top: 3rem;
  `}

  ${media.xl`
    padding: 7rem 0 0 2rem;
  `}
`;

const Main = styled.main`
  max-width: 100%;
  display: flex;
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
