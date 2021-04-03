import React, { useEffect } from "react";
import "./App.css";

function App() {
  return (
    <div className="root">
      <div className="content">
        <div className="title-container">
          <h1 className="title">Callum</h1>
          {/* get rid of padding on smaller screen */}
          <h1 className="title" style={{ paddingLeft: 20 }}>
            Fletcher
          </h1>
        </div>
      </div>
      <div className="graph" />
      <div className="vert-graph" />
    </div>
  );
}

export default App;
