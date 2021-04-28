import { IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
function PortfolioItem({ initialPosition, finalPosition, cancelSelection }) {
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
    );
  }, [finalPosition]);
  function handleExit() {
    setPosition((prev) => ({ ...prev, opacity: 0 }));
    setTimeout(cancelSelection, 100);
  }
  return (
    <div
      className="portfolio-item"
      style={{ ...position, transition: "all 0.4s" }}
    >
      <IconButton style={{ float: "right" }} onClick={handleExit}>
        <CloseIcon style={{ color: "#ffb7f3" }} />
      </IconButton>
    </div>
  );
}

export default PortfolioItem;
