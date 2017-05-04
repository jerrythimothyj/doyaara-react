import { posts } from "../apis";
const EVENT_NAME = "DOY-EVE";

const filterPostByText = (items, str = EVENT_NAME) =>
  items.filter(item => item.message && item.message.indexOf(str) !== -1);

const extractData = post => {
  let { message } = post;
  let parts = message.split(/\r\n|\r|\n/g).filter(Boolean);
  return {
    title: parts[1],
    content: parts.slice(2).join(""),
    id: post.id
  };
};

const constructPosts = posts => filterPostByText(posts).map(extractData);

export const getAllPosts = () => {
  return function(dispatch) {
    return posts.getById().then(response => {
      console.info("Data ", response);
      dispatch({
        type: "POSTS_LOADED",
        payload: constructPosts(response.posts.data)
      });
    });
  };
};
