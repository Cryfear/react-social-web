import React from "react";
import { connect } from "react-redux";
import Main from "./Main";
import { getUser, toggleFetching, checkUser } from "../../redux/main-reducer";
import { withRouter, Redirect } from "react-router-dom";
import UserProfile from "./UserProfile/UserProfile";
import { withAuthRedirect } from "../HOC/withAuthRedirect";
import { compose } from "redux";
import LoaderImg from "../assets/LoaderImg";
import { takeApiStatus } from "../../redux/main-reducer";

class MainAPI extends React.Component {
  componentDidMount = () => {
    if (this.props.match.params.userId) {
      this.props.checkUser(this.props.match.params.userId);
    }
    this.props.takeApiStatus(this.props.id);
  };

  render = () => {
    if (!this.props.isAuth) return <Redirect to="/login" />;
    if (this.props.isFetching) return <LoaderImg />;
    else if (this.props.match.params.userId) {
      return (
        <UserProfile
          toggleFetching={this.props.toggleFetching}
          isFetching={this.props.isFetching}
          profile={this.props.profile}
        />
      );
    } else {
      return (
        <>
          <Main
            myProfile={this.props.myProfile}
            posts={this.props.posts}
            text={this.props.text}
          />
        </>
      );
    }
  };
}

let mapStateToProps = (state) => {
  return {
    posts: state.myProfile.posts,
    text: state.myProfile.postText,
    profile: state.myProfile.profile,
    isFetching: state.myProfile.isFetching,
    isAuth: state.auth.isAuth,
    myProfileId: state.auth.id,
    myProfile: state.myProfile.myProfile,
    id: state.auth.id,
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, {
    getUser,
    toggleFetching,
    checkUser,
    takeApiStatus, // получем статус из апи
  }),
  withAuthRedirect
)(MainAPI);
