import { myProfileApi, AuthApi } from "../api/api";
import { stopSubmit } from "redux-form";

const AUTH_USER = "AUTH_USER";
const LOGOUT_USER = "LOGOUT_USER";
const LOGIN_USER = "LOGIN_USER";

let initialState = {
  login: null,
  email: null,
  id: null,
  isAuth: false,
};

export let authAction = (state = { ...initialState }, action) => {
  switch (action.type) {
    case AUTH_USER: {
      return {
        ...state,
        ...action.user,
        isAuth: true,
      };
    }

    case LOGOUT_USER: {
      return {
        ...state,
        isAuth: false,
      };
    }

    case LOGIN_USER: {
      return {
        ...state,
        isAuth: true,
      };
    }

    default:
      return { ...state };
  }
};

export const setAuthUser = (user) => ({
  type: AUTH_USER,
  user,
});

export const loginUserAction = () => ({
  type: LOGIN_USER,
});

export const logoutUserAction = () => ({
  type: LOGOUT_USER,
});

export const setUser = () => {
  return (dispatch) => {
    myProfileApi.getMe().then((data) => {
      console.log(data);
      if (data.login) {
        dispatch(setAuthUser(data));
      }
    });
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    AuthApi.logout().then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(logoutUserAction());
      }
    });
  };
};

export const loginUser = (email, password, remember) => {
  return (dispatch) => {
    AuthApi.login(email, password, remember).then((response) => {
      if (response.resultCode === 0) {
        myProfileApi.getMe().then((data) => {
          // получаем себя после логинизации.
          console.log(data);
          if (data.login) {
            dispatch(setAuthUser(data));
          }
        });
        dispatch(loginUserAction());
      } else {
        let action = stopSubmit("login", { _error: response.messages[0] });
        dispatch(action);
      }
    });
  };
};

export default authAction;
