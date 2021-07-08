import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import css from './styles/stylesheet.css'

// import styles from './scss/application.scss';

ReactDOM.render(
<BrowserRouter>
<App />
</BrowserRouter>,
 document.getElementById("root"));