const FOLLOW_USER = "FOLLOW_USER";
const UNFOLLOW_USER = "UNFOLLOW_USER";
const SHOW_MORE_USERS = "SHOW_MORE_USERS";
const SET_USERS = "SET_USERS";
const SWITCH_PAGE = "SWITCH_PAGE";
const SET_TOTAL_PAGE = 'SET_TOTAL_PAGE';

let initialState = {
  users: [],
  currentPage: 1, // текущая страница, в данном случае начальная
  countView: 4, // по сколько пользователей показывать
  countUsers: 0, // сколько у нас всего пользователей
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
        users: action.users,
      };
    }

    case SET_TOTAL_PAGE: {
      return {
        ...state,
        countUsers: action.total
      }
    }

    case SWITCH_PAGE: {
      console.log(action.page);
      return {
        ...state,
        currentPage: action.page,
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
  return {
    type: SET_USERS,
    users: users,
  };
};

export const setUserTotalAC = (total) => {
  return {
    type: SET_TOTAL_PAGE,
    total: total,
  };
};

export const switchPageAC = (page) => {
  return {
    type: SWITCH_PAGE,
    page: page,
  };
};

export default usersAction;
