import React from "react";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

function MainContent({
  aboutRef,
  portfolioRef,
  contactRef,
  aboutInView,
  portfolioInView,
  contactInView,
}) {
  return (
    <div>
      <About aboutRef={aboutRef} aboutInView={aboutInView} />
      <Portfolio
        portfolioRef={portfolioRef}
        portfolioInView={portfolioInView}
      />
      <Contact contactRef={contactRef} contactInView={contactInView} />
    </div>
  );
}

export default MainContent;
