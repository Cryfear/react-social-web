import React from "react";
import { NavLink } from "react-router-dom";

function Dialog(props) {
  if (props.status === "online") {
    return (
      <div className="dialogs__item dialogs__item-online">
        <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
      </div>
    );
  } else {
    return (
      <div className="dialogs__item  dialogs__item-offline">
        <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
      </div>
    );
  }
}

export default Dialog;
