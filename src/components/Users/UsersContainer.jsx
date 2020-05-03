import { connect } from "react-redux";
import React from "react";
import Users from "./Users";
import {
  follow,
  unfollow,
  setUsers,
  setUserCount,
  toggleFetching,
  toggleButtonsDisabled,
} from "../../redux/users-reducer";
import { UsersApi } from "../../api/api";
import LoaderImg from "../LoaderImg/LoaderImg";

export class UsersAPIComponent extends React.Component {
  componentDidMount() {
    // загружается один раз при первой отрисовке, если не был сменен url
    UsersApi.getUser(this.props.currentPage, this.props.countView).then(
      (data) => {
        this.props.toggleFetching(false);
        this.props.setUserCount(data.totalCount);
        this.props.setUsers(data.items);
      }
    );
  }

  switchPagers = (i) => {
    UsersApi.getUser(i, this.props.countView).then((data) => {
      this.props.toggleFetching(false);
      this.props.setUsers(data.items);
    });
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <LoaderImg /> : null}
        <Users
          countUsers={this.props.countUsers}
          countView={this.props.countView}
          switchPagers={this.switchPagers}
          switchPage={this.props.switchPage}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          toggleButtonsDisabled={this.props.toggleButtonsDisabled}
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
  };
};

let UsersContainer = connect(mapStateToProps, {
  // connect делает автоматическую обертку с dispatch
  follow,
  unfollow,
  setUsers,
  setUserCount,
  toggleFetching,
  toggleButtonsDisabled,
})(UsersAPIComponent);

export default UsersContainer;
