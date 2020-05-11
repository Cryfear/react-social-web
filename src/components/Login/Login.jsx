import React from "react";
import LoginForm from "./LoginForm";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { loginUser } from "../../redux/auth-reducer";

export class Login extends React.Component {
  submit = (values) => {
    let { email, remember, password } = values;
    this.props.loginUser(email, password, remember);
  };
  render() {
    return (
      <div>
        <ContactForm onSubmit={this.submit} />
      </div>
    );
  }
}

let ContactForm = reduxForm({
  // a unique name for the form
  form: "login",
})(LoginForm);

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { loginUser })(Login);
