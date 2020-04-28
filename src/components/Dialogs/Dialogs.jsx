import React from "react";
import "./Dialogs.css";
import { Switch } from "react-router-dom";
import Wrapper from "./Wrapper/Wrapper";

function Dialogs(props) {
  return (
    <Switch>
      <Wrapper
        dialogs={props.dialogs}
        dispatch={props.dispatch}
      />
    </Switch>
  );
}

export default Dialogs;
