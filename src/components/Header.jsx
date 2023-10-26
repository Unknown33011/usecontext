import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import "../index.css";
import { Link } from "react-router-dom";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={`header ${theme}`}>
      <nav>
        <ul
          className={
            theme === "light" ? "light-text dark-bg" : "dark-text light-bg"
          }
          style={{ listStyleType: "none", display: "flex", gap: "1em" }}
        >
          <Link
            className={
              theme === "light" ? "light-text dark-bg" : "dark-text light-bg"
            }
            style={{ textDecoration: "none", fontSize: "22px" }}
            to="/content"
          >
            Content
          </Link>
          <Link
            className={
              theme === "light" ? "light-text dark-bg" : "dark-text light-bg"
            }
            style={{ textDecoration: "none", fontSize: "22px" }}
            to="/"
          >
            Home
          </Link>
        </ul>
      </nav>
      <span
        className={`
        ${theme === "light" ? "light-text dark-bg" : "dark-text light-bg"}`}
        onClick={toggleTheme}
      >
        Toggle Theme
      </span>
    </header>
  );
};

export default Header;
