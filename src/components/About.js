import React from "react";
import { Fade } from "@material-ui/core";
import "./MainContent.css";

function About({ aboutRef, aboutInView }) {
  return (
    <Fade in={aboutInView} timeout={1000}>
      <div className="section" id="about" ref={aboutRef}>
        <p className="text">
          Hi I'm Callum. I am a web developer and Engineering student at the
          University of Waterloo.
        </p>
      </div>
    </Fade>
  );
}

export default About;
