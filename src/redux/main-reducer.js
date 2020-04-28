const ADD_POST = "ADD-POST";
const NEW_POST_TEXT = "NEW-POST-TEXT";

let initialState = {
  posts: [
    { message: "Post 1", id: "1", likesCount: 12 },
    { message: "Post 2", id: "2", likesCount: 25 },
  ],
  postText: "",
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
      return {...state, postText: action.text};
    }
    default:
      return { ...state };
  }
};

export const addPostCreater = () => ({
  type: ADD_POST,
});

export const updateNewPostCreater = (newtext) => ({
  type: NEW_POST_TEXT,
  text: newtext,
});

export default mainAction;
