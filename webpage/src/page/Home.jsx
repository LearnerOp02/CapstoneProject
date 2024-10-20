/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import one from '../page/Images/1.jpg';
import two from '../page/Images/2.jpg';
import three from '../page/Images/3.jpg';
import four from '../page/Images/4.jpg';
import '../style/Home.css';

const Home = () => {
  return (
    <div className="container-fluid bg-gradient text-light py-5">

      {/* Welcome Section */}
      <section className="welcome-section text-center mb-5">
        <div className="container">
          <h1 className="display-4 text-warning">Welcome to Saisamarth Polytech Pvt. Ltd.</h1>
          <p className="lead mt-3">
            We are a trusted leader in cleanroom finishing services, providing innovative solutions backed by over two decades of expertise.
            Our highly skilled engineers and contractors specialize in advanced epoxy and polymer treatments.
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us py-5">
        <div className="container">
          <h2 className="text-center mb-4 text-info">About Us</h2>
          <div className="row align-items-center">
            <div className="col-md-6" style={{ animation: 'slideInLeft 1s ease-in-out' }}>
              <img src="https://www.saisamarthpolytech.com/images/about-us.jpg" alt="About Us" className="img-fluid rounded shadow-lg" />
            </div>
            <div className="col-md-6" style={{ animation: 'slideInRight 1s ease-in-out' }}>
              <p>
                At Saisamarth Polytech, we offer a complete suite of services that includes epoxy flooring, coving, and antibacterial & antifungal polyurethane wall coatings.
                Our expertise has been trusted by clients in the pharmaceutical, food, healthcare, and engineering sectors.
                Our commitment to excellence, paired with over two decades of experience, allows us to deliver high-quality results tailored to each project’s unique needs.
              </p>
              <div className="text-center mt-3">
                <Link to="/aboutus">
                  <button className="btn btn-warning px-4 py-2 transition">Read More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="leadership py-5">
        <div className="container text-center">
          <h2 className="mb-4 text-info">Leadership</h2>
          <p className="lead">
            Under the guidance of our Promoter and Director, Mr. Atulkumar Patil, with 18 years of industry experience,
            we have built a reputation for quality, reliability, and customer satisfaction. His leadership empowers us
            to offer customized solutions that adhere to the highest standards of quality and performance.
          </p>
        </div>
      </section>

      {/* Companies Served Section */}
      <section className="companies-served py-5">
        <div className="container">
          <h2 className="text-center mb-4 text-info">Companies Served</h2>
          <div className="row">
            {[one, two, three, four].map((image, index) => (
              <div className="col-md-3 col-sm-6 mb-4" key={index} style={{ animation: `slideInUp ${1 + index * 0.2}s ease-in-out` }}>
                <div className="card bg-dark text-light shadow-lg rounded-lg h-100 border border-warning transition">
                  <img src={image} alt={`Company ${index + 1}`} className="card-img-top img-fluid rounded-top" />
                  <div className="card-body">
                    <h5 className="card-title">Company {index + 1}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-3">
            <Link to="/clients">
              <button className="btn btn-warning px-4 py-2 transition">Read More</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery py-5">
        <div className="container">
          <h2 className="text-center mb-4 text-info">Gallery</h2>
          <div className="row">
            {["gallery1.jpg", "gallery2.jpg", "gallery3.jpg", "gallery4.jpg"].map((galleryImg, index) => (
              <div className="col-md-3 col-sm-6 mb-4" key={index} style={{ animation: `slideInUp ${1 + index * 0.2}s ease-in-out` }}>
                <div className="card bg-dark text-light shadow-lg rounded-lg h-100 border border-warning transition">
                  <img src={`https://www.saisamarthpolytech.com/images/${galleryImg}`} alt={`Gallery ${index + 1}`} className="card-img-top img-fluid rounded-top" />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-3">
            <Link to="/">
              <button className="btn btn-warning px-4 py-2 transition">Read More</button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
