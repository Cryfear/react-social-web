import React from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route } from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import UsersContainer from "./components/Users/UsersContainer";
import MainContainer from "./components/Main/MainContainer";
import Login from "./components/Login/Login";

function App(props) {
  return (
    <div className="Wrapper">
      <Header />
      <Nav />
      <Route
        path="/dialogs"
        render={() => (
          <Dialogs
            dispatch={props.dispatch}
            dialogs={props.state.dialogs.guys}
          />
        )}
      />
      <Route path="/news" render={News} />
      <Route path="/music" render={Music} />
      <Route path="/settings" render={Settings} />
      <Route path="/users" render={() => <UsersContainer />} />
      <Route path="/profile/:userId?" render={() => <MainContainer />} />
      <Route path="/login" render={() => <Login />} />
    </div>
  );
}

export default App;
