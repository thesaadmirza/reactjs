import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Main from "./components/main.js";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App.js";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
