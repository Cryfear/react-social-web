import React from "react";
import "./General.css";
import {
  addMessageCreater,
  typeMessageCreater,
} from "../../../actions/dialogs-reducer";

function General(props) {
  console.log(props);
  function sendMessage() {
    let text = props.allMsg[props.id].messageText;
    props.dispatch(addMessageCreater(text, props.id));
    props.dispatch(typeMessageCreater("", props.id));
  }

  function typeMessage(e) {
    let text = e.currentTarget.value;
    props.dispatch(typeMessageCreater(text, props.id));
  }

  return (
    <div>
      {props.dialog}
      {props.message}
      <input
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
