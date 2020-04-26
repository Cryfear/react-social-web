import React from "react";
import PostsWrapper from "./PostsWrapper/PostsWrapper";
import Post from "./PostsWrapper/Post/Post";
import CreatePostContainer from "./CreatePost/CreatePostContainer";

function MyPosts(props) {
  let Posts_Items = props.posts.map((d, index) => {
    return <Post key={index} message={d.message} likesCount={d.likesCount} />;
  });
 
  return (
    <div className="myPosts">
      <span className="spanMP">My posts</span>
      <CreatePostContainer />
      <PostsWrapper posts={Posts_Items} />
    </div>
  );
}

export default MyPosts;
