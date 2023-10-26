import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const Content = () => {
  const { theme } = useTheme();

  return (
    <div>
      <div
        className={
          theme === "light" ? "light-text dark-bg" : "dark-text light-bg"
        }
      >
        <h1>Makers</h1>
      </div>
    </div>
  );
};

export default Content;
