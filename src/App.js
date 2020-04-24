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
  console.log(props.store)
  return (
    <div className="Wrapper">
      <Header />
      <Nav />
      <Route
        path="/dialogs"
        render={() => <Dialogs action={props.store.dispatch} dialogs={props.store.getState().dialogs.guys} />}
      />
      <Route path="/news" render={News} />
      <Route path="/music" render={Music} />
      <Route path="/settings" render={Settings} />
      <Route
        path="/profile"
        render={() => (
          <Main 
          posts={props.store.getState().myProfile.posts}
          text={props.store.getState().myProfile.postText}
          action={props.store.dispatch} />
        )}
      />
    </div>
  );
}

export default App;
