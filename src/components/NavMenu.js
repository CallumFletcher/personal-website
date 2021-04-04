import React, { useEffect, useRef, useState } from "react";
import "./NavMenu.css";

function NavMenu({ aboutInView, portfolioInView, contactInView }) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [activePagePosition, setActivePagePosition] = useState({
    width: 0,
    height: 0,
    display: "none",
  });
  const aboutRef = useRef();
  const portfolioRef = useRef();
  const contactRef = useRef();
  const [selectedPage, setSelectedPage] = useState(null);

  useEffect(() => {
    //get active page div to stick to page resize
    function handleResize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (selectedPage?.current) {
      const {
        width,
        height,
        top,
        bottom,
        left,
        right,
      } = selectedPage.current.getBoundingClientRect();
      setActivePagePosition({
        width,
        height,
        top: top - 10,
        bottom,
        left: left - 10,
        right,
      });
    }
  }, [selectedPage, dimensions]);
  useEffect(() => {
    console.log(aboutInView, portfolioInView, contactInView);
    function multipleInView(a, b, c) {
      if ((a && b) || (a && c) || (b && c)) {
        return true;
      }
      return false;
    }
    if (!multipleInView(aboutInView, portfolioInView, contactInView)) {
      console.log("passed");
      if (aboutInView) setSelectedPage(aboutRef);
      if (portfolioInView) setSelectedPage(portfolioRef);
      if (contactInView) setSelectedPage(contactRef);
    }
  }, [aboutInView, portfolioInView, contactInView]);
  return (
    <>
      <div className="active-page" style={activePagePosition}></div>
      {/* pointerEvents: "none" for active page */}
      <h3 className="page" ref={aboutRef}>
        <a href="#about">About</a>
      </h3>
      <h3 className="page" ref={portfolioRef}>
        <a href="#portfolio">Portfolio</a>
      </h3>
      <h3 className="page" ref={contactRef}>
        <a href="#contact">Contact</a>
      </h3>
    </>
  );
}

export default NavMenu;
