import { Fade, Grid, IconButton, Popover, Tab, Tabs } from "@material-ui/core";
import React, { useRef, useState } from "react";
import "./MainContent.css";
import { FilterIcon } from "./Icons";
import FilterPopover from "./FilterPopover";
import PortfolioPreviewItem from "./PortfolioPreviewItem";
import PortfolioItem from "./PortfolioItem";
import PortfolioDataJson from "../PortfolioData.json";
import FilterData from "./FilterData";
import { IItemPosition, IPortfolioItemData } from "./DataInterfaces";

interface Props {
  portfolioRef: React.LegacyRef<HTMLDivElement> | undefined;
  portfolioInView: boolean;
}

const Portfolio: React.FC<Props> = ({ portfolioRef, portfolioInView }) => {
  const [selectedData, setSelectedData] = useState<IPortfolioItemData | null>(
    null
  );
  const [anchorEl, setAnchorEl] = useState(null);
  const ref = useRef<HTMLDivElement>(null);
  const [selectionPosition, setSelectionPosition] =
    useState<IItemPosition | null>(null);
  const defaultSelection = new FilterData();

  const [filter, setFilter] = useState(defaultSelection);
  const PortfolioData: Array<IPortfolioItemData> = PortfolioDataJson;
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
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
            onClick={(e: React.BaseSyntheticEvent) =>
              setAnchorEl(e.currentTarget)
            }
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
                  element.score = 0;
                  if (filter.type[element.type as keyof typeof filter.type]) {
                    element.score++;
                  }
                  element.language.forEach((i) => {
                    if (filter.language[i as keyof typeof filter.language]) {
                      element.score && element.score++;
                    }
                  });
                  element.framework.forEach((i) => {
                    if (filter.framework[i as keyof typeof filter.framework]) {
                      element.score && element.score++;
                    }
                  });
                  return element.score;
                }
              })
                .sort((a, b) => (b.score ?? 0) - (a.score ?? 0))
                .map((element, index) => (
                  <Fade in={true} timeout={5000} key={index}>
                    <PortfolioPreviewItem
                      data={element}
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
};

export default Portfolio;
