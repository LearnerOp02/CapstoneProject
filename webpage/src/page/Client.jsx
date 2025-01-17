/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import client1 from "./Images/1.jpg";
import client2 from "./Images/2.jpg";
import client3 from "./Images/3.jpg";
import client4 from "./Images/4.jpg";
import client5 from "./Images/5.jpg";
import client6 from "./Images/6.jpg";
import client7 from "./Images/7.jpg";
import client8 from "./Images/8.jpg";
import client9 from "./Images/9.jpg";
import client10 from "./Images/10.jpg";
import client11 from "./Images/11.jpg";
import client12 from "./Images/12.jpg";
import client13 from "./Images/13.jpg";
import client14 from "./Images/14.jpg";
import client15 from "./Images/15.jpg";
import client16 from "./Images/16.jpg";
import client17 from "./Images/17.jpg";
import client18 from "./Images/18.jpg";
import client19 from "./Images/19.jpg";
import client20 from "./Images/20.jpg";
import client21 from "./Images/21.jpg";
import client22 from "./Images/22.jpg";
import client23 from "./Images/23.jpg";
import client24 from "./Images/24.jpg";
import client25 from "./Images/25.jpg";
import client26 from "./Images/26.jpg";
import client27 from "./Images/27.jpg";
import client28 from "./Images/28.jpg";
import client29 from "./Images/29.jpg";
import client30 from "./Images/30.jpg";
import client31 from "./Images/31.jpg";
import client32 from "./Images/32.jpg";
import client33 from "./Images/33.jpg";
import client34 from "./Images/34.jpg";
import client35 from "./Images/35.jpg";
import client36 from "./Images/36.jpg";
import "../style/Client.css";

const Client = () => {
  const clientLogos = [
    client1,
    client2,
    client3,
    client4,
    client5,
    client6,
    client7,
    client8,
    client9,
    client10,
    client11,
    client12,
    client13,
    client14,
    client15,
    client16,
    client17,
    client18,
    client19,
    client20,
    client21,
    client22,
    client23,
    client24,
    client25,
    client26,
    client27,
    client28,
    client29,
    client30,
    client31,
    client32,
    client33,
    client34,
    client35,
    client36,
  ];

  useEffect(() => {
    // Add animation delay to each client card
    const cards = document.querySelectorAll(".client-card");
    cards.forEach((card, index) => {
      card.style.setProperty("--index", index);
    });
  }, []);

  return (
    <div className="client-section py-5">
      <Container className="client-container text-center">
        <h1 className="title">Our Valued Clients</h1>
        <p className="subtitle">
          We are proud to partner with top companies across diverse industries.
          Their trust in our services highlights our dedication to quality and
          reliability.
        </p>

        <Row className="g-4">
          {clientLogos.map((logo, index) => (
            <Col
              xs={6}
              sm={4}
              md={3}
              key={index}
              className="d-flex justify-content-center align-items-center"
            >
              <div className="client-card">
                <div className="card-inner">
                  <img
                    src={logo}
                    alt={`Client Logo ${index + 1}`}
                    className="client-logo"
                  />
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <Row className="justify-content-center mt-5">
          <Col md={8}>
            <p className="text-muted">
              At Saisamarth Polytech, we value our clients and aim to build
              long-term relationships grounded in trust and shared success.
            </p>
            <p className="text-muted">
              Our collaborative approach ensures continuous improvement,
              enabling us to meet and exceed client expectations.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Client;