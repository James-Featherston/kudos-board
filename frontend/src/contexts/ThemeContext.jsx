import { createContext, useContext, useState } from "react";

const lightTheme = {
  bgColor: "tan",
  color: "black",
};

const darkTheme = {
  bgColor: "saddlebrown",
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
