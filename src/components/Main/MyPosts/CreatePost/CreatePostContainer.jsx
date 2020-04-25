import React from "react";
import CreatePost from "./CreatePost";

import {addPostCreater, updateNewPostCreater } from '../../../../actions/main-reducer';

function CreatePostContainer(props) {
  let {dispatch, text} = props;

  let onButtonClick = () => {
    dispatch(addPostCreater(text));
    dispatch(updateNewPostCreater(""));
  };

  let UpdaterPost = (e) => {
    let text = e.currentTarget.value;
    dispatch(updateNewPostCreater(text));
  };

  return (
    <CreatePost
      text={text}
      dispatch={dispatch}
      onButtonClick={onButtonClick}
      UpdaterPost={UpdaterPost}
    />
  );
}

export default CreatePostContainer;
