import React from "react";
import "./Header.css";
import { useTheme } from "../contexts/ThemeContext";

const Header = () => {
  const { toggleTheme, theme } = useTheme();
  return (
    <div
      className="header"
      style={{ backgroundColor: theme.bgColor, color: theme.color }}
    >
      <h1>Kudos Board</h1>
      <button style={{ marginLeft: "10px" }} onClick={() => toggleTheme()}>
        Toggle Theme
      </button>
    </div>
  );
};

export default Header;
