import React from "react";
import { connect } from "react-redux";
import Main from "./Main";
import { getUser, toggleFetching, checkUser } from "../../redux/main-reducer";
import { withRouter, Redirect } from "react-router-dom";
import UserProfile from "./UserProfile/UserProfile";
import { withAuthRedirect } from "../HOC/withAuthRedirect";
import { compose } from "redux";

class MainAPI extends React.Component {
  componentDidMount = () => {
    if (this.props.match.params.userId) {
      this.props.checkUser(this.props.match.params.userId);
    }
  };

  render = () => {
    if (!this.props.isAuth) return <Redirect to="/login" />;

    if (this.props.isFetching === true) {
      return (
        <img
          width="70"
          src="https://s4.gifyu.com/images/loading.gif"
          alt="fetching"
        />
      );
    }
    if (this.props.match.params.userId) {
      return (
        <UserProfile
          toggleFetching={this.props.toggleFetching}
          userId={this.props.match.params.userId}
          isFetching={this.props.isFetching}
          profile={this.props.profile}
        />
      );
    } else {
      return (
        <>
          <Main
            profile={this.props.profile}
            posts={this.props.posts}
            text={this.props.text}
          />
        </>
      );
    }
  };
}

let mapStateToProps = (state) => {
  let { posts, postText, profile, isFetching } = state.myProfile;
  return {
    posts,
    text: postText,
    profile,
    isFetching,
    isAuth: state.auth.isAuth,
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, {
    getUser,
    toggleFetching,
    checkUser,
  }),
  withAuthRedirect
)(MainAPI);
