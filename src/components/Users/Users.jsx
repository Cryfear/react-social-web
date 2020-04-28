import React from "react";
import "./Users.css";

function Users(props) {
  let { users, follow, unfollow, setUsers } = props;
  if (users.length === 0) {
    setUsers([
      {
        photoUrl: "https://media2.24aul.ru/imgs/5bbc114523bbeb64d0197cc6/",
        id: "1",
        followed: true,
        avatar: "someava",
        fullName: "Arthur Morphy",
        city: "Mogilev",
        country: "Belarus",
        status: "im cool!",
      },
      {
        photoUrl: "https://media2.24aul.ru/imgs/5bbc114523bbeb64d0197cc6/",
        id: "2",
        followed: false,
        avatar: "someava",
        fullName: "Alexander Kit",
        city: "Mogilev",
        country: "Belarus",
        status: "im musucly now!",
      },
    ]);
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
