import { connect } from "react-redux";
import React, { useEffect } from "react";
import Users from "./Users";
import {
  follow,
  unfollow,
  toggleButtonsDisabled,
  getUsers,
} from "../../redux/users-reducer";
import LoaderImg from "../assets/LoaderImg";
import { withAuthRedirect } from "../HOC/withAuthRedirect";
import { compose } from "redux";

const UsersAPIComponent = React.memo((props) => {
  useEffect(() => {
    props.getUsers(props.currentPage, props.countView);
  });

  const switchPagers = (i) => {
    props.getUsers(i, props.countView);
  };

  return (
    <>
      {props.isFetching ? (
        <LoaderImg />
      ) : (
        <Users
          switchPagers={switchPagers}
          users={props.users}
          follow={props.follow}
          unfollow={props.unfollow}
          buttonsDisabled={props.buttonsDisabled}
        />
      )}
    </>
  );
});

let mapStateToProps = (state) => {
  let {
    users,
    currentPage,
    countView,
    countUsers,
    isFetching,
    buttonsDisabled,
  } = state.users; // деструктуризация
  return {
    users,
    currentPage, // текущая страница, в данном случае начальная
    countView, // по сколько пользователей показывать
    countUsers, // сколько у нас всего пользователей
    isFetching, // состояние загрузки пользователей
    buttonsDisabled, // состояние выключеной или включенной кнопки
    isAuth: state.auth.isAuth,
  };
};

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    toggleButtonsDisabled,
    getUsers,
  }),
  withAuthRedirect
)(UsersAPIComponent);
