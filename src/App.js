import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import { useMediaQuery } from "@material-ui/core";
import NavMenu from "./components/NavMenu";
import MainContent from "./components/MainContent";
import { useInView } from "react-intersection-observer";
import BottomBar from "./components/BottomBar";

function App() {
  const ref = useRef();
  const [sunHeight, setSunHeight] = useState(200);
  const titleBreakpoint = useMediaQuery("(min-width:750px)");
  const [aboutRef, aboutInView] = useInView({
    threshold: 0.1,
  });
  const [portfolioRef, portfolioInView] = useInView({
    threshold: 0.1,
  });
  const [contactRef, contactInView] = useInView({
    threshold: 0.1,
  });
  useEffect(() => {
    if (aboutInView) setSunHeight(200);
    else if (portfolioInView) setSunHeight(titleBreakpoint ? 80 : 50);
    else if (contactInView) setSunHeight(0);
  }, [contactInView, portfolioInView, aboutInView, titleBreakpoint]);
  return (
    <div className="root">
      <div className="bg-grid">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gridArea: "sun",
            zIndex: 25,
            background: "#0d0221",
            overflow: "hidden",
          }}
        >
          <div className="sun" style={{ marginTop: sunHeight }} />
        </div>
        <div className="sun-horizon" />
        <div className="bg" />
        <div className="vert-bg" />
      </div>

      <div className="body">
        <div className="title-container">
          {titleBreakpoint ? (
            <h1 className="title">Callum Fletcher</h1>
          ) : (
            <h1 className="title">Callum F</h1>
          )}

          {/* get rid of padding on smaller screen */}
        </div>
        <div className="nav-menu">
          <NavMenu
            aboutInView={aboutInView}
            portfolioInView={portfolioInView}
            contactInView={contactInView}
          />
        </div>
        <div className="content" ref={ref}>
          <MainContent
            aboutRef={aboutRef}
            portfolioRef={portfolioRef}
            contactRef={contactRef}
            aboutInView={aboutInView}
            portfolioInView={portfolioInView}
            contactInView={contactInView}
          />
        </div>
        <div className="bottom">
          <BottomBar />
        </div>
      </div>
    </div>
  );
}

export default App;
