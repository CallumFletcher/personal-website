import { Grid } from "@material-ui/core";
import React, { useEffect, useRef } from "react";

function PortfolioPreviewItem({
  selection,
  setSelection,
  setSelectionPosition,
  name,
}) {
  const ref = useRef();
  console.log(selection);
  function handleClick() {
    setSelection(name);
    setSelectionPosition(ref.current.getBoundingClientRect());
  }

  return (
    <Grid item xs={12} sm={6} lg={4} style={{ padding: 2 }}>
      <div
        className="portfolio-item"
        onClick={handleClick}
        ref={ref}
        style={{ width: "100%", height: "100%" }}
      ></div>
    </Grid>
  );
}

export default PortfolioPreviewItem;
