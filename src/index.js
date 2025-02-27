import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";
import App from "./App";
import Login from "./components/Login/login";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
    <Provider store={store}>
  <BrowserRouter>
    <Route exact path="/admin" component={App} />
    <Route exact path="/" component={Login} />
  </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
