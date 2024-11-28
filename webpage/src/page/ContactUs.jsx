/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import emailjs from 'emailjs-com';
import '../style/Contact.css';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_35evjmh', 'template_2od4x3r', form.current, 'aYJwPKPk2z2MMpKy5')
      .then((result) => {
        alert('Message sent successfully!');
        form.current.reset();
      }, (error) => {
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
      {/* Title Section */}
      <h1 className="contact-us-title text-center mb-4">Contact Us</h1>
      
      {/* Introductory Text Section */}
      <Row className="justify-content-center mb-5">
        <Col xs={12} md={8}>
          <p className="text-center contact-us-description fade-in-section">
            We're here to assist you. If you have any questions, feedback, or need support, feel free to reach out through the form below or contact us directly using our details provided. We aim to respond promptly to every query and appreciate your interest in connecting with us.
          </p>
        </Col>
      </Row>

      {/* Map Section */}
      <Row className="mb-5">
        <Col xs={12}>
          <div className="map-container fade-in-section shadow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.4993866080677!2d72.95142017781153!3d19.173378635771904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b912dfbe021d%3A0x1549238dfcb8009f!2sUnion%20Bank%20Of%20India!5e0!3m2!1sen!2sin!4v1721754958442!5m2!1sen!2s"
              width="100%"
              height="450"
              aria-hidden="false"
              tabIndex="0"
              aria-label="Location map"
              loading="lazy"
            ></iframe>
          </div>
        </Col>
      </Row>

      {/* Address and Form Section */}
      <Row className="align-items-start fade-in-section">
        <Col md={6} className="mb-4 mb-md-0">
          <h3 className="text-center mb-4">Our Office</h3>
          <div className="address-section text-center text-md-start">
            <p>
              <FaLocationDot className="me-2 text-primary" />  213, 2nd Floor, Sai Arcade,<br />
              Above Union Bank of India,<br />
              Netaji Subhash Road, Mulund-West,<br />
              Mumbai - 400080, India.
            </p>
            <p>
              <MdEmail className="me-2 text-primary" /> <Link to="mailto:saisamarthpolytech@gmail.com">saisamarthpolytech@gmail.com</Link><br />
              <FaPhone className="me-2 text-primary" /> <Link to="tel:+919324529411">+91 9324529411</Link>
            </p>
          </div>
        </Col>

        <Col md={6}>
          <div className="contact-form-container bg-white shadow-lg mt-4 rounded p-4 p-md-5">
            <h1 className='h4 mb-4 text-center text-dark' style={{ fontWeight: 'bold' }}>
              Get in Touch with Us
            </h1>
            <p className='text-center text-secondary mb-4'>
              We are dedicated to providing you with the best service possible. If you have any questions, feedback, or concerns, please don't hesitate to reach out. Simply fill out the form below, and one of our team members will respond to you promptly.
            </p>
            <form ref={form} onSubmit={sendEmail}>
              <div className='mb-3'>
                <input
                  className='form-control'
                  type='text'
                  name='user_name'
                  placeholder='Name'
                  required
                />
              </div>
              <div className='mb-3'>
                <input
                  className='form-control'
                  type='text'
                  name='user_phone'
                  placeholder='Phone No'
                  required
                />
              </div>
              <div className='mb-3'>
                <input
                  className='form-control'
                  type='email'
                  name='user_email'
                  placeholder='E-mail'
                  required
                />
              </div>
              <div className='mb-3'>
                <textarea
                  className='form-control'
                  name='message'
                  placeholder='Your Message'
                  rows='4'
                  required
                ></textarea>
              </div>
              <div className='text-center'>
                <button type='submit' className='btn btn-primary btn-lg'>Submit Inquiry</button>
              </div>
            </form>
            <p className='text-center text-secondary mt-4'>
              Thank you for reaching out. We value your input and look forward to assisting you.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactUs;
