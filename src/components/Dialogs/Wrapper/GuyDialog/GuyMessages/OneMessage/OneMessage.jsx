import React from "react";
import TextMessage from "./TextMessage/TextMessage";
import GuyWrapper from "../../GuyWrapper/GuyWrapper";
import "../GuyMessages.css";
import MessageAdd from "../../MessadeAdd/MessageAdd";

function OneMessage(props) {
  let messages = props.dialog.map((m, i) => {
    return <TextMessage key={i} message={m.message} />; // делаем массив из сообщений
  });

  // добавляем имя пользователя и его статус
  return (
    <div>
      <GuyWrapper status={props.status} name={props.name} />
      {messages}
      <MessageAdd dialogs={props.dialogs} dispatch={props.dispatch} id={props.id-1} />
    </div>
  );
}

export default OneMessage;
