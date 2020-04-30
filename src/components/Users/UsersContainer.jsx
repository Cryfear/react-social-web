import { connect } from "react-redux";
import React from "react";
import Users from "./Users";
import {
  followUserAC,
  unFollowUserAC,
  setUsersAC,
  switchPageAC,
  setUserTotalAC,
} from "../../redux/users-reducer";
import * as axios from "axios";

let mapStateToProps = (state) => {
  return {
    users: state.users.users,
    currentPage: state.users.currentPage, // текущая страница, в данном случае начальная
    countView: state.users.countView, // по сколько пользователей показывать
    countUsers: state.users.countUsers, // сколько у нас всего пользователей
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followUserAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unFollowUserAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    switchPage: (page) => {
      dispatch(switchPageAC(page));
    },
    setUserCount: (total) => {
      dispatch(setUserTotalAC(total));
    },
  };
};

export class UsersAPI extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.countView}`
      )
      .then((response) => {
        this.props.setUserCount(response.data.totalCount);
        this.props.setUsers(response.data.items);
        console.log(this);
      });
  }

  switchPagers = (i) => {
    console.log(this);
    this.props.switchPage(i);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${i}&count=${this.countView}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }
  render() {
    return (
      <Users
        countUsers={this.props.countUsers}
        countView={this.props.countView}
        switchPagers={this.switchPagers}
        switchPage={this.props.switchPage}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
      />
    );
  }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI);

export default UsersContainer;
