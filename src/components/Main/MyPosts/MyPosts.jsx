import React from "react";
import CreatePost from "./CreatePost/CreatePost";
import PostsWrapper from "./PostsWrapper/PostsWrapper";
import Post from "./PostsWrapper/Post/Post";

function MyPosts(props) {
  let Posts_Items = props.posts.posts.map((d, index) => {
    return <Post key={index} message={d.message} likesCount={d.likesCount} />;
  });
  return (
    <div className="myPosts">
      <span className="spanMP">My posts</span>
      <CreatePost
        postText={props.posts.postText}
        text={props.text}
        addPost={props.addPost}
        updateNewPost={props.updateNewPost}
      />
      <PostsWrapper posts={Posts_Items} />
    </div>
  );
}

export default MyPosts;
