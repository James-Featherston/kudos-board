import React from "react";
import "./Header.css";
import { useTheme } from "../contexts/ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="header" style={{ ...theme }}>
      <h1>Kudos Board</h1>
      <button
        style={{ marginLeft: "15px", padding: "7px 15px" }}
        onClick={() => toggleTheme()}
      >
        {theme.color === "black" ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default Header;
