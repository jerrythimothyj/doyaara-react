import reducers from "./reducer";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

const store = createStore(
  reducers,
  compose(applyMiddleware(thunk, createLogger()))
);
export default store;
