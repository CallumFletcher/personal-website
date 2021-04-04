import React, { useState } from "react";
import "./NavMenu.css";

function NavMenu() {
  return (
    <>
      <div className="active-page"></div>
      {/* pointerEvents: "none" for active page */}
      <h3 className="page">
        <a href="#about">About</a>
      </h3>
      <h3 className="page">
        <a href="#portfolio">Portfolio</a>
      </h3>
      <h3 className="page">
        <a href="#contact">Contact</a>
      </h3>
    </>
  );
}

export default NavMenu;
