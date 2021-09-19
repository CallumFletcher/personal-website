import { Chip, IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import { IItemPosition, IPortfolioItemData } from "./DataInterfaces";

interface Props {
  initialPosition: IItemPosition;
  finalPosition: IItemPosition;
  cancelSelection: () => void;
  data: IPortfolioItemData | null;
}
const PortfolioItem: React.FC<Props> = ({
  initialPosition,
  finalPosition,
  cancelSelection,
  data,
}) => {
  const [position, setPosition] = useState(initialPosition);

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
    ); //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(finalPosition);
  function handleExit() {
    setPosition((prev) => ({ ...prev, opacity: 0 }));
    setTimeout(cancelSelection, 100);
  }
  return (
    <div
      className="portfolio-item"
      style={{ ...(position as object), transition: "all 0.4s" }}
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
            {data?.time}
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
              {data?.title}
            </h1>
            <h3 className="portfolio-subtitle" style={{ textAlign: "left" }}>
              {data?.links.map((element, index) => (
                <a
                  href={element.href}
                  key={index}
                  target="_blank"
                  rel="noreferrer noopener"
                  style={{
                    color: "#fff",
                    fontSize: 16,
                    textTransform: "capitalize",
                    textDecoration: "underline",
                  }}
                >
                  {element.title}
                </a>
              ))}
            </h3>
          </div>

          <img
            src={data?.image}
            alt="portfolio logo"
            style={{
              width: "20%",
              height: "auto",
              maxHeight: 90,
              maxWidth: 90,
            }}
          />
        </div>
        <div
          style={{
            flexGrow: 1,
            padding: 25,
            paddingTop: 10,
            paddingRight: 10,
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-between",
          }}
        >
          <ul>
            {data?.description.map((element, index) => (
              <li key={index} className="portfolio-description">
                {element}
              </li>
            ))}
          </ul>
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
            {data?.language.map((element, index) => (
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
            {data?.framework.map((element, index) => (
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
};

export default PortfolioItem;
