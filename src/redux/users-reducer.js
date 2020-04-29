const FOLLOW_USER = "FOLLOW_USER";
const UNFOLLOW_USER = "UNFOLLOW_USER";
const SHOW_MORE_USERS = "SHOW_MORE_USERS";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
  ],
};

export let usersAction = (state = { ...initialState }, action) => {
  switch (action.type) {
    case FOLLOW_USER: {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true }; // копию изера делаем и меняем фоллоу
          }
          return user;
        }),
      };
    }

    case UNFOLLOW_USER: {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false }; // копию изера делаем и меняем фоллоу
          }
          return user;
        }),
      };
    }

    case SET_USERS: {
      return {
        ...state,
        users: [...state.users, ...action.users],
      };
    }

    case SHOW_MORE_USERS: {
      return state;
    }

    default:
      return { ...state };
  }
};

export const followUserAC = (userId) => ({
  type: FOLLOW_USER,
  userId: userId,
});

export const unFollowUserAC = (userId) => ({
  type: UNFOLLOW_USER,
  userId: userId,
});

export const setUsersAC = (users) => {
  console.log(users);
  return {
    type: SET_USERS,
    users: users,
  };
};

export default usersAction;
