import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DataContext from "../context/DataContext";

const Search = () => {
  const data = useContext(DataContext);
  const navigate = useNavigate();
  const params = useParams();

  const handleChange = (e) => {
    data.handleSearchInput(e.target.value);
  };

  const handleClick = () => {
    data.onSubmitQuery();
    // to display spinner here
  };

  return (
    <div style={{ textAlign: "center" }}>
      <input
        type="text"
        onChange={handleChange}
        placeholder={
          params.item ? params.item : "Enter search word e.g. Ethereum"
        }
      />

      <button type="submit" value="Search" onClick={handleClick}>
        Submit
      </button>
    </div>
  );
};

export default Search;
