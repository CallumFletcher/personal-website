import { Chip, Grid } from "@material-ui/core";
import React, { useRef } from "react";
import { IItemPosition, IPortfolioItemData } from "./DataInterfaces";
import "./MainContent.css";
interface Props {
  setSelectionPosition: React.Dispatch<
    React.SetStateAction<IItemPosition | null>
  >;
  data: IPortfolioItemData | null;
  setSelectedData: React.Dispatch<
    React.SetStateAction<IPortfolioItemData | null>
  >;
}

const PortfolioPreviewItem: React.FC<Props> = ({
  setSelectionPosition,
  data,
  setSelectedData,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  function handleClick() {
    setSelectedData(data);
    if (ref.current) {
      setSelectionPosition((prev) => ({
        ...prev,
        width: ref?.current?.getBoundingClientRect().width,
        height: ref?.current?.getBoundingClientRect().height,
        top: ref?.current?.getBoundingClientRect().top,
        bottom: ref?.current?.getBoundingClientRect().bottom,
        left: ref?.current?.getBoundingClientRect().left,
        right: ref?.current?.getBoundingClientRect().right,
      }));
    }
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
              {data?.title}
            </h2>
            {/* <h3 className="portfolio-subtitle">{data.subtitle}</h3> */}
          </div>

          <img
            src={data?.image}
            alt="logo"
            style={{
              width: "50%",
              height: "auto",
              maxWidth: 90,
              maxHeight: 90,
            }}
          />
        </div>
        {data?.language
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
        {data?.framework
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
};

export default PortfolioPreviewItem;
