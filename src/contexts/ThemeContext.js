import { createContext, useState, useContext } from "react";

const themeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(themeContext);
};
