import { createContext, useContext, useState } from "react";

const lightTheme = {
  background: "#EEAECA",
  background:
    "radial-gradient(circle, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%)",
  color: "black",
};

const darkTheme = {
  background: "#3F5EFB",
  background:
    "radial-gradient(circle,rgba(63, 94, 251, 1) 0%, rgba(252, 70, 107, 1) 100%)",
  color: "white",
};

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isLight, setIsLight] = useState(true);
  const theme = isLight ? lightTheme : darkTheme;
  const toggleTheme = () => setIsLight(!isLight);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  return useContext(ThemeContext);
};

export { ThemeProvider, useTheme };
