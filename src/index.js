import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  // <React.StrictMode> not using as of now
  <App />,
  // </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
