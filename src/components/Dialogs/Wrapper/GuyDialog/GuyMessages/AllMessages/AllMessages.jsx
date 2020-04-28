import React from "react";
import { Route } from "react-router-dom";
import OneMessage from "./OneMessage/OneMessage";

function AllMessages(props) {
  // отдельный диалог с определенным человеком, а именно роут на него
  return (
    <Route
      key={props.index}
      path={`/dialogs/${props.index + 1}`}
      render={() => {
        return (
          <OneMessage
            dialogs={props.dialogs}
            id={props.index + 1}
            status={props.status}
            name={props.name}
            dialog={props.dialog}
            dispatch={props.dispatch}
          />
        );
      }}
    />
  );
}

export default AllMessages;
