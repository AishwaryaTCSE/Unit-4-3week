import React from "react";
import Timer from "./components/Timer";

const App: React.FC = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>React + TypeScript Timer App</h1>
      <Timer />
    </div>
  );
};

export default App;
