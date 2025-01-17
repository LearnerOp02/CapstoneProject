import React, { useRef, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import emailjs from 'emailjs-com';
import '../style/Contact.css';

// Reusable Components
const MapSection = () => (
  <div className="map-container fade-in-section shadow">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.4993866080677!2d72.95142017781153!3d19.173378735771904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b912dfbe021d%3A0x1549238dfcb8009f!2sUnion%20Bank%20Of%20India!5e0!3m2!1sen!2sin!4v1721754958442!5m2!1sen!2s"
      width="100%"
      height="450"
      aria-hidden="false"
      tabIndex="0"
      aria-label="Location map"
      loading="lazy"
    ></iframe>
  </div>
);

const ContactDetails = () => (
  <div className="address-section text-center text-md-start">
    <h3 className="text-center mb-4">Our Office</h3>
    <p>
      <FaLocationDot className="me-2 text-primary" /> 213, 2nd Floor, Sai Arcade,<br />
      Above Union Bank of India,<br />
      Netaji Subhash Road, Mulund-West,<br />
      Mumbai - 400080, India.
    </p>
    <p>
      <MdEmail className="me-2 text-primary" /> <Link to="mailto:saisamarthpolytech@gmail.com">saisamarthpolytech@gmail.com</Link><br />
      <FaPhone className="me-2 text-primary" /> <Link to="tel:+919324529411">+91 9324529411</Link>
    </p>
  </div>
);

const ContactForm = ({ formRef, sendEmail }) => (
  <div className="contact-form-container bg-white shadow-lg rounded p-4 p-md-5">
    <h1 className="h4 mb-4 text-center text-dark" style={{ fontWeight: 'bold' }}>Get in Touch with Us</h1>
    <p className="text-center text-secondary mb-4">
      Fill out the form below, and one of our team members will respond to you promptly.
    </p>
    <form ref={formRef} onSubmit={sendEmail}>
      <div className="mb-3">
        <input
          className="form-control"
          type="text"
          name="user_name"
          placeholder="Name"
          required
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          type="text"
          name="user_phone"
          placeholder="Phone No"
          required
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          type="email"
          name="user_email"
          placeholder="E-mail"
          required
        />
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          name="message"
          placeholder="Your Message"
          rows="4"
          required
        ></textarea>
      </div>
      <div className="text-center">
        <button type="submit" className="btn btn-primary btn-lg">Submit Inquiry</button>
      </div>
    </form>
    <p className="text-center text-secondary mt-4">
      Thank you for reaching out. We value your input and look forward to assisting you.
    </p>
  </div>
);

// Main Component
const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_35evjmh', 'template_2od4x3r', form.current, 'aYJwPKPk2z2MMpKy5')
      .then(() => {
        alert('Message sent successfully!');
        form.current.reset();
      })
      .catch(() => {
        alert('Failed to send the message, please try again.');
      });
  };

  useEffect(() => {
    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach((section, index) => {
      setTimeout(() => {
        section.classList.add('animate__animated', 'animate__fadeInUp');
      }, index * 200);
    });
  }, []);

  return (
    <Container className="contact-container mt-5 mb-5">
      <h1 className="contact-us-title text-center mb-4">Contact Us</h1>
      <Row className="justify-content-center mb-5">
        <Col xs={12} md={8}>
          <p className="text-center contact-us-description fade-in-section">
            If you have any questions or feedback, feel free to reach out using the form below.
          </p>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col xs={12}>
          <MapSection />
        </Col>
      </Row>
      <Row className="align-items-start fade-in-section">
        <Col md={6} className="mb-4 mb-md-0">
          <ContactDetails />
        </Col>
        <Col md={6}>
          <ContactForm formRef={form} sendEmail={sendEmail} />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;