/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone } from 'react-icons/fa'; // For email and phone icons
import '../style/Footer.css'

const Footer = () => {
    return (
        <footer className="footer bg-dark text-white pt-5 pb-4 border-top border-3 border-warning animate-footer">
            <div className="container">
                <div className="row text-center text-md-start">
                    {/* Company Info Section */}
                    <div className="col-md-4 mb-4">
                        <h5 className="text-uppercase fw-bold text-warning">Saisamarth Polytech Pvt. Ltd.</h5>
                        <p className="small fade-in">
                            We specialize in delivering cutting-edge solutions in polymer technology. With a commitment to quality, innovation, and client satisfaction, we aim to be leaders in our field, providing unmatched expertise and service.
                        </p>
                    </div>

                    {/* Navigation Links Section */}
                    <div className="col-md-4 mb-4">
                        <h5 className="text-uppercase fw-bold text-warning">Explore</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <Link to="/" className="text-white text-decoration-none link-hover">Home</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/aboutus" className="text-white text-decoration-none link-hover">About Us</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/contactus" className="text-white text-decoration-none link-hover">Contact Us</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/client" className="text-white text-decoration-none link-hover">Clients</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/application" className="text-white text-decoration-none link-hover">Application</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Information Section */}
                    <div className="col-md-4 mb-4">
                        <h5 className="text-uppercase fw-bold text-warning">Get in Touch</h5>
                        <p className="small fade-in">
                            We're here to assist you with any questions or inquiries:
                        </p>
                        <address className="small">
                            <Link to="mailto:saisamarthpolytech@gmail.com" className="text-white text-decoration-none d-block address-link">
                                <FaEnvelope className="me-2" /> saisamarthpolytech@gmail.com
                            </Link>
                            <Link to="tel:+919324529411" className="text-white text-decoration-none d-block address-link">
                                <FaPhone className="me-2" /> +91 9324529411
                            </Link>
                        </address>
                    </div>
                </div>

                {/* Footer Bottom Section */}
                <div className="row mt-4">
                    <div className="col-md-12 text-center">
                        <p className="small mb-0 fade-in">
                            &copy; {new Date().getFullYear()} Saisamarth Polytech Pvt. Ltd. All Rights Reserved. |
                            <Link to="/privacy" className="text-white text-decoration-none ms-2 link-hover">Privacy Policy</Link> |
                            <Link to="/terms" className="text-white text-decoration-none ms-2 link-hover">Terms of Service</Link>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
