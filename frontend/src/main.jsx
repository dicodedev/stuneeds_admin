import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./router.jsx";
import { ContextProvider } from "./context/ContextProvider.jsx";
import ScrollToTop from "./ScrollToTop";
import { ModalProvider } from "./context/useModal.jsx";
import { UserContextProvider } from "./context/UserContextProvider.jsx";

import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <ModalProvider>
        <UserContextProvider>
          <ContextProvider>
            <Router>
              <ScrollToTop />
              <AppRouter />
            </Router>
          </ContextProvider>
        </UserContextProvider>
      </ModalProvider>
    </HelmetProvider>
  </React.StrictMode>
);
