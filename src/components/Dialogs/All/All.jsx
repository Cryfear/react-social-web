import React from "react";

function All(props) {
  return (
    <div>
      <div className="dialogs">{props.dialog}</div>
      <div className="messages">{props.message}</div>
    </div>
  );
}

export default All;
