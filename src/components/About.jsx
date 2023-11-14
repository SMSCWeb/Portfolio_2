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
                    <div class="section-title text-left">
                        <div class="section-sub-title">
                            <h5>ABOUT COMPANY</h5>
                        </div>
                        <div class="section-main-title">
                            <p>We Are The Leader In The Interiores</p>
                        </div>
                        <p class="hero-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>

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