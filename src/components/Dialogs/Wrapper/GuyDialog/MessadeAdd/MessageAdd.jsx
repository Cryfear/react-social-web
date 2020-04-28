import React from "react";
import {
  addMessageCreater,
  typeMessageCreater,
} from "../../../../../redux/dialogs-reducer";

function MessageAdd(props) {
  let text = props.dialogs[props.id].messageText;
  let elem = React.createRef("elem");

  function onButtonClick(e) {
    props.dispatch(addMessageCreater(elem.current.value, props.id));
    props.dispatch(typeMessageCreater("", props.id));
  }

  function updaterMessage(e) {
    let text = e.currentTarget.value;
    props.dispatch(typeMessageCreater(text, props.id));
  }

  return (
    <div>
      <input
        ref={elem}
        id={props.id}
        onChange={updaterMessage}
        value={text}
        type="text"
      />
      <button id={props.id} onClick={onButtonClick} type="button">
        Отправить
      </button>
    </div>
  );
}

export default MessageAdd;
