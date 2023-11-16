import React from 'react'
import Image1 from "./assets/bg1.jpg";
import "./styles/AboutPage.css"
import NavBar from './components/Navbar'
import { Link } from 'react-router-dom'
import Footer from './components/Footer';
const AboutPage = () => {
    return (
        <div>
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
                            <p>We Are The Leader In The Interiores</p>
                        </div>
                        <p className="hero-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
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