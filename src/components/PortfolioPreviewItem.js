import { Grid } from "@material-ui/core";
import React, { useRef } from "react";
import "./MainContent.css";

function PortfolioPreviewItem({ setSelectionPosition, name }) {
  const ref = useRef();
  function handleClick() {
    setSelectionPosition(ref.current.getBoundingClientRect());
  }
  const schema = {
    title: "Example Tikj",
    subtitle: "subtitle lksjdfl ",
    time: "January 2020",
    description: "example description will go here lorem ipsum dolor est",
    type: "Personal Project",
    language: ["JavaScript"],
    framework: ["React", "Node.js"],
  };
  return (
    <Grid item xs={12} sm={6} lg={4} style={{ padding: 2 }}>
      <div
        className="portfolio-item"
        onClick={handleClick}
        ref={ref}
        style={{ width: "100%", height: "100%", minHeight: 125 }}
      >
        <div className="portfolio-preview-wrapper">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            <h2 className="portfolio-title">{schema.title}</h2>
            <h3 className="portfolio-subtitle">{schema.subtitle}</h3>
          </div>

          <img
            src="/python-logo.png"
            alt="python logo"
            style={{
              width: "50%",
              height: "auto",
              maxWidth: 100,
              maxHeight: 100,
            }}
          />
        </div>
      </div>
    </Grid>
  );
}

export default PortfolioPreviewItem;
