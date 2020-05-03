import React from "react";
import "./Header.css";
import AuthContainer from "./AuthContainer/AuthContainer";

function Header() {
  return (
    <header className="header">
      <img
        alt="img"
        src="https://avatars.mds.yandex.net/get-pdb/906157/78910427-dec6-453e-a3d0-36cd6d0e50f6/s1200?webp=false"
      ></img>
      <AuthContainer />
    </header>
  );
}

export default Header;
