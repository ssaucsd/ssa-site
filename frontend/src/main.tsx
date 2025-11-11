import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.scss";
import { BrowserRouter } from "react-router";
import AppRoutes from "./components/AppRoutes.tsx";

// Load Google Fonts stylesheet asynchronously
const googleFontsLink = document.getElementById("google-fonts");
if (googleFontsLink) {
  googleFontsLink.setAttribute("media", "all");
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>
);
