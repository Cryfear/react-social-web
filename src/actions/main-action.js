const ADD_POST = "ADD-POST";
const NEW_POST_TEXT = "NEW-POST-TEXT";

export const addPostCreater = (postMessage) => ({
  type: "ADD-POST",
  message: postMessage,
});

export const updateNewPostCreater = (newtext) => ({
  type: "NEW-POST-TEXT",
  text: newtext,
});

let mainAction = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      state.posts.push({
        id: state.posts.length+1,
        message: action.message,
        likesCount: 0,
      });

      return state;

    case NEW_POST_TEXT:
      state.postText = action.text;
      return state;
    default:
      return state;
  }
};

export default mainAction;
