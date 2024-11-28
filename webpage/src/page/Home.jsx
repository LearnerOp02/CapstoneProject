/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Home.css';

const Home = () => {
    return (
        <div className="home-container">
            {/* Welcome Section */}
            <section className="welcome-section text-center">
                <div className="container">
                    <h1 className="display-4 text-warning fade-in">
                        Welcome to Saisamarth Polytech Pvt. Ltd.
                    </h1>
                    <p className="lead text-light mt-3 fade-in">
                        Delivering excellence in cleanroom finishing solutions with cutting-edge polymer technologies.
                    </p>
                </div>
            </section>

            {/* About Us Section */}
            <section className="about-us py-5 fade-in">
                <div className="container">
                    <h2 className="text-center text-info mb-4">About Us</h2>
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <img
                                src="https://www.saisamarthpolytech.com/images/about-us.jpg"
                                alt="About Us"
                                className="img-fluid rounded shadow-lg"
                            />
                        </div>
                        <div className="col-md-6">
                            <p className="text-light">
                                With over 20 years of expertise, we specialize in epoxy and polymer treatments for cleanroom environments. Our solutions are trusted by leading pharmaceutical, healthcare, and food industry clients, delivering both innovation and reliability.
                            </p>
                            <Link to="/aboutus">
                                <button className="btn btn-warning mt-3 transition">Learn More</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="leadership text-center py-5 fade-in">
                <div className="container">
                    <h2 className="text-info mb-4">Our Leadership</h2>
                    <p className="text-light">
                        Under the visionary leadership of our Director, Mr. Atulkumar Patil, we are committed to delivering exceptional quality and ensuring client satisfaction at every step.
                    </p>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="gallery py-5 fade-in">
                <div className="container">
                    <h2 className="text-center text-info mb-4">Our Work in Action</h2>
                    <div className="row">
                        {['gallery1.jpg', 'gallery2.jpg', 'gallery3.jpg', 'gallery4.jpg'].map((image, index) => (
                            <div className="col-md-3 mb-4" key={index}>
                                <div className="card shadow rounded border-warning">
                                    <img
                                        src={`https://www.saisamarthpolytech.com/images/${image}`}
                                        alt={`Gallery Image ${index + 1}`}
                                        className="card-img-top rounded-top"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
