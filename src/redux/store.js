import { createStore, combineReducers, applyMiddleware } from "redux";
import mainAction from "./main-reducer";
import dialogsAction from "./dialogs-reducer";
import usersAction from "./users-reducer";
import authAction from "./auth-reducer";
import ThunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";

let reducers = combineReducers({
  myProfile: mainAction,
  dialogs: dialogsAction,
  users: usersAction,
  auth: authAction,
  form: formReducer,
});

let store = createStore(reducers, applyMiddleware(ThunkMiddleware));

window.store = store;

export default store;
