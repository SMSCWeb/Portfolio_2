import React from 'react';
import Image1 from "../assets/bg1.jpg";
import Image2 from "../assets/bg2.jpg";
import Image3 from "../assets/bg3.jpg";
import Image4 from "../assets/bg4.jpg";
import "../styles/Hero.css"
import { Link } from 'react-router-dom';
const Hero = () => {
    return (
        <main className="main">
            <section className="banner-section">
                <div className="left-section">
                    <p className='greeting'>Welcome To</p>
                    <p className='hero-title'>SM Service Consultancy</p>
                    <p className='hero-description'>It is a group of professionally qualified and experienced professionals, who have about 10-25 years of experience in their respective fields and have been successfully designed & executed several large projects.
                    </p>
                    <Link to="/service">
                        <button className='btn'>
                            Our Service
                        </button>
                    </Link>
                </div>
                <div className="right-section">
                {/* <div className="header__img"> */}
                    <img
                        src={Image1}
                        alt="1"
                        className='image-half-left'

                    />
                    <img
                        src={Image2}
                        alt="2"
                        className='image-full'


                    />
                    <img
                        src={Image3}
                        alt="3"
                        className='image-full'


                    />
                    <img
                        src={Image4}
                        alt="4"
                        className='image-half-right'
                    />
                {/* </div> */}
                </div>
            </section>
        </main>
    );
}

export default Hero;
