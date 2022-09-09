import React from "react";
import grey9Logo from "../assets/tt-grey9.png";
import "../styles/Logo.css";

export default function Logo({ size }) {
  return (
    <div className="logo">
      <img
        className="logo-image"
        src={grey9Logo}
        alt="Logo"
        width={size}
        height={size}
      />
      <h3 className="logo-text">Travis</h3>
    </div>
  );
}
