import React from "react";
import Logo from "../components/Logo";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <Logo size={50} />
      <h4 className="nav-text">React Course - Project 1</h4>
    </nav>
  );
}
