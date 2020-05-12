import React from "react";
import { Field } from "redux-form";
import { required, maxLength } from "../../utils/validate";
import { input } from "../assets/InputValidate";
import "./Login.css";

let maxLength15 = maxLength(15);

function LoginForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        placeholder="email"
        name="email"
        component={input}
        type="text"
        validate={[required]}
      />
      <br />
      <Field
        placeholder="password"
        name="password"
        component={input}
        type="text"
        validate={[required, maxLength15]}
      />
      <br />
      {props.error && <div className="login__warning">{props.error}</div>}
      <Field component="input" name="remember" type="checkbox" />
      <span>remember me?</span>
      <br />
      <button className="login__submit" type="submit">
        Войти
      </button>
    </form>
  );
}

export default LoginForm;
