import { UsersApi } from "../api/api";

const ADD_POST = "ADD-POST";
const NEW_POST_TEXT = "NEW-POST-TEXT";
const NEW_STATUS_TEXT = "NEW_STATUS_TEXT";
const GET_USER = "GET_USER";
const TOGGLE_FETCHING = "TOGGLE_FETCHING";

let initialState = {
  posts: [
    { message: "Post 1", id: "1", likesCount: 12 },
    { message: "Post 2", id: "2", likesCount: 25 },
  ],
  postText: "",
  profile: null,
  isFetching: false,
  myProfile: {
    name: "Arthur Morphy",
    avatar:
      "https://sun9-47.userapi.com/c857520/v857520118/13765d/yWNm9_uF_XM.jpg",
    status: "Hello guys!",
    education: "Basic, none",
    birthday: "24.11.2001",
  },
};

export let mainAction = (state = { ...initialState }, action) => {
  switch (action.type) {
    case ADD_POST: {
      state.posts.push({
        id: state.posts.length + 1,
        message: state.postText,
        likesCount: 0,
      });
      return { ...state };
    }

    case NEW_POST_TEXT: {
      return { ...state, postText: action.text };
    }

    case NEW_STATUS_TEXT: {
      return { ...state, myProfile: {...state.myProfile, status: action.text}};
    }

    case GET_USER: {
      return { ...state, profile: action.profile };
    }

    case TOGGLE_FETCHING: {
      return {
        ...state,
        isFetching: action.toggle,
      };
    }

    default:
      return { ...state };
  }
};

export const addPostCreater = () => ({
  type: ADD_POST,
});

export const updateNewPostCreater = (text) => ({
  type: NEW_POST_TEXT,
  text,
});

export const updateStatusTextCreater = (text) => ({
  type: NEW_STATUS_TEXT,
  text,
});

export const toggleFetching = (toggle) => ({
  type: TOGGLE_FETCHING,
  toggle,
});

export const getUser = (profile) => {
  return {
    type: GET_USER,
    profile,
  };
};

export const checkUser = (userId) => {
  return (dispatch) => {
    UsersApi.checkUser(userId).then((response) => {
      dispatch(getUser(response));
      dispatch(toggleFetching(false));
    });
  };
};

export default mainAction;
