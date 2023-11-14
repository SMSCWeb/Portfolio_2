import React from 'react'
import "../styles/Footer.css"
import Logo from "../assets/logo-white.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <div>
            <footer class="footer">
                <div class="container">
                    <div class="row justify-center">
                        <div class="col-md-6 col-lg-4">
                            <div class="widget1">
                                <div class="logo">
                                    <img src={Logo} class="img-fluid" alt="" />
                                </div>
                                <p>
                                    In eu libero ligula. Fusce eget metus lorem, ac viverra
                                    leo. Nullam convallis, arcu vel pellentesque sodales,
                                    nisi est varius diam, ac ultrices sem ante quis sem.
                                    Proin ultricies volutpat sapien.
                                </p>
                                <div class="socialLinks">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <FontAwesomeIcon icon={faFacebook} className='fab fa-facebook-f'/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <FontAwesomeIcon icon={faTwitter} className='fab fa-twitter'/>

                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <FontAwesomeIcon icon={faWhatsapp} className='fa-whatsapp fab'/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <FontAwesomeIcon icon={faLinkedin} className='fab fa-linkedin-in' />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-2">
                            <div class="widget3">
                                <h5>
                                    Latest News
                                </h5>
                                <ul>
                                    <li>
                                        <a href="#">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            about
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            contact
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            privecy
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            skills
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            career
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-2">
                            <div class="widget3">
                                <h5>
                                    Quick Links
                                </h5>
                                <ul>
                                    <li>
                                        <a href="#">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            about
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            contact
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            privecy
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            skills
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            career
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-2">
                            <div class="widget4">
                                <h5>
                                    Other Links
                                </h5>
                                <ul>
                                    <li>
                                        <a href="#">
                                            themeforest
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            graphicriver
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            codecanyon
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            videohive
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            redpen
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            codepen
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copyRightArea">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 text-center">
                                <p>&copy; Copyright All rights reserved 2023. Design By <a href="/">Shekhar</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer