import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
  <App />
  <p><a href="https://github.com/InesGTavares/weather-react">Open-source code</a>, by Inês Tavares from She Codes</p>
  </StrictMode>,
  rootElement
);