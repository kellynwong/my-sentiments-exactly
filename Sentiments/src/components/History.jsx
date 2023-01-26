import React, { useContext } from "react";
import DataContext from "../context/DataContext";

const History = () => {
  const data = useContext(DataContext);

  let history = data.history.map((item, index) => {
    return (
      <tr key={index}>
        <td>{item.timestamp}</td>
        <td>{item.searchTerm}</td>
        <td>{item.score.toFixed(2)}</td>
      </tr>
    );
  });

  return (
    <table>
      <tbody>
        <tr>
          <th className="thStart">Timestamp</th>
          <th>Search Term</th>
          <th className="thEnd">Overall Score</th>
        </tr>
        {history}
      </tbody>
    </table>
  );
};

export default History;
