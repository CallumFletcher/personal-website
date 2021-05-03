import { Chip, Grid } from "@material-ui/core";
import React, { useRef } from "react";
import "./MainContent.css";

function PortfolioPreviewItem({ setSelectionPosition, data, setSelectedData }) {
  //TODO: add tags to preview??
  const ref = useRef();
  function handleClick() {
    setSelectedData(data);
    setSelectionPosition(ref.current.getBoundingClientRect());
  }

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
            <h2
              className="portfolio-title"
              style={{ fontSize: 20, fontWeight: 400 }}
            >
              {data.title}
            </h2>
            {/* <h3 className="portfolio-subtitle">{data.subtitle}</h3> */}
          </div>

          <img
            src="/python-logo.png"
            alt="python logo"
            style={{
              width: "50%",
              height: "auto",
              maxWidth: 90,
              maxHeight: 90,
            }}
          />
        </div>
        {data.language
          .filter((element, index) => index < 2)
          .map((element, index) => (
            <Chip
              key={index}
              variant="outlined"
              label={element}
              style={{
                color: "white",
                borderColor: "#fff",
                height: 28,
                margin: 2,
              }}
            />
          ))}
        {data.framework
          .filter((element, index) => index < 2)
          .map((element, index) => (
            <Chip
              key={index}
              variant="outlined"
              label={element}
              style={{
                color: "white",
                borderColor: "#fff",
                height: 28,
                margin: 2,
              }}
            />
          ))}
      </div>
    </Grid>
  );
}

export default PortfolioPreviewItem;
