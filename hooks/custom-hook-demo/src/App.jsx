import React from "react";
import useToggleItems from "./hooks/useToggleItems";

function App() {
  const [currentItem, toggleItem] = useToggleItems(["A", "B", "C"], 1);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>useToggleItems Hook Demo</h1>
      <h2>Current Item: {currentItem}</h2>
      <button onClick={toggleItem} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Toggle Item
      </button>
    </div>
  );
}

export default App;
