import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import theme from "./utils/materialTheme.ts";
import { ThemeProvider } from "@mui/material";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./views/NotFound.tsx";
import Projects from "./views/Projects.tsx";
import Landing from "./views/Landing.tsx";
import Career from "./views/Career.tsx";
import Stack from "./views/Stack.tsx";

library.add(fab, fas);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Landing /> },
      { path: "/projects", element: <Projects /> },
      { path: "/career", element: <Career /> },
      { path: "/stack", element: <Stack /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
