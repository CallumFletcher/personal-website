import React from "react";
import { Fade } from "@material-ui/core";
import "./MainContent.css";

function About({ aboutRef, aboutInView }) {
  return (
    <Fade in={aboutInView} timeout={1000}>
      <div className="section">
        <p className="text" id="about" ref={aboutRef}>
          Hi I'm Callum. I am a web developer and Engineering student at the
          University of Waterloo.
        </p>
      </div>
    </Fade>
  );
}

export default About;
