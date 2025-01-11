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
    <nav className="navbar navbar-expand-lg text-light py-3 border-bottom border-3 border-warning animate-navbar">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <Link
            className="navbar-brand text-uppercase fw-bold text-warning"
            to="/"
          >
            <img src={logo} alt="Logo" className="navbar-logo img-fluid me-3" />
            Saisamarth Polytech Pvt. Ltd.
          </Link>
        </div>
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link text-light text-uppercase fw-bold mx-2 hover-underline-animation"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-light text-uppercase fw-bold mx-2 hover-underline-animation"
                to="/aboutus"
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-light text-uppercase fw-bold mx-2 hover-underline-animation"
                to="/contactus"
              >
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-light text-uppercase fw-bold mx-2 hover-underline-animation"
                to="/product"
              >
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-light text-uppercase fw-bold mx-2 hover-underline-animation"
                to="/application"
              >
                Application
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-light text-uppercase fw-bold mx-2 hover-underline-animation"
                to="/clients"
              >
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
