import React, { useEffect, useState } from 'react';
import Image1 from "../assets/bg1.jpg";
import Image2 from "../assets/bg2.jpg";
import Image3 from "../assets/bg3.jpg";
import Image4 from "../assets/bg4.jpg";
import "../styles/Hero.css"
import { Link } from 'react-router-dom';
const Hero = () => {
    // const [imagesLoaded, setImagesLoaded] = useState(false);

    // useEffect(() => {
    //     // Display loader for 1 second before updating imagesLoaded
    //     const loaderTimeout = setTimeout(() => {
    //         setImagesLoaded(true);
    //     }, 10000);

    //     // Clear the timeout if the component unmounts
    //     return () => clearTimeout(loaderTimeout);
    // }, []); // Run this effect only once when the component mounts

    // const handleImageLoad = () => {
    //     // Check if all images are loaded
    //     if (!imagesLoaded) {
    //         // setImagesLoaded(true);
    //     }
    // };
    return (
        <main className="main">
            <section className="banner-section">
                <div className="left-section">
                    <p className='greeting'>Welcome To</p>
                    <p className='hero-title'>SM Service Consultancy</p>
                    <p className='hero-description'>It is a group of professionally qualified and experienced professionals, who have about 10&#45;25 years of experience in their respective fields and have been successfully designed & executed several large projects.
                    </p>
                    <Link to="/service">
                        <button className='btn'>
                            Our Service
                        </button>
                    </Link>
                </div>
                <div className="right-section">

                    <div className="grid-img">
                        <img
                            src={Image1}
                            alt="1"
                            className='image-half-left'
                        // onLoad={handleImageLoad}
                        />
                    </div>
                    <div className="grid-img">
                        <img
                            src={Image2}
                            alt="2"
                            className='image-full'

                        // onLoad={handleImageLoad}
                        />
                    </div>
                    <div className="grid-img">
                        <img
                            src={Image3}
                            alt="2"
                            className='image-full'

                        // onLoad={handleImageLoad}
                        />
                    </div>
                    <div className="grid-img">
                        <img
                            src={Image4}
                            alt="4"
                            className='image-half-right'
                        // onLoad={handleImageLoad}
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Hero;
