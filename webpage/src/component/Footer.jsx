/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import "../style/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container py-4">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase text-warning">
              Saisamarth Polytech Pvt. Ltd.
            </h5>
            <p className="text-light">
              We specialize in cutting-edge solutions in polymer technology,
              leading through innovation and quality.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase text-warning">Explore</h5>
            <ul className="list-unstyled">
              {["Home", "About Us", "Contact Us", "Clients", "Application"].map(
                (item, index) => (
                  <li key={index} className="mb-2">
                    <Link
                      to={`/${item.toLowerCase().replace(/ /g, "")}`}
                      className="footer-link"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase text-warning">Get in Touch</h5>
            <div className="contact-info">
              <p className="mb-2">
                <Link
                  to="mailto:saisamarthpolytech@gmail.com"
                  className="footer-contact d-flex align-items-center"
                >
                  <FaEnvelope className="me-2" /> saisamarthpolytech@gmail.com
                </Link>
              </p>
              <p>
                <Link
                  to="tel:+919324529411"
                  className="footer-contact d-flex align-items-center"
                >
                  <FaPhone className="me-2" /> +91 9324529411
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="footer-bottom text-center mt-4">
          <p className="text-light mb-0">
            &copy; {new Date().getFullYear()} Saisamarth Polytech Pvt. Ltd. All
            Rights Reserved.
            <Link to="/privacy" className="footer-link ms-2">
              Privacy Policy
            </Link>{" "}
            |
            <Link to="/terms" className="footer-link ms-2">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
