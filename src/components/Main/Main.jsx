import React from "react";
import "./Main.css";
import Description from "./Descriptions/Description";
import MyPosts from "./MyPosts/MyPosts";

function Main(props) {
  return (
    <main className="content">
      <Description />
      <MyPosts
        posts={props.posts}
        text={props.text}
        addPost={props.addPost}
        updateNewPost={props.updateNewPost}
      />
    </main>
  );
}

export default Main;
