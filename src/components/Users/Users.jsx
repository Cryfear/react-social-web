import React from "react";
import "./Users.css";
import * as axios from "axios";

function Users(props) {
  let { users, follow, unfollow, setUsers } = props;
  if (users.length === 0) {
    axios.get("http://localhost:3000/items").then((response) => {
      return setUsers(response.data);
    });
  }
      return (
    <div className="userWrapper">
      {users.map((user, i) => {
        return (
          <div key={i}>
            <div className="avatarFollow">
              <img className="avatarUser" src={user.photoUrl} alt="ava" />
              <div>
                {user.followed ? (
                  <button
                    onClick={() => {
                      unfollow(user.id);
                    }}
                  >
                    follow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      follow(user.id);
                    }}
                  >
                    unfollow
                  </button>
                )}
              </div>
            </div>
            <div className="other">
              <span className="userWrapper__name">{user.fullName} - </span>
              <span className="userWrapper__status">{user.status}</span>
              <div className="other__city">{user.country}</div>
              <div className="other__city">{user.city}</div>
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
