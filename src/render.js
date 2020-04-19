import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

export let rerenderEntrieTree = (props) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={props} />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

