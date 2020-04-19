import React from "react";
import General from "../General/General";
import { Route } from "react-router-dom";
import All from "../All/All";
import Message from "../Message/Message";

function Wrapper(props) {
  function user_Messages(index) {
    let arr = [];
    for (let i = 0; i < props.guyDialog[index].props.message.length; i++) {
      arr.push(
        <Message
          id={i}
          key={i}
          message={props.guyDialog[index].props.message[i].message}
        />
      );
    }
    return arr;
  }
  console.log('dsadasd')
  let wrapper_Items = props.dialogs.map((m, index) => {
    return (
      <Route
        path={`/dialogs/${index + 1}`}
        render={() => (
          <General
            key={index}
            dialog={props.dialogs[index]}
            message={user_Messages(index)}
          />
        )}
      />
    );
  });
  return (
    <main className="content">
      {wrapper_Items}
      <Route
        exact
        path="/dialogs/"
        render={() => <All dialog={props.dialogs} message={props.messages} />}
      />
    </main>
  );
}

export default Wrapper;
