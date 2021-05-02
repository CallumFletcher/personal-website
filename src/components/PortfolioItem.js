import { Chip, IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
function PortfolioItem({
  initialPosition,
  finalPosition,
  cancelSelection,
  data,
}) {
  const [position, setPosition] = useState(initialPosition);
  const schema = {
    title: "Example Tikj",
    subtitle: "subtitle lksjdfl ",
    time: "January 2020",
    description: "example description will go here lorem ipsum dolor est",
    type: "Personal Project",
    language: ["JavaScript", "HTML/CSS"],
    framework: ["React", "Node.js"],
  };
  useEffect(() => {
    setPosition((prev) => ({
      ...prev,
      ...finalPosition,
    }));
    setTimeout(
      () =>
        setPosition({
          position: "static",
          width: "100%",
          height: "100%",
          margin: 0,
          padding: 0,
        }),
      1000
    ); //eslint-disable-next-line
  }, []);
  console.log(finalPosition);
  function handleExit() {
    setPosition((prev) => ({ ...prev, opacity: 0 }));
    setTimeout(cancelSelection, 100);
  }
  return (
    <div
      className="portfolio-item"
      style={{ ...position, transition: "all 0.4s" }}
    >
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3
            className="portfolio-subtitle"
            style={{
              fontSize: 14,
              padding: 10,
              paddingLeft: 25,
            }}
          >
            {data.time}
          </h3>
          <IconButton
            onClick={handleExit}
            style={{ padding: 0, paddingRight: 5 }}
          >
            <CloseIcon style={{ color: "#ffb7f3" }} />
          </IconButton>
        </div>

        <div className="portfolio-top-wrapper">
          <div
            style={{
              display: "flex",
              flexGrow: 1,

              alignItems: "flex-start",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            <h1
              className="portfolio-title"
              style={{ flexGrow: 1, textAlign: "left" }}
            >
              {data.title}
            </h1>
            <h3 className="portfolio-subtitle" style={{ textAlign: "left" }}>
              {data.subtitle}
            </h3>
          </div>

          <img
            src="/python-logo.png"
            alt="python logo"
            style={{
              width: "20%",
              height: "auto",
              maxHeight: 150,
              maxWidth: 150,
            }}
          />
        </div>
        <div
          style={{
            flexGrow: 1,
            padding: 25,
            paddingRight: 10,
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-between",
          }}
        >
          <p className="portfolio-description">{schema.description}</p>
          <div>
            <span
              className="portfolio-description"
              style={{
                fontSize: 16,
                paddingTop: 5,
                paddingBottom: 5,
                paddingRight: 5,
              }}
            >
              Languages:
            </span>
            {data.language.map((element, index) => (
              <Chip
                key={index}
                variant="outlined"
                label={element}
                style={{
                  color: "white",
                  borderColor: "#fff",
                  height: 28,
                  marginRight: 2,
                }}
              />
            ))}

            <br />
            <br />

            <span
              className="portfolio-description"
              style={{
                fontSize: 16,
                paddingTop: 5,
                paddingBottom: 5,
                paddingRight: 2,
              }}
            >
              Frameworks/tools:
            </span>
            {data.framework.map((element, index) => (
              <Chip
                key={index}
                variant="outlined"
                label={element}
                style={{
                  color: "#fff",
                  borderColor: "#fff",
                  height: 28,
                  marginRight: 2,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem;
