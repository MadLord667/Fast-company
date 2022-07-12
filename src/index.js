import React from "react";
import ReactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Users from "./component/users";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// const root = ReactDom.createRoot(document.getElementById("root"));
// root.render(
ReactDom.render(
  <React.StrictMode>
    <Users />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
