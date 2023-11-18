import React, { useState, useEffect } from 'react';
import "../styles/Navbar.css"
import Logo from "../assets/logo.png"
import LogoWhite from "../assets/logo-white.png"
import { Link } from 'react-router-dom';
const NavBar = () => {
    const [burgerActive, setBurgerActive] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    const handleBurgerClick = () => {
        setBurgerActive(!burgerActive);
    };

    const handleLinkClick = () => {
        setBurgerActive(false);
    };

    useEffect(() => {
        const navbarMenu = document.getElementById("menu");
        const burgerMenu = document.getElementById("burger");
        const headerMenu = document.getElementById("header");

        if (burgerMenu && navbarMenu) {
            burgerMenu.addEventListener("click", handleBurgerClick);
        }

        document.querySelectorAll(".menu-link").forEach((link) => {
            link.addEventListener("click", handleLinkClick);
        });

        const handleScroll = () => {
            if (window.scrollY >= 85) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            if (burgerMenu && navbarMenu) {
                burgerMenu.removeEventListener("click", handleBurgerClick);
            }
            document.querySelectorAll(".menu-link").forEach((link) => {
                link.removeEventListener("click", handleLinkClick);
            });
            window.removeEventListener("scroll", handleScroll);
        };
    }, [burgerActive]);

    return (
        <header className={`header ${scrolling ? 'on-scroll' : ''}`} id="header">
            <nav className="navbar container">
                <Link to="/" className="brand">
                    <img src={scrolling ? LogoWhite : Logo} alt="" />
                </Link>
                <div className={`burger ${burgerActive ? 'is-active' : ''}`} id="burger">
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                </div>
                <div className={`menu ${burgerActive ? 'is-active' : ''}`} id="menu">
                    <ul className="menu-inner">
                        <Link to="/about" className="menu-link">
                            <li className="menu-item">
                                About
                                <span className="wiggle"></span>
                            </li>
                        </Link>
                        <Link to="/service" className="menu-link">
                            <li className="menu-item">
                                Services
                                <span className="wiggle"></span>
                            </li>
                        </Link>
                        <Link to="/project" className="menu-link">
                            <li className="menu-item">
                                Projects
                                <span className="wiggle"></span>
                            </li>
                        </Link>
                        <Link to="/client" className="menu-link">
                            <li className="menu-item">
                                Clients
                                <span className="wiggle"></span>
                            </li>
                        </Link>
                        <Link to="/career" className="menu-link">
                            <li className="menu-item">
                                Careers
                                <span className="wiggle"></span>
                            </li>
                        </Link>

                    </ul>
                </div>
                <Link to="/contact">
                    <button className={`btn nav-btn ${scrolling ? 'on-scroll' : ''}`}>
                        Contact Us
                    </button>
                </Link>
            </nav>
        </header>
    );
}

export default NavBar;
