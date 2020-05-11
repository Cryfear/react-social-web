import React from "react";
import { Field } from "redux-form";

function LoginForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field placeholder="email" name="email" component="input" type="text" />
      <br />
      <Field
        placeholder="password"
        name="password"
        component="input"
        type="text"
      />
      <br />
      <Field component="input" name="remember" type="checkbox" />{" "}
      <span>remember me?</span>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default LoginForm;
