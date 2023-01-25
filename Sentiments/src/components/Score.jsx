import React, { useContext } from "react";
import DataContext from "../context/DataContext";

const Score = () => {
  const data = useContext(DataContext);
  let sum = data.scores.reduce((sum, score) => {
    return sum + score;
  });
  let length = data.scores.length;
  let averageScore = sum / length;

  // // modify my history, similar to history.push
  // data.history[data.history.length - 1].score = averageScore;

  // data.setHistory(data.history);

  // // do this again because I want to store this new info
  // localStorage.setItem("history", JSON.stringify(data.history));

  // Use this below to see that averageScore keeps changing as rows are being populated:
  // useEffect(() => {
  //   props.something(averageScore);
  // }, []);

  const someFunction = () => {
    data.history[data.history.length - 1].score = averageScore;
    data.setHistory(data.history);
    localStorage.setItem("history", JSON.stringify(data.history));
  };

  setInterval(someFunction, 5000);

  return (
    <div>
      <h2>Overall Score: {averageScore.toFixed(3)}</h2>
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
