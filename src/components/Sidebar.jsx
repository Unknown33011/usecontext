import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const Sidebar = () => {
  const { theme } = useTheme();

  return <div className={`sidebar ${theme}`}>{}</div>;
};

export default Sidebar;
