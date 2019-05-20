import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./root_reducer.reducer";

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, composeWithDevTools());
}
