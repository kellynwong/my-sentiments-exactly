import React, { useState, useContext, useEffect } from "react";
import DataContext from "../context/DataContext";
import MiniMeter from "./MiniMeter";

const Analysis = (props) => {
  const [sentiments, setSentiments] = useState({});
  const data = useContext(DataContext);
  let positiveWords = [];
  let negativeWords = [];
  let score = 0;

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
      // console.log(analysis);
      data.setScores((prevScores) => {
        return [...prevScores, analysis.score];
      });
      // console.log(data.scores);
    };
    analyzeTweet();
  }, []);

  sentiments &&
    sentiments.score &&
    sentiments.keywords.map((pair) => {
      if (pair.score > 0) {
        return positiveWords.push(`${pair.word}: ${pair.score.toFixed(2)}`);
      } else {
        return negativeWords.push(`${pair.word}: ${pair.score.toFixed(2)}`);
      }
    });

  if (sentiments && sentiments.score) {
    score = sentiments.score.toFixed(2);
    positiveWords = positiveWords.join(", ");
    negativeWords = negativeWords.join(", ");
  }

  return (
    <tr>
      <td>{props.tweet}</td>
      <td>{positiveWords}</td>
      <td>{negativeWords}</td>
      <td>
        <MiniMeter score={sentiments.score} sentiment={sentiments.type} />
      </td>
      <td>{sentiments.type}</td>
      <td>{score}</td>
    </tr>
  );
};

export default Analysis;
