import { createContext, useContext, useState } from "react";

const lightTheme = {
  background:
    "radial-gradient(circle, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%)",
  color: "black",
};

const darkTheme = {
  background:
    "radial-gradient(circle,rgba(63, 94, 251, 1) 0%, rgb(217, 45, 82) 100%)",
  color: "white",
};

const darkBackground = {
  background: "black",
  color: "white",
};

const lightBackground = {
  background: "aliceblue",
  color: "black",
};

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isLight, setIsLight] = useState(true);
  const theme = isLight ? lightTheme : darkTheme;
  const secondTheme = isLight ? lightBackground : darkBackground;
  const toggleTheme = () => setIsLight(!isLight);

  return (
    <ThemeContext.Provider value={{ theme, secondTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  return useContext(ThemeContext);
};

export { ThemeProvider, useTheme };
