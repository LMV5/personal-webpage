// import styled from "styled-components";

import GlobalStyles from "./styles/GlobalStyles";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";
import AppLayout from "./AppLayout";
import { Analytics } from "@vercel/analytics/react";

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Home />,
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
      <Analytics />
    </>
  );
}
