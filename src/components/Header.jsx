import React from "react";
import binoLogo from "../assets/bino-logo.png";

const Header = () => (
  <header className="header">
    <img src={binoLogo} alt="Bino Logo" className="logo" />
    <h1>Bino Buddy </h1>
  </header>
);

export default Header;
