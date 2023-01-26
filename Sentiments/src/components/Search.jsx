import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import DataContext from "../context/DataContext";

const Search = () => {
  const data = useContext(DataContext);

  const params = useParams();
  const [isNotValid, setIsNotValid] = useState(false);

  const handleChange = (e) => {
    data.handleSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    data.setDropdownValue(e.target.value);
  };

  const handleClick = () => {
    if (data.query !== "") {
      data.onSubmitQuery();
    } else {
      setIsNotValid(true);
    }
  };

  return (
    <div>
      <div className="searchWord">
        <input
          type="text"
          onChange={handleChange}
          placeholder={params.item ? params.item : "Enter search word"}
          value={data.query}
        />
      </div>

      <div className="select">
        <select className="dropdown-content" onChange={handleSubmit}>
          <option value="10">Search latest 10 tweets</option>
          <option value="15">Search latest 15 tweets</option>
          <option value="20">Search latest 20 tweets</option>
          <option value="25">Search latest 25 tweets</option>
        </select>
      </div>

      <div className="button">
        <button type="submit" value="Search" onClick={handleClick}>
          Submit
        </button>
      </div>
      <h2 style={{ color: `rgba(101, 96, 75, 0.5)` }}>
        {isNotValid && "Please enter a search word!"}
      </h2>
    </div>
  );
};

export default Search;
