import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { css, Global } from "@emotion/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { globalBackground } from "./styleConstants";
import { routes } from "./routes";

const router = createBrowserRouter(routes);

const globalStyles = css`
  :root {
    color-scheme: dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: ${globalBackground};

    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
    display: flex;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
  }
`;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Global styles={globalStyles} />
    <RouterProvider router={router} />
  </StrictMode>
);
