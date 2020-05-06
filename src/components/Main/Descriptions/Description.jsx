import React from "react";
import ProfileStatusContainer from "./ProfileStatusContainer";

function Description(props) {
  return (
    <div className="description">
      <img className="avatar" alt="avatar" src={props.myProfile.avatar}></img>
      <ProfileStatusContainer />
      <div className="education">{props.myProfile.education}</div>
      <div className="birthday">{props.myProfile.birthday}</div>
    </div>
  );
}

export default Description;
