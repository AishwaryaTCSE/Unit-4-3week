import React from "react";
import PostList from "./components/PostList";

const App: React.FC = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>React + TypeScript API Demo</h1>
      <PostList />
    </div>
  );
};

export default App;
