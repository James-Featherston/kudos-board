import React from "react";
import "./Footer.css";
import { useTheme } from "../contexts/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();
  return (
    <div
      className="footer"
      style={{ backgroundColor: theme.bgColor, color: theme.color }}
    >
      Footer
    </div>
  );
};

export default Footer;
