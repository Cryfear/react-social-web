import { UsersApi, myProfileApi } from "../api/api";
import { stopSubmit } from "redux-form";

const ADD_POST = "ADD-POST";
const NEW_POST_TEXT = "NEW-POST-TEXT";
const GET_USER = "GET_USER";
const TOGGLE_FETCHING = "TOGGLE_FETCHING";
const GET_STATUS = "GET_STATUS";
const TAKE_API_STATUS = "TAKE_API_STATUS";
const SET_PHOTO = "SET_PHOTO";
const GET_PROFILE_PHOTO = "GET_PROFILE_PHOTO";
const GET_MY_PROFILE = "GET_MY_PROFILE";

let initialState = {
  posts: [
    { message: "Post 1", id: "1", likesCount: 12 },
    { message: "Post 2", id: "2", likesCount: 25 },
  ],
  postText: "",
  profile: null, // user profile
  isFetching: true,
  myProfile: {
    aboutMe: "",
    avatar: "",
    status: "",
    lookingForAJob: "",
    lookingForAJobDescription: "",
    fullName: "",
    contacts: {
      github: "",
      vk: "",
      facebook: "",
      instagram: "",
      twitter: "",
      website: "",
      youtube: "",
      mainLink: "",
    },
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

    case GET_MY_PROFILE: {
      return {
        ...state,
        myProfile: {
          ...state.myProfile,
          aboutMe: action.obj.aboutMe,
          lookingForAJob: action.obj.lookingForAJob,
          lookingForAJobDescription: action.obj.lookingForAJobDescription,
          fullName: action.obj.fullName,
          contacts: {
            ...state.myProfile.contacts,
            github: action.obj.contacts.github,
            vk: action.obj.contacts.vk,
            facebook: action.obj.contacts.facebook,
            instagram: action.obj.contacts.instagram,
            twitter: action.obj.contacts.twitter,
            website: action.obj.contacts.website,
            youtube: action.obj.contacts.youtube,
            mainLink: action.obj.contacts.mainLink,
          },
        },
      };
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

export const getMyProfileCreater = (obj) => {
  return {
    type: GET_MY_PROFILE,
    obj,
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
    let response = await UsersApi.checkUser(userId);
    dispatch(getUser(response));
  };
};

export const getMyProfile = (userId) => {
  return async (dispatch) => {
    let response = await UsersApi.checkUser(userId);
    dispatch(getMyProfileCreater(response));
  };
};

export const setMyProfileDescription = (userId, obj) => {
  return async (dispatch) => {
    let error = await UsersApi.getMyProfile(userId, obj);
    let response = await UsersApi.checkUser(userId);
    if (response.resultCode === 0) {
      dispatch(getMyProfileCreater(response));
    } else {
      console.log(error.messages[0]);
      let action = stopSubmit("description", { _error: error.messages[0] });
      dispatch(action);
    }
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
