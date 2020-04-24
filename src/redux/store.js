import { createStore, combineReducers } from 'redux';
import mainAction from '../actions/main-reducer';
import dialogsAction from '../actions/dialogs-reducer';

let reducers = combineReducers({
  myProfile: mainAction,
  dialogs: dialogsAction
})

let store = createStore(reducers);

export default store;