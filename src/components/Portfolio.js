import { Fade, Grid, IconButton, Popover, Tab, Tabs } from "@material-ui/core";
import React, { useRef, useState } from "react";
import "./MainContent.css";
import { FilterIcon } from "./Icons";
import FilterPopover from "./FilterPopover";
import PortfolioPreviewItem from "./PortfolioPreviewItem";
import PortfolioItem from "./PortfolioItem";

function Portfolio({ portfolioRef, portfolioInView }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const ref = useRef();
  //TODO: media query to lower number of items shown on small screen
  const [selectionPosition, setSelectionPosition] = useState(null);
  const defaultSelection = {
    type: {
      "Work Experience": false,
      "Personal Projects": false,
      "Hackathon Projects": false,
    },
    language: {
      JavaScript: false,
      Python: false,
      "HTML/CSS": false,
      "C#": false,
    },
    framework: {
      React: false,
      Express: false,
      "Node.js": false,
      ".Net Core": false,
      MongoDB: false,
      Firebase: false,
    },
  };
  const [filter, setFilter] = useState({
    page: 0,
    ...defaultSelection,
  });

  const handleChange = (event, newValue) => {
    setFilter((prev) => ({ ...defaultSelection, page: newValue }));
  };
  function cancelSelection() {
    setSelectionPosition(null);
  }
  return (
    <Fade in={portfolioInView} timeout={1000}>
      <div className="section" ref={portfolioRef} id="portfolio">
        <div className="portfolio-nav">
          <Tabs
            variant="fullWidth"
            value={filter.page}
            onChange={handleChange}
            className="portfolio-tabs"
            style={{
              marginBottom: 10,
            }}
            TabIndicatorProps={{ style: { background: "#ffb7f3" } }}
          >
            <Tab label="Featured" style={{ fontWeight: 400, fontSize: 18 }} />
            <Tab label="Projects" style={{ fontWeight: 400, fontSize: 18 }} />
            <Tab
              label="Work Experience"
              style={{ fontWeight: 400, fontSize: 18 }}
            />
          </Tabs>
          <IconButton
            onClick={(e) => setAnchorEl(e.currentTarget)}
            style={{ fontWeight: 400, fontSize: 18, color: "#ffb7f3" }}
          >
            <FilterIcon />
          </IconButton>
          <Popover
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={() => setAnchorEl(null)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <FilterPopover filter={filter} setFilter={setFilter} />
          </Popover>
        </div>
        {selectionPosition ? (
          <PortfolioItem
            cancelSelection={cancelSelection}
            initialPosition={{
              position: "fixed",
              width: selectionPosition.width,
              height: selectionPosition.height,
              top: selectionPosition.top,
              bottom: selectionPosition.bottom,
              left: selectionPosition.left,
              right: selectionPosition.right,
            }}
            finalPosition={{
              width: ref?.current?.getBoundingClientRect().width,
              height: ref?.current?.getBoundingClientRect().height,
              top: ref?.current?.getBoundingClientRect().top,
              bottom: ref?.current?.getBoundingClientRect().bottom,
              left: ref?.current?.getBoundingClientRect().left,
              right: ref?.current?.getBoundingClientRect().right,
            }}
          />
        ) : (
          <Fade in={true}>
            <Grid
              container
              spacing={0}
              ref={ref}
              alignContent="flex-start"
              className="portfolio-grid"
            >
              {[...Array(6)].map((element, index) => (
                <PortfolioPreviewItem
                  key={index}
                  name={index}
                  setSelectionPosition={setSelectionPosition}
                />
              ))}
            </Grid>
          </Fade>
        )}
      </div>
    </Fade>
  );
}

export default Portfolio;
