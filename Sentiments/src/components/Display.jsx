import React, { useContext, useEffect } from "react";
import DataContext from "../context/DataContext";

const Display = (props) => {
  const data = useContext(DataContext);

  let revisedTweet = props.tweet.split(" ").join("%20");

  useEffect(() => {
    const analyzeTweet = async () => {
      const requestOptions = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "071741f8f0msh066119322cb267fp190223jsnbc0c70b25b88",
          "X-RapidAPI-Host": "twinword-sentiment-analysis.p.rapidapi.com",
        },
      };
      const url = `https://twinword-sentiment-analysis.p.rapidapi.com/analyze/?text=${revisedTweet}`;
      const res = await fetch(url, requestOptions);
      const analysis = await res.json();
      console.log(analysis);
      data.setSentiments(analysis);
      console.log("did it finally analyse?");
    };
    analyzeTweet();
  }, []);

  return (
    <tr>
      <td>{props.tweet}</td>
      <td>{data.sentiments.score}</td>
      <td>{data.sentiments.score}</td>
      <td>{data.sentiments.score}</td>
    </tr>
  );
};

export default Display;
