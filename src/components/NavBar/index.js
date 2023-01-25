import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="nav-items">
          <Link to="/" className="nav-item">
            Home
          </Link>
          <Link to="/about" className="nav-item">
            About Us
          </Link>
          <Link to="/meet-the-team" className="nav-item">
            Meet The Team
          </Link>
          <Link to="/careers" className="nav-item">
            Careers
          </Link>
          <Link to="/contact" className="nav-item">
            Contact
          </Link>
        </div>
      </div>
      <div className="sub-nav">
        <div className="sub-nav-itmes">
          <img
            src="https://www.vassutech.com/images/logo.png"
            alt="logo"
            className="logo"
          />
          <Link className="sub-nav-item" to="bi-anylytics">
            BI Analytics & AI / MI
          </Link>
          <Link className="sub-nav-item" to="blackchain-invention">
            Blackchain Invention
          </Link>
          <Link className="sub-nav-item" to="testing-ceo">
            Testing COE
          </Link>
          <Link className="sub-nav-item" to="cloud">
            Cloud Transformation
          </Link>
          <Link className="sub-nav-item" to="telicom">
            Telicom 5G
          </Link>
          <Link className="sub-nav-item" to="health-care">
            Health Care
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
