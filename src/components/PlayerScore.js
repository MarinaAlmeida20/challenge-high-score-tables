import React from "react";

function PlayerScore({ scores }) {
  console.log(scores);
  return (
    <>
      {scores
        .sort((a, b) => (a.s < b.s ? 1 : -1))
        .map((e, index) => {
          // console.log(e);
          let names = e.n;
          let numbers = Number(e.s);

          // console.log(numbers);
          return <li key={index}>{`${names} ${numbers}`}</li>;
        })}
    </>
  );
}

export default PlayerScore;
