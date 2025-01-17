/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import "../style/Footer.css";

const Footer = () => {
  return (
    <footer className="footer text-light">
      <div className="container py-5">
        <div className="row justify-content-center text-center text-md-start">
          {/* Company Info */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase text-orange mb-4">
              Saisamarth Polytech Pvt. Ltd.
            </h5>
            <p className="text-light">
              We specialize in cutting-edge solutions in polymer technology,
              leading through innovation and quality.
            </p>
            <div className="social-links mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light me-3"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light me-3"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase text-orange mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              {["Home", "About Us", "Contact Us", "Clients", "Application"].map(
                (item, index) => (
                  <li key={index} className="mb-2">
                    <Link
                      to={`/${item.toLowerCase().replace(/ /g, "")}`}
                      className="footer-link justify-content-center text-light text-decoration-none"
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
            <h5 className="text-uppercase text-orange mb-4">Contact Us</h5>
            <div className="contact-info">
              <p className="mb-3 footer-contact">
                <FaMapMarkerAlt className="me-2 text-orange" />
                123 Polymer Street, Tech City, India
              </p>
              <p className="mb-3">
                <Link
                  to="mailto:saisamarthpolytech@gmail.com"
                  className="footer-contact text-light text-decoration-none d-flex align-items-center justify-content-center"
                >
                  <FaEnvelope className="me-2 text-orange" /> saisamarthpolytech@gmail.com
                </Link>
              </p>
              <p>
                <Link
                  to="tel:+919324529411"
                  className="footer-contact text-light text-decoration-none d-flex align-items-center justify-content-center"
                >
                  <FaPhone className="me-2 text-orange" /> +91 9324529411
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="footer-bottom text-center mt-4 pt-3 border-top border-orange">
          <p className="text-light mb-0">
            &copy; {new Date().getFullYear()} Saisamarth Polytech Pvt. Ltd. All
            Rights Reserved.
            <Link to="/privacy" className="footer-link text-orange ms-2 text-decoration-none">
              Privacy Policy
            </Link>{" "}
            |
            <Link to="/terms" className="footer-link text-orange ms-2 text-decoration-none">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;