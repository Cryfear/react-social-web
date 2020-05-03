import React from "react";
import "./Users.css";
import { NavLink } from "react-router-dom";
import { UnfollowApi, FollowApi } from "../../api/api";

function Users(props) {
  // let buttons = Math.ceil(props.countUsers / props.countView);
  let spans = [];
  for (let i = 1; i <= 25; i++) {
    spans.push(i);
  }
  return (
    <div className="userWrapper">
      {spans.map((m, i) => {
        return (
          <button
            onClick={() => {
              props.switchPagers(i + 1);
            }}
            key={i}
          >
            {i + 1}
          </button>
        );
      })}
      {props.users.map((user, i) => {
        return (
          <div key={i}>
            <div className="avatarFollow">
              <NavLink exact to={`/profile/${user.id}`}>
                <img
                  className="avatarUser"
                  src={
                    user.photos.small ||
                    "https://sun2.beltelecom-by-minsk.userapi.com/bstVldkt1nkT79RZoGYwXj3An8kx-Fht3sgtdQ/Xx4M4GhQmaA.jpg"
                  }
                  alt="ava"
                />
              </NavLink>
              <div>
                {user.followed ? (
                  <button
                    disabled={props.buttonsDisabled.some(
                      (id) => id === user.id
                    )}
                    onClick={() => {
                      props.toggleButtonsDisabled(true, user.id);
                      UnfollowApi.unfollow(user.id).then((response) => {
                        if (response.resultCode === 0) {
                          props.toggleButtonsDisabled(false, user.id);
                          props.unfollow(user.id);
                        }
                      });
                    }}
                  >
                    unfollow
                  </button>
                ) : (
                  <button
                    disabled={props.buttonsDisabled.some((m) => m === user.id)}
                    onClick={() => {
                      props.toggleButtonsDisabled(true, user.id);
                      FollowApi.follow(user.id).then((response) => {
                        if (response.resultCode === 0) {
                          props.toggleButtonsDisabled(false, user.id);
                          props.follow(user.id);
                        }
                      });
                    }}
                  >
                    follow
                  </button>
                )}
              </div>
            </div>
            <div className="other">
              <span className="userWrapper__name"> {user.name} - </span>
              <span className="userWrapper__status"> {user.status} </span>
              <div className="other__city"> {user.country} </div>
              <div className="other__city"> {user.city} </div>
            </div>
          </div>
        );
      })}
      <button className="showMore" type="button">
        Показать еще
      </button>
    </div>
  );
}

export default Users;
