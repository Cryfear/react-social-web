import React, { useState } from "react";
import "./Users.css";
import { NavLink } from "react-router-dom";

let Users = React.memo((props) => {
  let [prev, setPrev] = useState(1);
  let [next, setNext] = useState(5);
  let [currentPage, setCurrentPage] = useState(1);
  let allButtonsView = (prev, next) => {
    let allButtons = [];
    for (let i = prev; i <= next; i++) {
      allButtons.push(i);
    }
    return allButtons.map((item, index) => {
      return (
        <button
          className={item === currentPage ? "PageActive" : ""}
          onClick={() => {
            setCurrentPage(item); // делаем страницу текущей
            props.switchPagers(item); // меняем страницу пользователей на текущую
          }}
          key={index}
        >
          {item}
        </button>
      );
    });
  };

  return (
    <div className="userWrapper">
      <button
        onClick={() => {
          if (prev > 5) {
            setCurrentPage(prev - 1); // делаем -1, потому что мы возвращаемся на пред стр
            props.switchPagers(prev - 1);
            setPrev(prev - 5); // откатываемся на 5 страниц
            setNext(next - 5);
          }
        }}
      >
        prev
      </button>
      {allButtonsView(prev, next)}
      <button
        onClick={() => {
          if (next < 1000) {
            // будем допускать что всего 1000 страниц
            props.switchPagers(next + 1); // делаем +1 потому что идем вперед
            setCurrentPage(next + 1);
            setNext(next + 5); // идем вперед на пять страниц
            setPrev(prev + 5);
          }
        }}
      >
        next
      </button>
      {props.users.map((user, i) => {
        return (
          <div key={i}>
            <div className="avatarFollow">
              <NavLink exact to={`/profile/${user.id}`}>
                <img
                  className="avatarUser"
                  src={
                    user.photos.small ||
                    "https://sun9-58.userapi.com/LA8GEcGKOMA6hBB2OrEu7EC4FhWRYX_Vkl7VhA/XtiUVoelf2c.jpg"
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
                      props.unfollow(user.id);
                    }}
                  >
                    unfollow
                  </button>
                ) : (
                  <button
                    disabled={props.buttonsDisabled.some((m) => m === user.id)}
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
      <button
        className="showMore"
        type="button"
        onClick={() => {
          setCurrentPage(currentPage + 1);
          if (currentPage >= next) {
            setNext(next + 5);
            setPrev(prev + 5);
          }
          return props.showMore(currentPage || 1);
        }}
      >
        Показать еще
      </button>
    </div>
  );
});

export default Users;
