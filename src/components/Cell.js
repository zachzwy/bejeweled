import React from "react";

// Use a const COLOR object to map from integer to color
const COLOR = {
  0: "red",
  1: "yellow",
  2: "orange",
  3: "green",
  4: "blue",
  5: "purple",
  6: "grey"
};

const Cell = ({ val }) => (
  <div className="cell" style={{ backgroundColor: COLOR[val] }} />
);

export default Cell;
