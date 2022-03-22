import React from "react";
import PlayerScore from "./PlayerScore";

function HighScoreTable(props) {
  // console.log(props.scores);
  // to do the div
  return (
    <ul>
      {props.scores
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((e, index) => (
          <li key={index}>
            <h2>{`HIGH SCORES: ${e.name}`}</h2>
            <ul>
              <PlayerScore scores={e.scores} />
            </ul>
          </li>
        ))}
    </ul>
  );
}

export default HighScoreTable;
