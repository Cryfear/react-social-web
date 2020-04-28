import React from "react";

function GuyWrapper(props) {
  if (props.status === "online") {
    return (
      <div className="dialogs dialogs__item dialogs__item-online">{props.name}</div>
    );
  } else {
    return (
      <div className="dialogs__item dialogs__item-offline">
        {props.name}
      </div>
    );
  }
}

export default GuyWrapper;
