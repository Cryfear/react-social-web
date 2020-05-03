import React from "react";
import { connect } from "react-redux";
import * as axios from "axios";
import Main from "./Main";
import { getUser, toggleFetching } from "../../redux/main-reducer";
import { withRouter } from "react-router-dom";
import UserProfile from "./UserProfile/UserProfile";

class MainAPI extends React.Component {
  componentDidMount = () => {
    if (this.props.match.params.userId) {
      this.props.toggleFetching(true);
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params.userId}`
        )
        .then((response) => {
          this.props.getUser(response.data);
          this.props.toggleFetching(false);
          console.log(response.data);
        });
    }
  };

  render = () => {
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
          getUser={this.props.getUser}
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
  };
};

let MainContainer = connect(mapStateToProps, { getUser, toggleFetching })(
  MainAPI
);

export default withRouter(MainContainer);
