import React, { useContext } from "react";
import DataContext from "../context/DataContext";

const History = () => {
  const data = useContext(DataContext);

  let history = data.history.map((item, index) => {
    return (
      <tr key={index}>
        <td>{item.timestamp}</td>
        <td>{item.searchTerm}</td>
      </tr>
    );
  });

  return (
    <table>
      <tbody>
        <tr>
          <th className="thStart">Timestamp</th>
          <th className="thEnd">Search Term</th>
        </tr>
        {history}
      </tbody>
    </table>
  );
};

export default History;
