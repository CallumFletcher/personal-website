import { Fade, Grid, IconButton, Popover, Tab, Tabs } from "@material-ui/core";
import React, { useRef, useState } from "react";
import "./MainContent.css";
import { FilterIcon } from "./Icons";
import FilterPopover from "./FilterPopover";
import PortfolioPreviewItem from "./PortfolioPreviewItem";
import PortfolioItem from "./PortfolioItem";
import PortfolioData from "../PortfolioData.json";

function Portfolio({ portfolioRef, portfolioInView }) {
  const [selectedData, setSelectedData] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const ref = useRef();
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
      Firebase: false,
      Azure: false,
      Flask: false,
      CockroachDB: false,
      MongoDB: false,
    },
  };
  const [filter, setFilter] = useState({
    page: 0,
    ...defaultSelection,
  });
  const handleChange = (event, newValue) => {
    console.log(newValue);
    setFilter((prev) => ({
      ...defaultSelection,
      type: {
        "Work Experience": newValue === 0 ? true : Boolean(newValue === 2),
        "Personal Projects": newValue === 0 ? true : Boolean(newValue === 1),
        "Hackathon Projects": Boolean(newValue === 0),
      },
      page: newValue,
    }));
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
            <Tab label="Work" style={{ fontWeight: 400, fontSize: 18 }} />
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
            data={selectedData}
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
          <Fade in>
            <Grid
              container
              spacing={0}
              ref={ref}
              alignContent="flex-start"
              className="portfolio-grid"
            >
              {PortfolioData.filter((element) => {
                if (filter.page === 0) return true;
                else if (filter.page === 1) {
                  return element.type === "Personal Projects";
                } else if (filter.page === 2) {
                  return element.type === "Work Experience";
                } else {
                  //TODO: implement rest of the sorting
                  element.score = 0;
                  if (filter.type[element.type]) {
                    element.score++;
                  }
                  element.language.forEach((i) => {
                    if (filter.language[i]) {
                      element.score++;
                    }
                  });
                  element.framework.forEach((i) => {
                    if (filter.framework[i]) {
                      element.score++;
                    }
                  });
                  return element.score;
                }
              })
                .sort((a, b) => b.score - a.score)
                .map((element, index) => (
                  <Fade in={true} timeout={5000}>
                    <PortfolioPreviewItem
                      data={element}
                      key={index}
                      setSelectedData={setSelectedData}
                      setSelectionPosition={setSelectionPosition}
                    />
                  </Fade>
                ))}
            </Grid>
          </Fade>
        )}
      </div>
    </Fade>
  );
}

export default Portfolio;
