import React from "react";
import Logo from ".Icons/Logo";
import "./app-header.css";

function AppHeader() {
  return (
    <div className="logo--container">
      <Logo />
      <div className="appName">PhotoZ</div>
    </div>
  );
}

export default AppHeader;
