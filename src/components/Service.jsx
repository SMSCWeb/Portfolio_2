// ServiceSection.js

import React from 'react';
import '../styles/Service.css';
import Image1 from "../assets/bg1.jpg";
import Image2 from "../assets/bg2.jpg";
import Image3 from "../assets/bg3.jpg";
import Image4 from "../assets/bg4.jpg";
import { Link } from 'react-router-dom';
const Service = () => {
    return (
        <div className="service-container">
            <div className="service-left-section">
                <div className="service-images">
                    <div className="grid-img">

                        <img src={Image1} alt="Image 1" />
                    </div>
                    <div className="grid-img">

                        <img src={Image2} alt="Image 2" className='image-full' />
                    </div>
                    <div className="grid-img">

                        <img src={Image3} alt="Image 3" className='image-full' />
                    </div>
                    <div className="grid-img">

                        <img src={Image4} alt="Image 4" />
                    </div>
                </div>
            </div>
            <div className="service-right-section">
                <div className="section-main-title">
                    <p>Our Services</p>
                    <hr />
                </div>
                <div className="service-text hero-description">
                    <p>
                        Services are offered from the conceptual stage to commissioning for each project, enabling the Owner&#47;Architect&#47;Planner to arrive at an optimum design and installation for the following engineering services:
                    </p>
                </div>
                <div className="service-content-container">
                    <div className="service-cards">
                        <div className="service-content">
                            <div className="service-title">
                                <h3>Honesty</h3>
                            </div>
                            <div className="service-description">
                                <p>We provide top-notch service for import domestic car repairs. Brakes, Tune Ups, Engine Repairs</p>
                            </div>
                        </div>
                        <div className="service-content">
                            <div className="service-title">
                                <h3>Quality</h3>
                            </div>
                            <div className="service-description">
                                <p>We offer high-quality materials and workmanship for all your automotive needs.</p>
                            </div>
                        </div>
                        <div className="service-content">
                            <div className="service-title">
                                <h3>Reliability</h3>
                            </div>
                            <div className="service-description">
                                <p>You can rely on us for dependable and trustworthy service, year after year.</p>
                            </div>
                        </div>
                        <div className="service-content">
                            <div className="service-title">
                                <h3>Reliability</h3>
                            </div>
                            <div className="service-description">
                                <p>You can rely on us for dependable and trustworthy service, year after year.</p>
                            </div>
                        </div>
                    </div>
                    <Link to="/service">
                        <button className='btn service-btn'>
                            Learn More
                        </button>
                    </Link>
                </div>

            </div>

        </div>
    );
};

export default Service;
