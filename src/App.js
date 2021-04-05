import React from "react";
import "./App.css";
import { useMediaQuery } from "@material-ui/core";
import NavMenu from "./components/NavMenu";
import MainContent from "./components/MainContent";
import { useInView } from "react-intersection-observer";
import BottomBar from "./components/BottomBar";

function App() {
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
  function handleScroll(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  return (
    <div className="root">
      <div className="bg" />
      <div className="vert-bg" />
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
        <div className="content" onScroll={handleScroll}>
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
