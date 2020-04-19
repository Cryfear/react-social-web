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
import { addPost, updateNewPost } from "./data";

function App(props) {
  return (
    <div className="Wrapper">
      <Header />
      <Nav />
      <Route
        path="/dialogs"
        render={() => <Dialogs dialogs={props.state.dialogs.guys} />}
      />
      <Route path="/news" component={News} />
      <Route path="/music" component={Music} />
      <Route path="/settings" component={Settings} />
      <Route
        path="/profile"
        render={() => (
          <Main 
          posts={props.state.myProfile}
          text={props.state.myProfile.postText}
          addPost={addPost}
          updateNewPost={updateNewPost} />
        )}
      />
    </div>
  );
}

export default App;
