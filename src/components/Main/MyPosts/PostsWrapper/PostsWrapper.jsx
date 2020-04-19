import React from "react";

function PostsWrapper(props) {
  return (
    <div className="postsWrapper">
      Posts
      {props.posts}
    </div>
  );
}

export default PostsWrapper;
