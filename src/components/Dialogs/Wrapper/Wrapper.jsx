import React from "react";
import GuyDialog from "./GuyDialog/GuyDialog";
import AllMessages from "./GuyDialog/GuyMessages/AllMessages/AllMessages";
import { Route } from "react-router-dom";

function Wrapper(props) {
  // обертка сообщенй начального уровня, где есть пользователь и его посл. сообщение
  let GuyDialogItems = props.dialogs.map((m, i) => {
    return (
      <GuyDialog status={m.status} key={i} dialogs={props.dialogs} index={i} />
    );
  });

  // массив диалогов, а именно ссылок, чтобы при нажатии на диалог, открывался какой-либо
  let RouterMessages = props.dialogs.map((m, i) => {
    return (
      <AllMessages
        dialogs={props.dialogs}
        status={m.status}
        name={m.name}
        dialog={m.messages}
        key={i}
        index={i}
        dispatch={props.dispatch}
      />
    );
  });

  return (
    <main className="content">
      <Route // роут для основной странички
        exact
        path={`/dialogs/`}
        render={() => {
          return GuyDialogItems;
        }}
      />
      {RouterMessages}
    </main>
  );
}

export default Wrapper;
