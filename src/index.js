import { rerenderEntrieTree } from "./render";
import store from './redux/store';

store.subscribe(() => rerenderEntrieTree());

