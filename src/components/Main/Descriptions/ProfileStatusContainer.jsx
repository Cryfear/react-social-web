import React from "react";
import ProfileStatus from "./ProfileStatus";
import { updateStatusTextCreater } from "../../../redux/main-reducer";
import { connect } from "react-redux";

class ProfileStatusContainer extends React.Component {
  render() {
    return (
      <ProfileStatus
        status={this.props.status}
        lol={this.props.updateStatusTextCreate}
        myProfile={this.props.myProfile}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    myProfile: state.myProfile.myProfile,
    status: state.myProfile.myProfile.status,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateStatusTextCreate(text) {
      text = text.target.value;
      dispatch(updateStatusTextCreater(text));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileStatusContainer);
