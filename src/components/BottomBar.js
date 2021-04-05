import React from "react";
import "./BottomBar.css";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { IconButton, Button, useMediaQuery } from "@material-ui/core";
import DescriptionIcon from "@material-ui/icons/Description";
import EmailIcon from "@material-ui/icons/Email";

function BottomBar() {
  const breakpoint = useMediaQuery("(min-width:750px)");
  return (
    <div className="bottom-bar">
      <IconButton
        onClick={() =>
          window.open("https://github.com/CallumFletcher", "_blank")
        }
      >
        <GithubIcon className="icon" />
      </IconButton>
      <IconButton
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/callum-fletcher-570a841b7/",
            "_blank"
          )
        }
      >
        <LinkedinIcon className="icon" />
      </IconButton>
      <Button>
        <p className="button-text">Resume</p>
        <DescriptionIcon
          className="material-icon"
          style={breakpoint ? { fontSize: 41 } : { fontSize: 29 }}
        />
      </Button>
      <Button
        onClick={() =>
          (window.location.href = "mailto:callumafletcher@gmail.com")
        }
      >
        <p className="button-text">Email</p>
        <EmailIcon
          className="material-icon"
          style={breakpoint ? { fontSize: 41 } : { fontSize: 29 }}
        />
      </Button>
    </div>
  );
}

export default BottomBar;
