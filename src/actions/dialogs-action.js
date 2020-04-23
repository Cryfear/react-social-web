const ADD_MESSAGE = "ADD-MESSAGE";
const TYPE_MESSAGE = "TYPE-MESSAGE";

export const addMessageCreater = (textMessage, index) => ({
  type: ADD_MESSAGE,
  message: textMessage,
  index: index,
});

export const typeMessageCreater = (newtext, index) => ({
  type: TYPE_MESSAGE,
  text: newtext,
  index: index,
});

let dialogsAction = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      state.guys[action.index].messages.push({
        message: action.message,
      });

      state.guys[action.index].messageText = action.text = "";
      return state;

    case TYPE_MESSAGE:
      state.guys[action.index].messageText = action.text;
      return state;

    default:
      return state;
  }
};

export default dialogsAction;
