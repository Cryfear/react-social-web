import React from "react";
import { connect } from "react-redux";
import { setUser } from "../../../redux/auth-reducer";

class Auth extends React.Component {
  componentDidMount = () => {
    this.props.setUser(); // логинимся
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

let AuthContainer = connect(mapStateToProps, { setUser })(Auth);

export default AuthContainer;
