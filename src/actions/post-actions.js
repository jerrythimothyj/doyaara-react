import posts from "../apis";

export const getAllPosts = () => {
  return function(dispatch) {
    return posts.getById().then(response => {
      console.info("Data ", response);
      dispatch({
        type: "POSTS_LOADED",
        payload: response.posts.data
      });
    });
  };

  //   return {
  //     type: "GET_ALL_POSTS",
  //     payload: posts.getById(),
  //     states: ["GETTING_POSTS", "POSTS_LOADED", "POSTS_FAILED"]
  //   };
};
