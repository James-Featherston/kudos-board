import React from "react";
import "./Footer.css";
import { useTheme } from "../contexts/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer className="footer" style={{ ...theme }}>
      Welcome to the Kudos board
    </footer>
  );
};

export default Footer;
