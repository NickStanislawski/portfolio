import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// @ts-ignore: CSS module declaration not found
import "bootstrap/dist/css/bootstrap.css";
import { RouterProvider } from "react-router-dom";
import router from "./Services/routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
