import React from "react";

function PlayerScore({ score }) {
  // console.log(score);
  return (
    <>
      {score.map((sc, index) => {
        console.log(sc.name);
        <h3>{sc.name}</h3>;
        let scores = sc.scores;
        scores.map((v) => {
          let numberConverted = Number(v.s);
          let names = v.n;
          return `${names}   ${numberConverted}`;
        });
      })}
    </>
  );
}

export default PlayerScore;
