import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import css from './styles/stylesheet.css'
import {createStore} from 'redux'
import rootReducer from './redux/reducer'

// still working on this. redux store neither implemented nor activated 
// const store = createStore(rooReducer);


ReactDOM.render(
<BrowserRouter>
<App />
</BrowserRouter>,
 document.getElementById("root"));