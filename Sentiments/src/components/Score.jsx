import React, { useContext } from "react";
import DataContext from "../context/DataContext";

const Score = () => {
  const data = useContext(DataContext);

  let sum = data.scores.reduce((sum, score) => {
    return sum + score;
  });

  let length = data.scores.length;

  let averageScore = sum / length;

  return <td>{averageScore.toFixed(2)}</td>;
};

export default Score;
