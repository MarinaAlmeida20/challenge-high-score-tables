import React from "react";
import scores from "./scores";

import Title from "./components/Title";

function App() {
  return (
    <div className="container">
      <Title />
      <HighScoreTable scores={scores} />
    </div>
  );
}

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
              {e.scores
                .sort((a, b) => (a.s < b.s ? 1 : -1))
                .map((e, index) => {
                  // console.log(e);
                  let names = e.n;
                  let numbers = Number(e.s);

                  // console.log(numbers);
                  return <li key={index}>{`${names} ${numbers}`}</li>;
                })}
            </ul>
          </li>
        ))}
    </ul>
  );
}

export default App;
