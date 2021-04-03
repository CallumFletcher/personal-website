import React, { useState } from "react";
import "./NavMenu.css";

function NavMenu() {
  return (
    <>
      <div className="active-page"></div>
      {/* pointerEvents: "none" for active page */}
      <h3 className="page">About</h3>
      <h3 className="page">Portfolio</h3>
      <h3 className="page">Contact</h3>
    </>
  );
}

export default NavMenu;
