import React from 'react'
import Image1 from "../assets/bg1.jpg";
import "../styles/About.css"
import { Link } from "react-router-dom";
const About = () => {
    return (
        <div className='about-container'>
            <section className="about-section">
                <div className="about-left-section">
                    <img
                        src={Image1}
                        alt="1"
                    />
                </div>
                <div className="about-right-section">
                    <div className="section-title text-left">
                        <div className="section-sub-title">
                            <h5>ABOUT COMPANY</h5>
                        </div>
                        <div className="section-main-title">
                            <p>Expert in Building Engineering</p>
                        </div>
                        <p className="hero-description">Proficient in innovative building engineering solutions, we optimize structures for efficiency, sustainability, and safety. Elevate your projects with our expertise and experience.</p>

                        <Link to="/about">
                            <button className="btn">
                                Learn More
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;