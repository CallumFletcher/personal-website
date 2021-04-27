import React, { useEffect, useState } from "react";

function PortfolioItem({ initialPosition, finalPosition }) {
  const [position, setPosition] = useState(initialPosition);
  useEffect(() => {
    setPosition((prev) => ({
      ...prev,
      ...finalPosition,
    }));
    setTimeout(
      () => setPosition({ position: "static", width: "100%", height: "100%" }),
      1000
    );
  }, []);
  return (
    <div
      className="portfolio-item"
      style={{ ...position, transition: "all 0.7s" }}
    ></div>
  );
}

export default PortfolioItem;
