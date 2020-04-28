import { createStore, combineReducers } from 'redux';
import mainAction from './main-reducer';
import dialogsAction from './dialogs-reducer';

let reducers = combineReducers({
  myProfile: mainAction,
  dialogs: dialogsAction
})

let store = createStore(reducers);

export default store;