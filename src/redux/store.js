import { createStore, combineReducers } from "redux";
import mainAction from "./main-reducer";
import dialogsAction from "./dialogs-reducer";
import usersAction from "./users-reducer";
import authAction from "./auth-reducer";

let reducers = combineReducers({
  myProfile: mainAction,
  dialogs: dialogsAction,
  users: usersAction,
  auth: authAction,
});

let store = createStore(reducers);

window.store = store;

export default store;
