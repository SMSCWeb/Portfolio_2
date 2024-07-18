import React, { useEffect, useState } from 'react'
import Image1 from "./assets/bg_image/bg22.png";
import "./styles/AboutPage.css"
import { Link } from 'react-router-dom'
import Footer from './components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
const AboutPage = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        // You can adjust the scroll position value as needed
        const showButtonThreshold = 300;

        if (scrollY > showButtonThreshold && !showScrollButton) {
            setShowScrollButton(true);
        } else if (scrollY <= showButtonThreshold && showScrollButton) {
            setShowScrollButton(false);
        }
    };

    useEffect(() => {
        // Attach the scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [showScrollButton]); // Dependency array ensures that the effect runs only when showScrollButton changes

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <div>
            <div className={`scroll-area ${showScrollButton ? 'show' : ''}`} onClick={scrollToTop}>
                <div className="top-wrap">
                    <div className="go-top-btn-wraper">
                        <div className="go-top go-top-button active">
                            <FontAwesomeIcon icon={faArrowUp} />
                            {/* <FontAwesomeIcon icon={faArrowUp} /> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <NavBar /> */}
            <div className="breatcome-area d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="breatcome-content">
                                <div className="breatcome-title">
                                    <h1>About Us</h1>
                                </div>
                                <div className="breatcome-text">
                                    <ul>
                                        <li>
                                            <Link to="/">
                                                <p>Home</p>
                                            </Link>
                                        </li>
                                        <li> &gt; About Us</li>
                                    </ul>
                                </div>
                            </div>
                            <div id="overlay"></div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="about-section">
                <div className="about-left-section">
                    <img
                        src={Image1}
                        alt="1"
                    />
                </div>
                <div className="about-right-section">
                    <div className="section-title text-left">
                        <div className="section-main-title">
                            <p>Expert in Building Engineering</p>
                        </div>
                        <p className="hero-description">Our team comprises individuals who have honed their skills through years of hands-on experience, ensuring that every project we undertake benefits from a wealth of knowledge and a keen understanding of industry nuances. From intricate logistical challenges to strategic planning, we have navigated the complexities of various sectors with finesse, delivering results that exceed expectations time and again.</p>
                    </div>
                </div>
            </section>
            <div className='member'>
                <div className="section-main-title">
                    <p>Our Members</p>
                </div>
                <div className="profile">
                    <figure data-value="product owner">
                        <img src="https://rvs-team-page.onrender.com/photo1.png" alt="" />
                        <figcaption>bill mahoney</figcaption>
                    </figure>
                </div>

                <div className="profile">
                    <figure data-value="art director">
                        <img src="https://rvs-team-page.onrender.com/photo2.png" alt="" />
                        <figcaption>saba cabrera</figcaption>
                    </figure>
                </div>

                <div className="profile">
                    <figure data-value="tech lead">
                        <img src="https://rvs-team-page.onrender.com/photo3.png" alt="" />
                        <figcaption>shae le</figcaption>
                    </figure>
                </div>

                <div className="profile">
                    <figure data-value="ux designer">
                        <img src="https://rvs-team-page.onrender.com/photo4.png" alt="" />
                        <figcaption>skylah lu</figcaption>
                    </figure>
                </div>

                <div className="profile">
                    <figure data-value="developer">
                        <img src="https://rvs-team-page.onrender.com/photo5.png" alt="" />
                        <figcaption>griff richards</figcaption>
                    </figure>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default AboutPage