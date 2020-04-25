import React from "react";

function CreatePost(props) {
  let { text, onButtonClick, UpdaterPost } = props;
  return (
    <div className="createPost">
      <form>
        <input
          id="createPost"
          onChange={UpdaterPost}
          type="text"
          value={text}
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
