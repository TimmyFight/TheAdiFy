import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./theme/GlobalStyle";
import Home from "./Views/Home/Home";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Home />
  </React.StrictMode>
);

reportWebVitals();
