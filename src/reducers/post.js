export default (state = {}, action) => {
  switch (action.type) {
    case "POSTS_LOADED":
      console.info("Loading Posts..", action);
      return {
        ...state,
        items: action.payload.posts
      };
    default:
      break;
  }
  return state;
};
