import React from "react";
import logo from "/logo.png";

const 

function Header() {
  return (
    <header className="header">
      <div className="header-main">
        <div className="logo-main">
          <a href="/" aria-label="Go to homepage">
            <img src={logo} alt="Company Logo" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
