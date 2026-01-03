import React from "react";
import { Link } from "react-router-dom";
import Logo from "/Logo.svg";

function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Primary navigation">
        <Link to="/" className="navbar-logo">
          <img src={Logo} alt="Company logo" />
        </Link>

        <div className="navbar-buttons">
          <Link to="/F&B" className="secondary-button">
            Food & Beverage
          </Link>
          <a href="#" className="primary-button">
            Request Audit
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
