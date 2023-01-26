import React, { useContext } from "react";
import DataContext from "../context/DataContext";
import { useNavigate } from "react-router-dom";
import Analysis from "./Analysis";
import Score from "./Score";

const Results = () => {
  const data = useContext(DataContext);
  const navigate = useNavigate();

  // const something = (something) => {
  //   console.log(something);
  // };

  return (
    <div>
      <Score />
      <table>
        <tbody>
          <tr>
            <th width="330px" className="thStart">
              Tweet
            </th>
            <th width="220px">Words Evaluated as Positive</th>
            <th width="220px">Words Evaluated as Negative</th>
            <th width="70px">Meter</th>
            <th width="100px">Sentiment</th>
            <th width="100px" className="thEnd">
              Score
            </th>
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
