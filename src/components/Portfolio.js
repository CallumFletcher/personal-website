import { Fade, Grid, Tab, Tabs } from "@material-ui/core";
import React, { useState } from "react";

import "./MainContent.css";

function Portfolio({ portfolioRef, portfolioInView }) {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Fade in={portfolioInView} timeout={1000}>
      <div className="section" ref={portfolioRef} id="portfolio">
        <Tabs
          value={value}
          onChange={handleChange}
          style={{
            color: "#ffb7f3",
            marginBottom: 10,
          }}
          TabIndicatorProps={{ style: { background: "#ffb7f3" } }}
        >
          <Tab label="Featured" classes={{ root: { background: "blue" } }} />
          <Tab label="Projects" />
          <Tab label="Work Experience" />
        </Tabs>
        <Grid container spacing={1} style={{ height: "100%" }}>
          <Grid item xs={12} sm={6}>
            <div className="portfolio-item"></div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className="portfolio-item"></div>
          </Grid>{" "}
          <Grid item xs={12} sm={6}>
            <div className="portfolio-item"></div>
          </Grid>{" "}
          <Grid item xs={12} sm={6}>
            <div className="portfolio-item"></div>
          </Grid>{" "}
        </Grid>
      </div>
    </Fade>
  );
}

export default Portfolio;
