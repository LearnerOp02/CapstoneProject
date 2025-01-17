/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/Navbar.css";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("navbar-scrolled");
      } else {
        navbar.classList.remove("navbar-scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={logo}
            alt="Logo"
            className="navbar-logo img-fluid me-3"
            style={{ width: "50px", height: "50px" }}
          />
          <span className="fw-bold">Saisamarth Polytech Pvt. Ltd.</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-light mx-2" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light mx-2" to="/aboutus">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light mx-2" to="/contactus">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light mx-2" to="/product">
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light mx-2" to="/application">
                Application
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light mx-2" to="/clients">
                Clients
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;