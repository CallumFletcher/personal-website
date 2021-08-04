import React from "react";
import "./BottomBar.css";
import { IconButton, Button, useMediaQuery } from "@material-ui/core";
import DescriptionIcon from "@material-ui/icons/Description";
import EmailIcon from "@material-ui/icons/Email";
import { GitHub, LinkedIn } from "@material-ui/icons";

function BottomBar() {
  const breakpoint = useMediaQuery("(min-width:750px)");
  return (
    <div className="bottom-bar">
      <IconButton
        aria-label="github"
        onClick={() =>
          window.open("https://github.com/CallumFletcher", "_blank")
        }
      >
        <GitHub
          className="material-icon"
          style={breakpoint ? { fontSize: 36 } : { fontSize: 24 }}
        />
      </IconButton>
      <IconButton
        aria-label="linkedin"
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/callum-fletcher-570a841b7/",
            "_blank"
          )
        }
      >
        <LinkedIn
          className="material-icon"
          style={breakpoint ? { fontSize: 36 } : { fontSize: 24 }}
        />
      </IconButton>
      <Button
        aria-label="Resume"
        onClick={() =>
          window.open(
            "https://drive.google.com/file/d/1jZzIAXXBZtJ_WskhgeJBYUiEs-meT6yg/view?usp=sharing",
            "_blank"
          )
        }
      >
        {breakpoint && <p className="button-text">Resume</p>}

        <DescriptionIcon
          className="material-icon"
          style={breakpoint ? { fontSize: 36 } : { fontSize: 24 }}
        />
      </Button>
      <Button
        aria-label="email"
        onClick={() =>
          (window.location.href = "mailto:callum.fletcher@uwaterloo.ca")
        }
      >
        {breakpoint && <p className="button-text">Email</p>}
        <EmailIcon
          className="material-icon"
          style={breakpoint ? { fontSize: 36 } : { fontSize: 24 }}
        />
      </Button>
    </div>
  );
}

export default BottomBar;
