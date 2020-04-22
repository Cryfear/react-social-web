import React from "react";
import CreatePost from "./CreatePost/CreatePost";
import PostsWrapper from "./PostsWrapper/PostsWrapper";
import Post from "./PostsWrapper/Post/Post";

function MyPosts(props) {
  let Posts_Items = props.posts.map((d, index) => {
    return <Post key={index} message={d.message} likesCount={d.likesCount} />;
  });
  return (
    <div className="myPosts">
      <span className="spanMP">My posts</span>
      <CreatePost
        posts={props.posts}
        text={props.text}
        action={props.action}
      />
      <PostsWrapper posts={Posts_Items} />
    </div>
  );
}

export default MyPosts;
