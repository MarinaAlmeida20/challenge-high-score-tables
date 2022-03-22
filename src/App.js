import React from "react";
import scores from "./scores";

import Title from "./components/Title";
import HighScoreTable from "./components/HighScoreTable";

function App() {
  return (
    <div className="container">
      <Title />
      <HighScoreTable scores={scores} />
    </div>
  );
}

export default App;
