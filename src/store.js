import reducers from "./reducer";
import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "./middleware";
import { createLogger } from "redux-logger";

const store = createStore(
  reducers,
  applyMiddleware(promiseMiddleware, createLogger())
);
export default store;
