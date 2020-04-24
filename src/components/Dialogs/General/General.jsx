import React from "react";
import "./General.css";
import {
  addMessageCreater,
  typeMessageCreater,
} from "../../../actions/dialogs-reducer";

function General(props) {
  let addMessage = React.createRef();

  function typeMessage(e) {
    let text = addMessage.current.value;
    props.action(typeMessageCreater(text, props.id));
  }

  function sendMessage(e) {
    let text = addMessage.current.value;
    props.action(addMessageCreater(text, props.id));
    props.action(typeMessageCreater("", props.id));
  }

  return (
    <div>
      {props.dialog}
      {props.message}
      <input
        ref={addMessage}
        value={props.allMsg[props.id].messageText}
        onChange={typeMessage}
        id="typeMessage"
        type="text"
      />
      <button onClick={sendMessage} id="sendMessage" type="button">
        Отправить
      </button>
    </div>
  );
}

export default General;
