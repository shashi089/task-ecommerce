import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import vector1 from "../images/Vector-1.svg";
import vector2 from "../images/Vector-2.svg";
import vector3 from "../images/Vector-3.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <header className="header_section">
        <div className="container">
          <nav className="navbar navbar-expand-lg .custom_nav-container">
            <div className="navbar-brand">
              <img src={logo} alt="" srcset="" />{" "}
            </div>
            <button
              className="navbar-toggler navbar-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item active">
                  <Link to={"/"} className="nav-link">
                    Men
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/"} className="nav-link">
                    Women
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/"} className="nav-link">
                    Kids
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/"} className="nav-link">
                    Offers
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/"} className="nav-link">
                    New Arrivals
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item">
                  {" "}
                  <img src={vector1} alt="" />
                </li>
                <li className="nav-item">
                  <img src={vector2} alt="" />
                </li>
                <li className="nav-item">
                  <img src={vector3} alt="" />
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
