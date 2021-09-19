import { Button, Fade, Grid } from "@material-ui/core";
import { Email, GitHub, LinkedIn } from "@material-ui/icons";
import React from "react";
import ContactForm from "./ContactForm";
import { DevpostIcon } from "./Icons";
import "./MainContent.css";

interface Props {
  contactRef: React.LegacyRef<HTMLDivElement> | undefined;
  contactInView: boolean;
}

const Contact: React.FC<Props> = ({ contactRef, contactInView }) => {
  return (
    <Fade in={contactInView} timeout={1000}>
      <div
        className="section"
        id="contact"
        ref={contactRef}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflow: "scroll",
        }}
      >
        <ContactForm />
        <Grid container>
          <Grid
            item
            xs={6}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button
              onClick={() =>
                (window.location.href = "mailto:callum.fletcher@uwaterloo.ca")
              }
            >
              <Email className="material-icon" />
              <p className="button-text" style={{ textTransform: "none" }}>
                Email{" "}
              </p>
            </Button>
          </Grid>
          <Grid
            item
            xs={6}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/callumfletcher",
                  "_blank"
                )
              }
            >
              <LinkedIn className="material-icon" />
              <p className="button-text" style={{ textTransform: "none" }}>
                LinkedIn
              </p>
            </Button>
          </Grid>
          <Grid
            item
            xs={6}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button
              onClick={() =>
                window.open("https://github.com/CallumFletcher", "_blank")
              }
            >
              <GitHub className="material-icon" />
              <p className="button-text" style={{ textTransform: "none" }}>
                Github
              </p>
            </Button>
          </Grid>
          <Grid
            item
            xs={6}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button
              onClick={() => window.open("https://devpost.com/CallumFletcher")}
            >
              <DevpostIcon className="material-icon" />
              <p className="button-text" style={{ textTransform: "none" }}>
                DevPost
              </p>
            </Button>
          </Grid>
        </Grid>
      </div>
    </Fade>
  );
};

export default Contact;
