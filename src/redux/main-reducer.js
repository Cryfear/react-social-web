import { UsersApi, myProfileApi } from "../api/api";

const ADD_POST = "ADD-POST";
const NEW_POST_TEXT = "NEW-POST-TEXT";
const GET_USER = "GET_USER";
const TOGGLE_FETCHING = "TOGGLE_FETCHING";
const GET_STATUS = "GET_STATUS";
const TAKE_API_STATUS = "TAKE_API_STATUS";
const SET_PHOTO = "SET_PHOTO";
const GET_PROFILE_PHOTO = "GET_PROFILE_PHOTO";

let initialState = {
  posts: [
    { message: "Post 1", id: "1", likesCount: 12 },
    { message: "Post 2", id: "2", likesCount: 25 },
  ],
  postText: "",
  profile: null, // user profile
  isFetching: true,
  myProfile: {
    name: "Arthur Morphy",
    avatar:
      "https://sun9-47.userapi.com/c857520/v857520118/13765d/yWNm9_uF_XM.jpg",
    status: "",
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

    case GET_USER: {
      return { ...state, profile: action.profile };
    }

    case SET_PHOTO: {
      return {
        ...state,
        myProfile: {
          ...state.myProfile,
          avatar: action.file,
        },
      };
    }

    case GET_PROFILE_PHOTO: {
      return {
        ...state,
        myProfile: {
          ...state.myProfile,
          avatar: action.photo,
        },
      };
    }

    case GET_STATUS: {
      return {
        ...state,
        myProfile: { ...state.myProfile, status: action.status },
      };
    }

    case TAKE_API_STATUS:
      return {
        ...state,
        myProfile: { ...state.myProfile, status: action.status },
      };

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

export const toggleFetching = (toggle) => ({
  // загрузка страницы
  type: TOGGLE_FETCHING,
  toggle,
});

export const getUser = (profile) => {
  return {
    type: GET_USER,
    profile,
  };
};

export const getStatus = (status) => {
  // сетаем статус из апи
  return {
    type: GET_STATUS,
    status: status,
  };
};

export const setPhotoCreater = (file) => {
  return {
    type: SET_PHOTO,
    file,
  };
};

export const ApiStatus = (status) => {
  // берем статус из апи
  return {
    type: TAKE_API_STATUS,
    status,
  };
};

export const checkUser = (userId) => {
  return async (dispatch) => {
    dispatch(toggleFetching(true));
    let response = await UsersApi.checkUser(userId);
    dispatch(getUser(response));
    dispatch(toggleFetching(false));
  };
};

export const getProfilePhoto = (photo) => {
  return {
    type: GET_PROFILE_PHOTO,
    photo,
  };
};

export const setStatus = (status) => {
  return async (dispatch) => {
    await myProfileApi.setStatus(status);
    dispatch(getStatus(status));
  };
};

export const setPhoto = (file) => {
  return async (dispatch) => {
    let response = await myProfileApi.setPhoto(file);
    dispatch(setPhotoCreater(response.data.data.photos.large));
  };
};

export const takeApiStatus = (id) => {
  return async (dispatch) => {
    dispatch(toggleFetching(true));
    let status = await myProfileApi.getStatus(id);
    let photo = await UsersApi.checkUser(id);
    dispatch(getProfilePhoto(photo.photos.large));
    dispatch(ApiStatus(status));
    dispatch(toggleFetching(false));
  };
};

export default mainAction;
