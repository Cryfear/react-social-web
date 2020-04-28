import CreatePost from "./CreatePost";
import {
  addPostCreater,
  updateNewPostCreater,
} from "../../../../redux/main-reducer";
import { connect } from "react-redux";

const mapToStateProps = (state) => {
  return {
    text: state.myProfile.postText,
  };
};

const mapToDispatchProps = (dispatch) => {
  return {
    onButtonClick: () => {
      dispatch(addPostCreater());
      dispatch(updateNewPostCreater(""));
    },

    updaterPost: (e) => {
      let text = e.currentTarget.value;
      dispatch(updateNewPostCreater(text));
    },
  };
};

let CreatePostContainer = connect(
  mapToStateProps,
  mapToDispatchProps
)(CreatePost);

export default CreatePostContainer;
