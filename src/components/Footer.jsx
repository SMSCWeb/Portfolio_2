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
                                    In eu libero ligula. Fusce eget metus lorem, ac viverra leo.
                                    Nullam convallis, arcu vel pellentesque sodales, nisi est
                                    varius diam, ac ultrices sem ante quis sem. Proin ultricies
                                    volutpat sapien.
                                </p>
                                <div className="socialLinks">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <FontAwesomeIcon
                                                    icon={faFacebook}
                                                    className="fab fa-facebook-f"
                                                />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <FontAwesomeIcon
                                                    icon={faTwitter}
                                                    className="fab fa-twitter"
                                                />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <FontAwesomeIcon
                                                    icon={faWhatsapp}
                                                    className="fa-whatsapp fab"
                                                />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
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
                        <div className="col-sm-6 col-lg-2">
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
                        </div>
                        <div className="col-sm-6 col-lg-2">
                            <div className="widget3">
                                <h5>Quick Links</h5>
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
                        </div>
                        <div className="col-sm-6 col-lg-2">
                            <div className="widget4">
                                <h5>Other Links</h5>
                                <ul>
                                    <li>
                                        <a href="#">themeforest</a>
                                    </li>
                                    <li>
                                        <a href="#">graphicriver</a>
                                    </li>
                                    <li>
                                        <a href="#">codecanyon</a>
                                    </li>
                                    <li>
                                        <a href="#">videohive</a>
                                    </li>
                                    <li>
                                        <a href="#">redpen</a>
                                    </li>
                                    <li>
                                        <a href="#">codepen</a>
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
                                        href="https://www.linkedin.com/in/shekhar-hans-560822246/"
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
