import React, { useContext } from "react";
import DataContext from "../context/DataContext";
import { useNavigate } from "react-router-dom";
import Display from "./Display";

const Results = () => {
  const data = useContext(DataContext);
  const navigate = useNavigate();

  const handleClick = () => {
    data.onSearchAgain();
    navigate("/search");
  };

  return (
    <div>
      <button type="submit" onClick={handleClick}>
        Back to Search
      </button>
      <table>
        <tbody>
          <tr>
            <th>Tweet</th>
            <th>Score</th>
            <th>Words with Positive Score</th>
            <th>Words with Negative Score</th>
          </tr>
          {data.tweets.data?.map((tweet, index) => {
            return <Display tweet={tweet.text} key={index} />;
          })}
          <tr>
            <td>Overall Score: </td>
            <td>Some Score</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Results;
