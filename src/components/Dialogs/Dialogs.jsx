import React from "react";
import "./Dialogs.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import { Switch } from "react-router-dom";
import Wrapper from "./Wrapper/Wrapper";

function Dialogs(props) {
  let dialogs_Items = props.dialogs.map((d) => {
    return <Dialog key={d.id} name={d.name} status={d.status} />;
  });

  let messages_Items = props.dialogs.map((m) => {
    return (
      <Message
        id={m.id}
        key={m.id}
        message={m.messages[m.messages.length - 1].message}
      />
    );
  });

  let guy_Dialog = props.dialogs.map((m) => {
    return <Message id={m.id} key={m.id} message={m.messages} />;
  });

  return (
    <Switch>
      <Wrapper
        allMsg = {props.dialogs}
        guyDialog={guy_Dialog}
        dialogs={dialogs_Items}
        messages={messages_Items}
      />
    </Switch>
  );
}

export default Dialogs;
