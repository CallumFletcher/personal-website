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
  }
  useEffect(() => {
    if (selection === name) {
      console.log(ref.current.getBoundingClientRect());
      setSelectionPosition(ref.current.getBoundingClientRect());
    }
  }, [selection, name, setSelection, setSelectionPosition]);
  return (
    <Grid item xs={12} sm={6} lg={4}>
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
