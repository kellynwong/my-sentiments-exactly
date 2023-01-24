import React, { useState, useContext, useEffect } from "react";
import DataContext from "../context/DataContext";

const Display = (props) => {
  const [sentiments, setSentiments] = useState({});
  const data = useContext(DataContext);
  let positiveWords = [];
  let negativeWords = [];

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
      setSentiments(analysis);
      console.log(analysis);
    };
    analyzeTweet();
  }, []);

  sentiments &&
    sentiments.score &&
    sentiments.keywords.map((pair, index) => {
      if (pair.score > 0) {
        return positiveWords.push(`${pair.word}: ${pair.score.toFixed(2)}\n`);
      } else {
        return negativeWords.push(`${pair.word}: ${pair.score.toFixed(2)}\n`);
      }
    });

  return (
    sentiments &&
    sentiments.score && (
      <tr>
        <td>{props.tweet}</td>
        <td>{sentiments.score.toFixed(2)}</td>
        <td>
          {positiveWords.map((word, index) => {
            return word;
          })}
        </td>
        <td>
          {negativeWords.map((word, index) => {
            return word;
          })}
        </td>
      </tr>
    )
  );
};

export default Display;
