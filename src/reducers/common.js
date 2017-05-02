// "use strict";

const defaultState = {
  appName: "Test App 2",
  appLoaded: false
};
export default (state = defaultState, action) => {
  switch (action.type) {
    case "ASYNC_START":
      return {
        ...state,
        isLoading: true
      };
    case "ASYNC_END":
      return {
        ...state,
        isLoading: false
      };
    default:
      break;
  }
  return state;
};
