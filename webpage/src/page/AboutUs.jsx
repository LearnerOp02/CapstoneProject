import React from "react";
import "../style/AboutUs.css"; // Import external CSS
import about from "./Images/about.png";
import team from "./Images/team.png";
import tech from "./Images/tech.png";

const AboutUs = () => {
  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <div className="hero-section-container">
        <section className="hero-section">
          <div className="container text-center text-white">
            <h1 className="display-4 font-weight-bold">About Us</h1>
            <p className="lead mb-4">
              Providing Ultimate Finishing Solutions for Clean Rooms & Beyond
            </p>
          </div>
        </section>
      </div>

      {/* About Us Section */}
      <div className="about-us-container py-5">
        <div className="container" id="about-us">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="font-weight-bold text-primary mb-4">Who We Are</h2>
              <p className="lead text-dark">
                <strong>We</strong> are leading Engineers & Contractors working
                in the field of clean room finishing services, with over two
                decades of experience in epoxy/polymer treatments. Our expertise
                includes the entire range of Epoxy Flooring, Epoxy Coving,
                Antibacterial & Antifungal Polyurethane Wall Coating, and more.
              </p>
              <p className="lead text-dark">
                We have executed and provided the best of our services to major
                Pharma Industries, Food Industries, Hospitals, and Engineering
                Projects. Our commitment to outstanding customer service ensures
                that when you hire Saisamarth Polytech Pvt. Ltd., you can expect
                exceptional quality at an exceptional value.
              </p>
              <p className="lead text-dark">
                We believe there is no project too small or too large for us. We
                cater to customers of all sizes, from 10 Sq.Mtr. to 10,000
                Sq.Mtr. projects.
              </p>
            </div>
            <div className="col-md-6 text-center">
              <img
                src={about}
                alt="About Us"
                className="img-fluid rounded shadow-lg about-img"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="our-team-container py-5">
        <div className="container" id="our-team">
          <div className="row align-items-center">
            <div className="col-md-6 text-center">
              <img
                src={team}
                alt="Our Team"
                className="img-fluid rounded-circle shadow-lg team-img"
              />
            </div>
            <div className="col-md-6">
              <h2 className="font-weight-bold text-primary mb-4">
                Our Expert Team
              </h2>
              <p className="lead text-dark">
                Saisamarth Polytech Pvt. Ltd. is an industry-certified service
                provider, and our strength lies in our fully qualified team. Our
                promoter and director, Mr. Atulkumar Patil, is well-known in the
                industry, with 18 years of experience in flooring and coatings.
                He has worked with all major manufacturers of Epoxy/Polymer
                products.
              </p>
              <p className="lead text-dark">
                Our team combines technical expertise and innovation to tackle
                challenges with precision, ensuring customized solutions
                tailored to each client’s needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Technology Section */}
      <div className="technology-container py-5">
        <div className="container" id="technology">
          <h2 className="font-weight-bold text-center text-primary mb-5">
            Four-Dimensional Technology
          </h2>
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <img
                src={tech}
                alt="Technology"
                className="img-fluid rounded shadow-lg tech-img"
              />
            </div>
          </div>
          <div className="row mt-5">
            {/* First Row */}
            <div className="col-md-6 d-flex">
              <div className="technology-card p-4 mb-4 w-100">
                <h4 className="font-weight-bold text-dark mb-3">
                  Right Material Selection
                </h4>
                <p className="text-muted">
                  With years of experience, we understand the situations
                  surrounding your clean room finish needs. We select the proper
                  materials according to site requirements.
                </p>
              </div>
            </div>
            <div className="col-md-6 d-flex">
              <div className="technology-card p-4 mb-4 w-100">
                <h4 className="font-weight-bold text-dark mb-3">
                  Right Application Method
                </h4>
                <p className="text-muted">
                  Using our knowledge and experience in flooring, wall coatings,
                  and other polymer treatments, we apply materials with the
                  proper techniques and methods suitable for site conditions.
                  Fast and efficient application equipment ensures the best
                  possible results with minimal disruption.
                </p>
              </div>
            </div>
            {/* Second Row */}
            <div className="col-md-6 d-flex">
              <div className="technology-card p-4 mb-4 w-100">
                <h4 className="font-weight-bold text-dark mb-3">
                  Cost-Effective Solutions
                </h4>
                <p className="text-muted">
                  By using various combinations of materials available in the
                  market and our proper application techniques, we provide
                  affordable, cost-effective solutions without compromising
                  quality.
                </p>
              </div>
            </div>
            <div className="col-md-6 d-flex">
              <div className="technology-card p-4 mb-4 w-100">
                <h4 className="font-weight-bold text-dark mb-3">Time Frame</h4>
                <p className="text-muted">
                  Our project planning ensures that we complete the work within
                  your specified time frame. Even in challenging site
                  conditions, our experience allows us to deliver fast and
                  efficient results, often without requiring plant shutdowns.
                  This eliminates costly downtime and keeps your operations on
                  schedule.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What We Provide Section */}
      <div className="services-container py-5">
        <section className="container" id="services">
          <h2 className="font-weight-bold text-center text-primary mb-5">
            What We Provide
          </h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="service-card text-center shadow p-4 rounded">
                <img
                  src="https://5.imimg.com/data5/ANDROID/Default/2024/11/462550190/CO/BV/NL/40344453/product-jpeg-500x500.jpg"
                  alt="Service 1"
                  className="img-fluid rounded mb-3"
                />
                <h5 className="font-weight-bold text-dark">
                  Premium Polymer Treatments
                </h5>
                <p className="text-muted">
                  We provide high-quality polymer treatments for diverse
                  industries, ensuring durability and performance.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="service-card text-center shadow p-4 rounded">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsd8ole9G1UjZnCnzpY1WQ2Jg3xR3p1lpb4g&s"
                  alt="Service 2"
                  className="img-fluid rounded mb-3"
                />
                <h5 className="font-weight-bold text-dark">
                  Tailored Finishing Solutions
                </h5>
                <p className="text-muted">
                  Our finishing solutions are customized for clean rooms,
                  hospitals, pharma industries, and more.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="service-card text-center shadow p-4 rounded">
                <img
                  src="https://5.imimg.com/data5/SELLER/Default/2023/6/318692909/CH/ZR/GS/28604821/hygienic-coating-services-500x500.jpeg"
                  alt="Service 3"
                  className="img-fluid rounded mb-3"
                />
                <h5 className="font-weight-bold text-dark">
                  Hygienic Coatings
                </h5>
                <p className="text-muted">
                  We offer antibacterial and antifungal wall coatings, ensuring
                  high standards of hygiene and safety.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
