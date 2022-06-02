import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState("light");

  const darkSwitch = () => {
    console.log("wiring works");
    console.log(dark);
    return setDark((dark) => (dark === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ dark, darkSwitch }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);
export { useTheme, ThemeProvider };
