import { connect } from "react-redux";
import React from "react";
import Users from "./Users";
import {
  follow,
  unfollow,
  setUsers,
  switchPage,
  setUserCount,
  toggleFetching,
} from "../../redux/users-reducer";
import * as axios from "axios";

let mapStateToProps = (state) => {
  let { users, currentPage, countView, countUsers, isFetching } = state.users; // деструктуризация
  return {
    users,
    currentPage, // текущая страница, в данном случае начальная
    countView, // по сколько пользователей показывать
    countUsers, // сколько у нас всего пользователей
    isFetching // состояние загрузки пользователей
  };
};

export class UsersAPI extends React.Component {
  componentDidMount() { // загружается один раз при первой отрисовке, если не был сменен url
    this.props.toggleFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.countView}`
      )
      .then((response) => {
        this.props.toggleFetching(false);
        this.props.setUserCount(response.data.totalCount);
        this.props.setUsers(response.data.items);
      });
  }

  switchPagers = (i) => {
    this.props.toggleFetching(true);
    this.props.switchPage(i);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${i}&count=${this.props.countView}`
      )
      .then((response) => {
        this.props.toggleFetching(false);
        this.props.setUsers(response.data.items);
      });
  };
  render() {
    return (
      <>
        {this.props.isFetching ? (
          <img
            width="40"
            src="https://s4.gifyu.com/images/loading.gif"
            alt="fetching"
          />
        ) : null}
        <Users
          countUsers={this.props.countUsers}
          countView={this.props.countView}
          switchPagers={this.switchPagers}
          switchPage={this.props.switchPage}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />
      </>
    );
  }
}

let UsersContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  switchPage,
  setUserCount,
  toggleFetching
})(UsersAPI);

export default UsersContainer;
