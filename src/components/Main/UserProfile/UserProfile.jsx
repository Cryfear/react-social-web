import React from "react";
import LoaderImg from "../../LoaderImg/LoaderImg";

function UserProfile(props) {
  if (props.profile === null) return <LoaderImg />;
  else {
    return (
      <div className="UserProfile">
        <div className="UserProfile__photo">
          <img
            width="200"
            src={
              props.profile.photos.large ||
              props.profile.photos.small ||
              "https://sun2.beltelecom-by-minsk.userapi.com/bstVldkt1nkT79RZoGYwXj3An8kx-Fht3sgtdQ/Xx4M4GhQmaA.jpg"
            }
            alt="userPhoto"
            className="UserProfile__img"
          />
        </div>
        <div className="UserProfile__name">{props.profile.fullName}</div>
        <div className="UserProfile__contacts">
          <div className="UserProfile__social">
            facebook: {props.profile.contacts.facebook + ""}
          </div>
          <div className="UserProfile__social">
            guthub: {props.profile.contacts.github + ""}
          </div>
          <div className="UserProfile__social">
            instagram: {props.profile.contacts.instagram + ""}
          </div>
          <div className="UserProfile__social">
            mainLink: {props.profile.contacts.mainLink + ""}
          </div>
          <div className="UserProfile__social">
            twitter: {props.profile.contacts.twitter + ""}
          </div>
          <div className="UserProfile__social">
            vk: {props.profile.contacts.vk + ""}
          </div>
          <div className="UserProfile__social">
            website: {props.profile.contacts.website + ""}
          </div>
          <div className="UserProfile__social">
            youtube: {props.profile.contacts.youtube + ""}
          </div>
        </div>
        <div className="UserProfile__lookingJob">
          <div className="UserProfile__isLookin">looking for a job: </div>
          <div className="UserProfile__lookingDesc">
            looking for a job description:
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
