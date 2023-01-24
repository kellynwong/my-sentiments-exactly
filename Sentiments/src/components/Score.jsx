import React, { useContext } from "react";
import DataContext from "../context/DataContext";

const Score = () => {
  const data = useContext(DataContext);
  let averageScore = 0;

  let sum = data.scores.reduce((sum, score) => {
    return sum + score;
  });

  let length = data.scores.length;

  averageScore = sum / length;

  return (
    <div>
      <h2>Overall Score: {averageScore.toFixed(2)}</h2>
      <h3>
        Search Term: <span className="searchTerm">{data.query}</span>
      </h3>
      {/* <div className="outer">
        <div className="progressBar"></div>
      </div> */}
    </div>
  );
};

export default Score;
