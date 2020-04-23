import React from "react";
import "./Dialogs.css";
import { Switch } from "react-router-dom";
import Wrapper from "./Wrapper/Wrapper";
import sorted from './sorted';

function Dialogs(props) {
  return (
    <Switch>
      <Wrapper
        allMsg = {props.dialogs}
        dialog_Messages={sorted.dialog_Messages}
        dialogs={sorted.dialogs_Items}
        messages={sorted.last_Messages}
        action={props.action}
      />
    </Switch>
  );
}

export default Dialogs;
