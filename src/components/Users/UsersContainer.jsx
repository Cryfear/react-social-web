import { connect } from "react-redux";
import React from "react";
import Users from "./Users";
import {
  follow,
  unfollow,
  toggleButtonsDisabled,
  getUsers,
} from "../../redux/users-reducer";
import LoaderImg from "../LoaderImg/LoaderImg";
import { withAuthRedirect } from "../HOC/withAuthRedirect";
import { compose } from "redux";

export class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.countView);
  }

  switchPagers = (i) => {
    this.props.getUsers(i, this.props.countView);
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <LoaderImg /> : null}
        <Users
          switchPagers={this.switchPagers}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          buttonsDisabled={this.props.buttonsDisabled}
        />
      </>
    );
  }
}

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
