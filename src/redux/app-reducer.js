import { setUser, setAuthUser } from "./auth-reducer";
import { myProfileApi } from "../api/api";

const IS_INITIALIZED = "IS_INITIALIZED";

let initialState = {
  initialized: false,
};

let appAction = (state = { ...initialState }, action) => {
  switch (action.type) {
    case IS_INITIALIZED: {
      return {
        ...state,
        initialized: true,
      };
    }

    default:
      return { ...state };
  }
};

export const initializedCreater = () => {
  return { type: IS_INITIALIZED };
};

export const initializedSuccess = () => {
  return (dispatch) => {
    return myProfileApi
      .getMe()
      .then((data) => {
        console.log(data);
        if (data.login) {
          dispatch(setAuthUser(data));
        }
      })
      .then(() => dispatch(initializedCreater()));
  };
};

export default appAction;
