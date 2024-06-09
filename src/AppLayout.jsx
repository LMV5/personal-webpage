import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  background-color: var(--color-blue-900);
  color: var(--color-grey-100);
  display: grid;
  grid-template-columns: 16rem 1fr;
  height: 100vh;
  padding-top: 10rem;
  padding-left: 5rem;
  position: relative;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </StyledAppLayout>
  );
}

export default AppLayout;
