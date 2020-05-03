import React from "react";
import { connect } from "react-redux";
import { setAuthUser } from "../../../redux/auth-reducer";
import { AuthApi } from "../../../api/api";

class Auth extends React.Component {
  componentDidMount = () => {
    AuthApi.getMe().then((data) => {
      this.props.setAuthUser(data);
    });
  };

  render() {
    if (!this.props.isAuth) {
      return <div className="loginWrapper">not autorized</div>;
    }
    return <div className="loginWrapper">{this.props.login}</div>;
  }
}

let mapStateToProps = (state) => {
  let { email, id, login, isAuth } = state.auth;
  return {
    email,
    id,
    login,
    isAuth,
  };
};

let AuthContainer = connect(mapStateToProps, { setAuthUser })(Auth);

export default AuthContainer;
