import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Movies from "./components/movies.jsx";
import App from "./components/App.js";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

ReactDOM.render(<Movies />, document.getElementById("root"));
registerServiceWorker();
