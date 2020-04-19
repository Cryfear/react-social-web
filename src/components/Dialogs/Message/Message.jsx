import React from "react";
import { NavLink, withRouter} from "react-router-dom";

function Message(props) {
  return (
    <div>
      <NavLink to={`/dialogs/${props.id}`} activeClassName="nav__link__active">
        <div className="messages__item">{props.message}</div>
      </NavLink>
    </div>
  );
}

export default withRouter(Message);
