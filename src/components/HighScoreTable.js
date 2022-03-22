import React from "react";
import PlayerScore from "./PlayerScore";

function HighScoreTable({ score }) {
  console.log(score);
  return (
    <>
      {score.map((scores, index) => (
        <h3 key={index}>{score.name}</h3>
        // <PlayerScore score={score} />
      ))}
    </>
  );
}

export default HighScoreTable;
