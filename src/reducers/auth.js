// "use strict";

export default (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state
      };
    default:
      break;
  }
  return state;
};
