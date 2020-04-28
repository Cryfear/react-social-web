import { connect } from "react-redux";
import Users from "./Users";
import {
  followUserAC,
  unFollowUserAC,
  setUsersAC,
} from "../../redux/users-reducer";

let mapStateToProps = (state) => {
  return {
    users: state.users.users
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
  };
};

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
