import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <div className="settings">
        <NavLink exact to="/profile" activeClassName="nav__link__active">Profile</NavLink>
      </div>
      <div  className="settings">
        <NavLink to="/dialogs" activeClassName="nav__link__active">Messages</NavLink>
      </div>
      <div  className="settings">
        <NavLink to="/news" activeClassName="nav__link__active">News</NavLink>
      </div>
      <div  className="settings">
        <NavLink to="/music" activeClassName="nav__link__active">Music</NavLink>
      </div>
      <div  className="settings">
        <NavLink to="/settings" activeClassName="nav__link__active">Settings</NavLink>
      </div>
    </nav>
  );
}

export default Nav;
