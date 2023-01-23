import React, { useState } from "react";
import DataContext from "../context/DataContext";
import Search from "./Search";
import Results from "./Results";
import { Route, Routes, Navigate } from "react-router-dom";

const SearchContainer = () => {
  const [query, setQuery] = useState("");
  const [tweets, setTweets] = useState({});

  const handleSearchInput = (query) => {
    setQuery(query);
  };

  const onSubmitQuery = async () => {
    var proxy_url = "https://cors-anywhere.herokuapp.com/";
    const token =
      "AAAAAAAAAAAAAAAAAAAAAKoulQEAAAAA6LPgjrCXrkeSAdUDJSaLREDQMIE%3D4gH7oSt1X1tIzmwVfumfYeVhYd0XoJChwxl3bdePWbHVdGDDj1";
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    console.log(requestOptions);
    const url = `${proxy_url}https://api.twitter.com/2/tweets/search/recent?query=${query}&max_results=10`;
    const res = await fetch(url, requestOptions);
    const data = await res.json();
    setTweets(data);
    setQuery("");
  };

  console.log(tweets);

  const onSearchAgain = () => {
    setTweets([]);
  };

  return (
    <DataContext.Provider
      value={{
        query,
        setQuery,
        tweets,
        setTweets,
        handleSearchInput,
        onSubmitQuery,
        onSearchAgain,
      }}
    >
      <div>
        <Routes>
          <Route path="/" element={<Navigate replace to="/search" />} />
          <Route path="/results" element={<Results />} />
          <Route path="/search" element={<Search />} />
          <Route path="/search/:item" element={<Search />} />
        </Routes>
      </div>
    </DataContext.Provider>
  );
};

export default SearchContainer;