import posts from "../apis";

export const getAllPosts = () => {
  return {
    type: "GET_ALL_POSTS",
    payload: posts.getById(),
    states: ["GETTING_POSTS", "POSTS_LOADED", "POSTS_FAILED"]
  };
};
