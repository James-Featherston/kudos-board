import React from "react";
import "./Footer.css";
import { useTheme } from "../contexts/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();
  return (
    <div className="footer" style={{ ...theme }}>
      Footer
    </div>
  );
};

export default Footer;
