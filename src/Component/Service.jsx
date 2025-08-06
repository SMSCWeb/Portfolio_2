// ServiceSection.js

import React from 'react';
import '../styles/Service.css';
import Image1 from "../assets/bg_image/bg7.jpg";
import Image2 from "../assets/bg_image/bg26.jpg";
import Image3 from "../assets/bg_image/bg19.jpg";
import Image4 from "../assets/bg_image/bg9.jpg";
import { Link } from 'react-router-dom';

const serviceData = [
    { title: 'Expertise', description: 'Decades of experience in diverse fields.' },
    { title: 'Reliability', description: 'Proven track record in designing and executing large projects.' },
    { title: 'Professionalism', description: 'Dedicated, skilled team committed to excellence.' },
    { title: 'Communication', description: 'Clear, transparent communication throughout the project.' },
    { title: 'Collaboration', description: 'Partnering closely to understand and fulfill client needs.' },
    { title: 'Quality', description: 'Delivering high-quality, tailored solutions that exceed expectations.' },
    { title: 'Innovation', description: 'Leveraging innovative approaches to tackle project challenges.' },
    { title: 'Customer Focus', description: 'Putting clients\' success and satisfaction at the forefront of our priorities.' }
];
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
                    Our comprehensive MEP (Mechanical, Electrical, Plumbing) services ensure seamless integration of vital building systems. From design to implementation, trust us for efficient, reliable solutions that exceed industry standards.
                    </p>
                </div>
                <div className="service-content-container">
                    <div className="service-cards">
                        {serviceData.map((service, index) => (
                            <div className="service-content" key={index}>
                                <div className="service-title">
                                    <h3>{service.title}</h3>
                                </div>
                                <div className="service-description">
                                    <p>{service.description}</p>
                                </div>
                            </div>
                        ))}
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
