import React, { useContext } from "react";
import DataContext from "../context/DataContext";

const History = () => {
  const data = useContext(DataContext);

  let history = data.history.map((item, index) => {
    return (
      <table key={index}>
        <tbody>
          <tr>
            <th className="thStart">Timestamp</th>
            <th className="thEnd">Search Term</th>
          </tr>
          <tr>
            <td>{item.timestamp}</td>
            <td>{item.searchTerm}</td>
          </tr>
        </tbody>
      </table>
    );
  });

  return <div>{history}</div>;
};

export default History;