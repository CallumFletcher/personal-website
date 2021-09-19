import React from "react";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

interface Props {
  aboutRef: React.LegacyRef<HTMLDivElement> | undefined;
  portfolioRef: React.LegacyRef<HTMLDivElement> | undefined;
  contactRef: React.LegacyRef<HTMLDivElement> | undefined;
  aboutInView: boolean;
  portfolioInView: boolean;
  contactInView: boolean;
}

const MainContent: React.FC<Props> = ({
  aboutRef,
  portfolioRef,
  contactRef,
  aboutInView,
  portfolioInView,
  contactInView,
}) => {
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
};

export default MainContent;
