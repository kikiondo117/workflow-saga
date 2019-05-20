import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./container/app/App.container";
import * as serviceWorker from "./serviceWorker";
import axios from "axios";
// ! Redux
import { Provider } from "react-redux";
import configureStore from "./shared/redux/store/create_store.store";

// ? Axios
axios.defaults.baseURL =
  "https://cors-anywhere.herokuapp.com/https://rem.dbwebb.se/api";

const store = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
