import React from "react";

function Post(props) {
  return (
    <div className="post">
      {props.message}
      <button
        className="likes"
        onClick={function (event) {
          //'<img width="20" alt="like" src="http://clipart-library.com/images_k/like-transparent-background/like-transparent-background-1.jpg"></img>' +
          //'<img width="20" alt="like" src="http://clipart-library.com/images_k/like-transparent-background/like-transparent-background-15.jpg"></img>' +
        }}
      >
        <span className="like_change">
          <img
            width="20"
            alt="like"
            src="http://clipart-library.com/images_k/like-transparent-background/like-transparent-background-15.jpg"
          ></img>
          {props.likesCount}
        </span>
      </button>
    </div>
  );
}

export default Post;
