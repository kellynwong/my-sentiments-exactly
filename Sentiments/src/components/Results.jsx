import React, { useContext } from "react";
import DataContext from "../context/DataContext";
import { useNavigate } from "react-router-dom";
import Tweet from "./Tweet";

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
            return (
              <tr>
                <Tweet tweet={tweet.text} key={index} id={index} />

                <td>Some Score</td>
                <td>Some Positive Words</td>
                <td>Some Negative Words</td>
              </tr>
            );
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
