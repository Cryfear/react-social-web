import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from './redux/store'

export let rerenderEntrieTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={store.getState()} dispatch={store.dispatch}/>
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderEntrieTree();