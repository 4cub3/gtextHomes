import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import NavBarProvider from "./context/NavbarContext/NavBarProvider.tsx";
import HeroContextProvider from "./context/HeorContext/HeroContextProvider.tsx";
import App from "./App.tsx";
import "./app.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <HeroContextProvider>
        <NavBarProvider>
          <App />
        </NavBarProvider>
      </HeroContextProvider>
    </Router>
  </React.StrictMode>
);
