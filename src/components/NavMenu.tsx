import React, { RefObject, useEffect, useRef, useState } from "react";
import "./NavMenu.css";

interface Props {
  aboutInView: boolean;
  portfolioInView: boolean;
  contactInView: boolean;
}

const NavMenu: React.FC<Props> = ({
  aboutInView,
  portfolioInView,
  contactInView,
}) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [activePagePosition, setActivePagePosition] = useState({
    width: 0,
    height: 0,
    display: "none",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  });
  const aboutRef = useRef<HTMLParagraphElement>(null);
  const portfolioRef = useRef<HTMLParagraphElement>(null);
  const contactRef = useRef<HTMLParagraphElement>(null);
  const [selectedPage, setSelectedPage] =
    useState<RefObject<HTMLParagraphElement> | null>(null);

  useEffect(() => {
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
      const { width, height, top, bottom, left, right } =
        selectedPage.current.getBoundingClientRect();
      setActivePagePosition((prev) => ({
        ...prev,
        display: "inline",
        width,
        height,
        top: top - 10,
        bottom,
        left: left - 10,
        right,
      }));
    }
  }, [selectedPage, dimensions]);
  useEffect(() => {
    function multipleInView(a: boolean, b: boolean, c: boolean) {
      return (a && b) || (a && c) || (b && c);
    }
    if (!multipleInView(aboutInView, portfolioInView, contactInView)) {
      if (aboutInView) setSelectedPage(aboutRef);
      if (portfolioInView) setSelectedPage(portfolioRef);
      if (contactInView) setSelectedPage(contactRef);
    }
  }, [aboutInView, portfolioInView, contactInView]);
  return (
    <>
      <div className="active-page" style={activePagePosition}></div>
      {/* pointerEvents: "none" for active page */}
      <p
        className="page"
        ref={aboutRef}
        style={aboutInView ? { pointerEvents: "none" } : {}}
      >
        <a href="#about">About</a>
      </p>
      <p
        className="page"
        ref={portfolioRef}
        style={portfolioInView ? { pointerEvents: "none" } : {}}
      >
        <a href="#portfolio">My Work</a>
      </p>
      <p
        className="page"
        ref={contactRef}
        style={contactInView ? { pointerEvents: "none" } : {}}
      >
        <a href="#contact">Contact</a>
      </p>
    </>
  );
};

export default NavMenu;
