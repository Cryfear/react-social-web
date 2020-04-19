import React from "react";

function CreatePost(props) {
  let newPostElement = React.createRef();
  let onButtonClick = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    props.updateNewPost('');
  };
  let UpdaterPost = (text) => {
    text = newPostElement.current.value;
    props.updateNewPost(text)
  }
  return (
    <div className="createPost">
      <form>
        <input
          id="createPost"
          ref={newPostElement}
          onChange={UpdaterPost}
          type="text"
          value={props.postText}
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
