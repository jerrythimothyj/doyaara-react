import reducers from "./reducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import promiseMiddleware from "./middleware";
import { createLogger } from "redux-logger";

const store = createStore(reducers, applyMiddleware(thunk));
export default store;
