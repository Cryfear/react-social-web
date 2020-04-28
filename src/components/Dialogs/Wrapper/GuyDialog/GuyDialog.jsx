import React from "react";
import GuyWrapper from "./GuyWrapper/GuyWrapper";
import GuyMessages from "./GuyMessages/GuyMessages";

function GuyDialog(props) {
  // имя пользователя, статус
  // и последнее собщение диалога с ним
  return (
    <div>
      <GuyWrapper
        status={props.status}
        name={props.dialogs[props.index].name}
      />
      <GuyMessages id={props.index} dialogs={props.dialogs} />
    </div>
  );
}

export default GuyDialog;
