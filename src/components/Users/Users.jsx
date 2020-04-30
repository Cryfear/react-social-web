import React from "react";
import "./Users.css";

function Users(props) {
  let buttons = Math.ceil(props.countUsers / props.countView);
  let spans = [];
  for (let i = 1; i <= buttons; i++) {
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
              <img
                className="avatarUser"
                src={
                  user.photos.small ||
                  "https://sun2.beltelecom-by-minsk.userapi.com/bstVldkt1nkT79RZoGYwXj3An8kx-Fht3sgtdQ/Xx4M4GhQmaA.jpg"
                }
                alt="ava"
              />
              <div>
                {user.followed ? (
                  <button
                    onClick={() => {
                      props.unfollow(user.id);
                    }}
                  >
                    unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      props.follow(user.id);
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
