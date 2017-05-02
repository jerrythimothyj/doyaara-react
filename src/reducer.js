import common from "./reducers/common";
import auth from "./reducers/auth";
import post from "./reducers/post";
import { combineReducers } from "redux";

export default combineReducers({
  common,
  auth,
  post
});
