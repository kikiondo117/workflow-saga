import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./container/app/App.container";
import * as serviceWorker from "./serviceWorker";
import axios from "axios";
// ! Redux
import { Provider } from "react-redux";
import configureStore from "./shared/redux/store/create_store.store";
import { sagaMiddleware } from "./shared/redux/store/create_store.store";
import rootSaga from "./shared/redux/sagas/index.saga";

// ? Axios
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

const store = configureStore({});
sagaMiddleware.run(rootSaga);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
