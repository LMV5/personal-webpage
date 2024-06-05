// import styled from "styled-components";

import GlobalStyles from "./styles/GlobalStyles";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";
import AppLayout from "./ui/AppLayout";

// const StyledApp = styled.div`
//   background-color: #0f172a;
// `;

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <GlobalStyles />
      {/* <StyledApp> */}

      {/* </StyledApp> */}
    </>
  );
}
