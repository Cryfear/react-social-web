const FOLLOW_USER = "FOLLOW_USER";
const UNFOLLOW_USER = "UNFOLLOW_USER";
const SHOW_MORE_USERS = "SHOW_MORE_USERS";
const SET_USERS = "SET_USERS";
const SWITCH_PAGE = "SWITCH_PAGE";
const SET_TOTAL_PAGE = "SET_TOTAL_PAGE";
const TOGGLE_FETCHING = "TOGGLE_FETCHING";

let initialState = {
  users: [], // массив пользователей куда приходят пользователи с сервера
  currentPage: 1, // текущая страница, в данном случае начальная
  countView: 4, // по сколько пользователей показывать
  countUsers: 0, // сколько у нас всего пользователей
  isFetching: true, // состояние процесса загрузки пользователей, true - в процессе
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
        countUsers: action.total,
      };
    }

    case SWITCH_PAGE: {
      return {
        ...state,
        currentPage: action.page,
      };
    }

    case SHOW_MORE_USERS: {
      return state;
    }

    case TOGGLE_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }

    default:
      return { ...state };
  }
};

export const follow = (userId) => ({
  type: FOLLOW_USER,
  userId,
});

export const unfollow = (userId) => ({
  type: UNFOLLOW_USER,
  userId,
});

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};

export const setUserCount = (total) => {
  return {
    type: SET_TOTAL_PAGE,
    total,
  };
};

export const toggleFetching = (isFetching) => {
  return {
    type: TOGGLE_FETCHING,
    isFetching,
  };
};

export const switchPage = (page) => {
  return {
    type: SWITCH_PAGE,
    page,
  };
};

export default usersAction;
