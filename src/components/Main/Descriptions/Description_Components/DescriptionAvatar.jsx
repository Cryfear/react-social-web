import React from "react";

function DescriptionAvatar(props) {
  return (
    <div>
      <img
        className="avatar"
        alt="avatar"
        src={props.avatar}
      ></img>
    </div>
  );
}

export default DescriptionAvatar;
