import React from "react";
import LoginForm from "./LoginForm";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { loginUser } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";

const Login = React.memo((props) => {
  const submit = (values) => {
    let { email, remember, password } = values;
    props.loginUser(email, password, remember);
  };

  if (props.isAuth) return <Redirect to="profile" />;
  return (
    <div>
      <ContactForm onSubmit={submit} />
    </div>
  );
});

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
