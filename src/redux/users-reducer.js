const FOLLOW_USER = "FOLLOW_USER";
const UNFOLLOW_USER = "UNFOLLOW_USER";
const SHOW_MORE_USERS = "SHOW_MORE_USERS";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    // {
    //   photoUrl: "https://media2.24aul.ru/imgs/5bbc114523bbeb64d0197cc6/",
    //   id: "1",
    //   followed: true,
    //   avatar: "someava",
    //   fullName: "Arthur Morphy",
    //   city: "Mogilev",
    //   country: "Belarus",
    //   status: "im cool!",
    // },
    // {
    //   photoUrl: "https://media2.24aul.ru/imgs/5bbc114523bbeb64d0197cc6/",
    //   id: "2",
    //   followed: false,
    //   avatar: "someava",
    //   fullName: "Alexander Kit",
    //   city: "Mogilev",
    //   country: "Belarus",
    //   status: "im musucly now!",
    // },
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
