import React, { useContext } from "react";
import DataContext from "../context/DataContext";
import { useNavigate } from "react-router-dom";
import Analysis from "./Analysis";
import Score from "./Score";

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
            <td>Overall Score: </td>
            <Score />
          </tr>
          <tr>
            <th>Tweet</th>
            <th>Score</th>
            <th>Words with Positive Score</th>
            <th>Words with Negative Score</th>
          </tr>
          {data.tweets.data?.map((tweet, index) => {
            return <Analysis tweet={tweet.text} key={index} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Results;
