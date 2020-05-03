const AUTH_USER = "AUTH_USER";

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
        isAuth: true
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

export default authAction;
