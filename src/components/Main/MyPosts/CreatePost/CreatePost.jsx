import React from "react";
import {addPostCreater, updateNewPostCreater } from '../../../../actions/main-action';

function CreatePost(props) {
  let newPostElement = React.createRef();
  let onButtonClick = () => {
    let text = newPostElement.current.value;
    props.action(addPostCreater(text));
    props.action(updateNewPostCreater(''))
  };
  let UpdaterPost = (text) => {
    text = newPostElement.current.value;
    props.action(updateNewPostCreater(text))
  }
  return (
    <div className="createPost">
      <form>
        <input
          id="createPost"
          ref={newPostElement}
          onChange={UpdaterPost}
          type="text"
          value={props.text}
          placeholder="Что у вас нового?"
        ></input>
        <button onClick={onButtonClick} id="SubmitPost" type="button">
          Опубликовать
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
