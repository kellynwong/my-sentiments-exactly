import React, { useEffect, useState } from "react";
import DataContext from "../context/DataContext";
import Search from "./Search";
import Results from "./Results";
import History from "./History";
import { Route, Routes, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LoadSpinner from "./LoadSpinner";
import NavBar from "./NavBar";

const SearchContainer = () => {
  const [query, setQuery] = useState("");
  const [dropdownValue, setDropdownValue] = useState(10);
  const [tweets, setTweets] = useState({});
  const [scores, setScores] = useState([0]);
  const [history, setHistory] = useState([
    // {
    //   timestamp: "",
    //   searchTerm: "",
    //   score: 0,
    // },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleSearchInput = (query) => {
    setQuery(query);
  };

  useEffect(() => {
    const oldHistory = localStorage.getItem("history");
    if (oldHistory !== null) {
      const parsedOldHistory = JSON.parse(oldHistory);
      // when I reload, useState for history is empty array [], that's why I need to re setHistory with the old history here
      setHistory(parsedOldHistory);
    }
  }, []);

  const onSubmitQuery = async () => {
    setIsLoading(true);
    var proxy_url = "https://cors-anywhere.herokuapp.com/";
    const token =
      "AAAAAAAAAAAAAAAAAAAAAKoulQEAAAAA6LPgjrCXrkeSAdUDJSaLREDQMIE%3D4gH7oSt1X1tIzmwVfumfYeVhYd0XoJChwxl3bdePWbHVdGDDj1";
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    //console.log(requestOptions);
    const url = `${proxy_url}https://api.twitter.com/2/tweets/search/recent?query=${query}&max_results=${dropdownValue}`;
    const res = await fetch(url, requestOptions);
    const data = await res.json();
    setIsLoading(false);
    setTweets(data);

    // console.log(data);

    const newDate = new Date().toLocaleString();
    history.push({
      timestamp: newDate,
      searchTerm: query,
    });
    setHistory(history);
    // console.log(history);
    localStorage.setItem("history", JSON.stringify(history));
    navigate("/results");
  };

  const onSearchAgain = () => {
    setTweets([]);
  };

  return (
    <DataContext.Provider
      value={{
        query,
        setQuery,
        dropdownValue,
        setDropdownValue,
        tweets,
        setTweets,
        scores,
        setScores,
        history,
        setHistory,
        handleSearchInput,
        onSubmitQuery,
        onSearchAgain,
      }}
    >
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/search" />} />
          <Route path="/results" element={<Results />} />
          <Route path="/search" element={<Search />} />
          <Route path="/search/:item" element={<Search />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </div>
      {isLoading && (
        <div className="centered">
          <LoadSpinner />
        </div>
      )}
    </DataContext.Provider>
  );
};

export default SearchContainer;
