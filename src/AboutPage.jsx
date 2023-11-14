import React from 'react'
import Image1 from "./assets/bg1.jpg";
import "./styles/AboutPage.css"
import NavBar from './components/Navbar'
import { Link } from 'react-router-dom'
import Footer from './components/Footer';
const AboutPage = () => {
    return (
        <div>
            <NavBar />
            <div class="breatcome-area d-flex align-items-center">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="breatcome-content">
                                <div class="breatcome-title">
                                    <h1>About Us</h1>
                                </div>
                                <div class="breatcome-text">
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
                    <div class="section-title text-left">
                        <div class="section-main-title">
                            <p>We Are The Leader In The Interiores</p>
                        </div>
                        <p class="hero-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                    </div>
                </div>
            </section>
            <div className='member'>
                <div class="section-main-title">
                    <p>Our Members</p>
                </div>
                <div class="profile">
                    <figure data-value="product owner">
                        <img src="https://rvs-team-page.onrender.com/photo1.png" alt="" />
                        <figcaption>bill mahoney</figcaption>
                    </figure>
                </div>

                <div class="profile">
                    <figure data-value="art director">
                        <img src="https://rvs-team-page.onrender.com/photo2.png" alt="" />
                        <figcaption>saba cabrera</figcaption>
                    </figure>
                </div>

                <div class="profile">
                    <figure data-value="tech lead">
                        <img src="https://rvs-team-page.onrender.com/photo3.png" alt="" />
                        <figcaption>shae le</figcaption>
                    </figure>
                </div>

                <div class="profile">
                    <figure data-value="ux designer">
                        <img src="https://rvs-team-page.onrender.com/photo4.png" alt="" />
                        <figcaption>skylah lu</figcaption>
                    </figure>
                </div>

                <div class="profile">
                    <figure data-value="developer">
                        <img src="https://rvs-team-page.onrender.com/photo5.png" alt="" />
                        <figcaption>griff richards</figcaption>
                    </figure>
                </div>
                {/* 
                <div class="profile">
                    <figure data-value="developer">
                        <img src="https://rvs-team-page.onrender.com/photo6.png" alt="" />
                        <figcaption>stan john</figcaption>
                    </figure>
                </div> */}

            </div>
            <Footer />
        </div>
    )
}

export default AboutPage