import React from "react";
import ReactDOM from "react-dom";

import Board from "./components/Board";
import "./styles.css";

function App() {
  return <Board />;
}

ReactDOM.render(<App />, document.getElementById("root"));
