import React from "react";
import "../styles/Footer.css";
import Logo from "../assets/logo-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faLinkedin,
    faTwitter,
    faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="row justify-center">
                        <div className="col-md-6 col-lg-4">
                            <div className="widget1">
                                <div className="logo">
                                    <img src={Logo} className="img-fluid" alt="" />
                                </div>
                                <p>
                                    At S M Service Consultancy, we recognize that success lies not only in technical proficiency but also in fostering meaningful client relationships. We prioritize clear communication, collaboration, and transparency throughout every stage of our partnership, ensuring that our clients are not just satisfied but empowered by our solutions.
                                </p>
                                <div className="socialLinks">
                                    <ul>
                                        <li>
                                            <a href="https://wa.me/918335041317" target="_blank">
                                                <FontAwesomeIcon
                                                    icon={faWhatsapp}
                                                    className="fa-whatsapp fab"
                                                />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="mailto:serviceconsultancysm@gmail.com" target="_blank">
                                                <FontAwesomeIcon
                                                    icon={faEnvelope}
                                                    className="fa-gmail fab"
                                                />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/company/s-m-service-consultancy/" target="_blank">
                                                <FontAwesomeIcon
                                                    icon={faLinkedin}
                                                    className="fab fa-linkedin-in"
                                                />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-sm-6 col-lg-2">
                            <div className="widget3">
                                <h5>Latest News</h5>
                                <ul>
                                    <li>
                                        <a href="#">Home</a>
                                    </li>
                                    <li>
                                        <a href="#">about</a>
                                    </li>
                                    <li>
                                        <a href="#">contact</a>
                                    </li>
                                    <li>
                                        <a href="#">privecy</a>
                                    </li>
                                    <li>
                                        <a href="#">skills</a>
                                    </li>
                                    <li>
                                        <a href="#">career</a>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                        <div className="col-sm-6 col-lg-2">
                            <div className="widget3">
                                <h5>Quick Links</h5>
                                <ul>
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/about">About</Link>
                                    </li>
                                    <li>
                                        <Link to="/service">Services</Link>
                                    </li>
                                    <li>
                                        <Link to="/project">Project</Link>
                                    </li>
                                    <li>
                                        <Link to="/client">Clients</Link>
                                    </li>
                                    <li>
                                        <Link to="/career">Career</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-2">
                            <div className="widget4">
                                <h5>Top Clients</h5>
                                <ul>
                                    <li>
                                        <a href="https://www.srijanrealty.com/" target="_blank">Srijan</a>
                                    </li>
                                    <li>
                                        <a href="https://www.beyondarchitecture.co.in/" target="_blank">Beyond Architecture</a>
                                    </li>
                                    <li>
                                        <a href="https://psgroup.in/projects?utm_source=google&utm_medium=search&utm_campaign=ps-projects-search&gad_source=1&gclid=Cj0KCQjw-uK0BhC0ARIsANQtgGNeN3Cbjdp3vMMSgl_ZRU8N3cS8o_Wlj1CQ2msZAt_B4kljuMnIxDAaAtKJEALw_wcB">PS Group</a>
                                    </li>
                                    <li>
                                        <a href="https://www.designcell.in/" target="_blank">Design Cell</a>
                                    </li>
                                    <li>
                                        <a href="/">Vineet Sinha Architects</a>
                                    </li>
                                    <li>
                                        <Link to="/client">Check more</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-2">
                            <div className="widget4">
                                <h5>Contact Us</h5>
                                <ul>
                                    <li>
                                        <p>
                                        3rd Floor,<br />35/43 C Purbachal <br /> Canal South Road, Kolkata 700078
                                        </p>
                                    </li>
                                    <li>
                                        <a href="mailto:serviceconsultancysm@gmail.com">serviceconsultancysm@gmail.com</a>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyRightArea">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <p>
                                    &copy; Copyright All rights reserved 2023. Design By{" "}
                                    <a
                                        href="https://shekhar-portfolio.vercel.app/"
                                        target="_blank"
                                        className="footer-name"
                                    >
                                        Shekhar
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
