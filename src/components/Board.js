import React, { useState } from "react";

import Cell from "./Cell";
import init from "../calculations/init";

const Board = () => {
  // Pull out board dimension and number of color
  // as the component state and the single source of truth
  // Make them dynamic rather than fixed value

  const [dimension, setDimension] = useState({
    row: 8, // The board should be at least 3 by 3
    col: 8 // to to satisfy the "line-up" mechanism
  });

  // There should be at least 3 different colors
  // to generate a board without any "line-up" in its initial state
  const [numOfColor, setNumOfColor] = useState(7);
  const [state, setState] = useState(() => init(dimension, numOfColor));

  return (
    <div>
      <h2>Welcome to Bejeweled</h2>
      <table>
        <tbody>
          {state.map((row, i) => (
            <tr key={i}>
              {row.map((value, j) => (
                <td key={j}>
                  <Cell val={value} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => setState(init(dimension, numOfColor))}>
        Refresh
      </button>
    </div>
  );
};

export default Board;
