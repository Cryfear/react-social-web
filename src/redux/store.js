import { createStore, combineReducers } from 'redux';
import mainAction from './main-reducer';
import dialogsAction from './dialogs-reducer';
import usersAction from './users-reducer';

let reducers = combineReducers({
  myProfile: mainAction,
  dialogs: dialogsAction,
  users: usersAction
})

let store = createStore(reducers);

export default store;