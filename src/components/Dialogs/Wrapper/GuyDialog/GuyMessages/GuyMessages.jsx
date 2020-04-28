import React from "react";
import { NavLink } from "react-router-dom";

function GuyMessages(props) {
  let guy_message = props.dialogs[props.id].messages;
  // берем отдельный диалог человека, к которому вошли, для удобства читания кода
  // {guy_message[guy_message.length-1].message} - берем последнее сообщение диалога
  return (
    <NavLink to={`/dialogs/${props.id + 1}`}>
      <div className="messages__item messages">
        {guy_message[guy_message.length - 1].message}
      </div>
    </NavLink>
  );
}

export default GuyMessages;
