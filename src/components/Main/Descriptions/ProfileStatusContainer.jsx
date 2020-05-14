import React from "react";
import ProfileStatus from "./ProfileStatus";
import { setStatus } from "../../../redux/main-reducer";
import { connect } from "react-redux";

const ProfileStatusContainer = React.memo((props) => {
  return (
    <ProfileStatus
      setStatus={props.setStatus}
      status={props.status}
    />
  );
});

let mapStateToProps = (state) => {
  return {
    status: state.myProfile.myProfile.status,
  };
};

export default connect(mapStateToProps, { setStatus })(ProfileStatusContainer);
