import React, { useEffect } from "react";
import { useMediaQuery } from "@material-ui/core";
import "./App.css";
import NavMenu from "./components/NavMenu";

function App() {
  return (
    <div className="root">
      <div className="bg" />
      <div className="vert-bg" />
      <div className="body">
        <div className="title-container">
          <h1 className="title">Callum</h1>
          {/* get rid of padding on smaller screen */}
          <h1 className="title">Fletcher</h1>
        </div>
        <div className="nav-menu">
          <NavMenu />
        </div>
        <div className="content">lkjlkjlk</div>
        <div className="bottom"></div>
      </div>
    </div>
  );
}

export default App;
