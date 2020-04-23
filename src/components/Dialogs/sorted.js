import React from "react";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import store from "../../state";

let dialogs = store.getState().dialogs.guys;

let dialogs_Items = dialogs.map((d) => {
  return <Dialog key={d.id} name={d.name} status={d.status} />;
});

let last_Messages = dialogs.map((m) => {
  return (
    <Message
      id={m.id}
      key={m.id}
      message={m.messages[m.messages.length - 1].message}
    />
  );
});

let dialog_Messages = dialogs.map((m) => {
  return <Message id={m.id} key={m.id} message={m.messages} />;
});

let sorted = {
  dialogs_Items: dialogs_Items,
  last_Messages: last_Messages,
  dialog_Messages: dialog_Messages,
};

export default sorted;
