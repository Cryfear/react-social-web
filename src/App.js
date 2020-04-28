import React from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Main from "./components/Main/Main.jsx";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route } from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";

function App(props) {
  return (
    <div className="Wrapper">
      <Header />
      <Nav />
      <Route
        path="/dialogs"
        render={() => <Dialogs dispatch={props.dispatch} dialogs={props.state.dialogs.guys} />}
      />
      <Route path="/news" render={News} />
      <Route path="/music" render={Music} />
      <Route path="/settings" render={Settings} />
      <Route
        path="/profile"
        render={() => (
          <Main 
          posts={props.state.myProfile.posts}
          text={props.state.myProfile.postText}
          />
        )}
      />
    </div>
  );
}

export default App;
