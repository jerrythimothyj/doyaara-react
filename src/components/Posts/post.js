import React from "react";

const FBPost = props => {
  return (
    <div>
      <h3>{props.post.title}</h3>
      <p>{props.post.content}</p>
    </div>
  );
};

export default FBPost;
