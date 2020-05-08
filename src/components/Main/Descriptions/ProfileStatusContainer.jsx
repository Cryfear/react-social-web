import React from "react";
import ProfileStatus from "./ProfileStatus";
import {
  updateStatusTextCreater,
  setStatus,
} from "../../../redux/main-reducer";
import { connect } from "react-redux";

class ProfileStatusContainer extends React.Component {
  render() {
    return (
      <>
        <ProfileStatus
          setStatus={this.props.setStatus}
          status={this.props.status}
          statusUpdater={this.props.updateStatusTextCreate}
          myProfile={this.props.myProfile}
        />
      </>
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
    setStatus(status) {
      dispatch(setStatus(status));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileStatusContainer);
