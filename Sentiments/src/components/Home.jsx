import React from "react";
import SearchContainer from "./SearchContainer";

const Home = () => {
  return (
    <div>
      <img className="logo" src="src/components/images/logo.gif" />
      <h1>My Centiments Exactly</h1>
      <SearchContainer />
    </div>
  );
};

export default Home;
