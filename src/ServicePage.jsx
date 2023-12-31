import React, { useEffect, useState } from 'react'
import Image1 from "./assets/bg1.jpg";
import "./styles/ServicePage.css"
import NavBar from './components/Navbar'
import { Link } from 'react-router-dom'
import Footer from './components/Footer';
import PDF from "./assets/hackerspace.pdf"
import WORD from "./assets/word.docx"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
const ServicePage = () => {
    const servicesData = [
        {
            id: 1,
            serviceName: 'Public Health Engineering',
            services: [
                'Water Sourcing and Storage',
                'Water Supply collection, treatment, and Distribution',
                'Disposal of Sewage and Storm Water',
                'Water Treatment Plant',
                'Sewage system, collection, conveyance, treatment, and distribution of treated effluent',
                'Rainwater Harvesting and Water Conservation',
                'Hot water generation through conventional and non-conventional methods and distribution',
                'Storm water collection, treatment, and recharging aquifer or reusing',
                'Sustainable design',
            ],
        },
        {
            id: 2,
            serviceName: 'Fire Fighting and Detection Systems',
            services: [
                'Fire water storage and plant room',
                'Wet Risers, Down-comers, Hydrants, and Hose Reels',
                'Automatic Sprinkler systems',
                'Low Velocity and High Velocity Emulsifier through deluge and multiport drencher systems',
                'Portable fire extinguishers',
                'Foam flooding system',
                'Clean Gas flooding system',
                'Fire Alarm systems',
            ],
        },
        {
            id: 3,
            serviceName: 'Consultancy Services',
            services: [
                'Feasibility Study',
                'Conceptual Planning',
                'Preliminary Design Report and Budget Estimates',
                'Detailed Planning',
                'Working Drawings',
                'Specifications',
                'Schedule of Quantities',
                'Detailed Cost Estimates',
                'Approval of Shop Drawings',
                'Site Inspection',
                'Approval of As-built Drawings',
            ],
        },
    ];
    const [activeService, setActiveService] = useState(1);

    const toggleService = (serviceId) => {
        setActiveService(serviceId);
    };
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
                        </div>
                    </div>
                </div>
            </div>
            <div className="breatcome-area d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="breatcome-content">
                                <div className="breatcome-title">
                                    <h1>Our Services</h1>
                                </div>
                                <div className="breatcome-text">
                                    <ul>
                                        <li>
                                            <Link to="/">
                                                <p>Home</p>
                                            </Link>
                                        </li>
                                        <li> &gt; Services</li>
                                    </ul>
                                </div>
                            </div>
                            <div id="overlay"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="services-details-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="services-details-content">
                                <div className="services-details-image">
                                    <img src={Image1} alt="image" />
                                </div>

                                <h3>Looking For An Excelent Business Solution ?</h3>
                                <p className='hero-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa officia deserunt laborum</p>

                                <div className="features-text">
                                    <h4>We Deliver High-Quality Solutions</h4>
                                    <p className='hero-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. minim veniam, quis nostrud exercitation ullamco laboris nisi commodo consequat.</p>
                                    <ul className="service-features-list">
                                        <div className="inner">
                                            <div role="tablist" className="services-list">
                                                {servicesData.map((service) => (
                                                    <button
                                                        key={service.id}
                                                        onClick={() => toggleService(service.id)}
                                                        className={`services-button ${activeService === service.id ? 'active' : ''}`}
                                                    >
                                                        {service.serviceName}
                                                    </button>
                                                ))}
                                            </div>
                                            {servicesData.map((service) => (
                                                <div
                                                    key={service.id}
                                                    id={`service${service.id}`}
                                                    className="service-details"
                                                    style={{ display: activeService === service.id ? 'block' : 'none' }}
                                                >
                                                    <div id={`panel-${service.id}`} className='servicePage-box'>
                                                        {/* <h3 className="service">{service.serviceName}</h3> */}

                                                        <ul className="service-features-list">
                                                            {service.services.map((item, index) => (
                                                                <li key={index}>
                                                                    <FontAwesomeIcon icon={faCheckCircle} /> {item}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </ul>
                                    <p className='hero-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa officia deserunt laborum</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <aside className="services-widget">
                                <section className="widget widget_categories">
                                    <h3 className="widget-title">Our Services</h3>
                                    <ul>
                                        <li className="active">Marketing Strategy</li>
                                        <li> Cloud Computing</li>
                                        <li> Strategies</li>
                                        <li> Cloud Integration</li>
                                        <li> IT Consultancy</li>
                                    </ul>
                                </section>
                                <section className="widget widget_download_btn">
                                    <h3 className="widget-title">Company Profile</h3>
                                    <div className="section-bottom">
                                        <a href={PDF} target="_blank" rel="noopener noreferrer" className="active">Download PDF</a>
                                        <a href={WORD} target="_blank" rel="noopener noreferrer" className="default-btn">Download Word File</a>
                                    </div>
                                </section>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default ServicePage