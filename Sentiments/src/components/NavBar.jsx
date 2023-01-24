import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import DataContext from "../context/DataContext";

const NavBar = () => {
  const data = useContext(DataContext);
  const handleClick = () => {
    data.onSearchAgain();
    navigate("/search");
  };
  return (
    <header className={styles.navbar}>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/search"
              className={(navData) => (navData.isActive ? styles.active : "")}
              onClick={handleClick}
              type="submit"
            >
              Search
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/results"
              className={(navData) => (navData.isActive ? styles.active : "")}
            >
              Results
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/history"
              className={(navData) => (navData.isActive ? styles.active : "")}
            >
              History
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
