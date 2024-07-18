import React, { useEffect, useState } from "react";
import Image1 from "./assets/bg_image/bg3.jpg";
import "./styles/ServicePage.css";
import { Link } from "react-router-dom";
import PDF from "./assets/Sm.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
const ServicePage = () => {
    const servicesData = [
        {
            id: 1,
            serviceName: "Public Health Engineering",
            services: [
                "Water Sourcing and Storage",
                "Water Supply collection, treatment, and Distribution",
                "Disposal of Sewage and Storm Water",
                "Water Treatment Plant",
                "Sewage system, collection, conveyance, treatment, and distribution of treated effluent",
                "Rainwater Harvesting and Water Conservation",
                "Hot water generation through conventional and non-conventional methods and distribution",
                "Storm water collection, treatment, and recharging aquifer or reusing",
                "Sustainable design",
            ],
        },
        {
            id: 2,
            serviceName: "Fire Fighting and Detection Systems",
            services: [
                "Fire water storage and plant room",
                "Wet Risers, Down-comers, Hydrants, and Hose Reels",
                "Automatic Sprinkler systems",
                "Low Velocity and High Velocity Emulsifier through deluge and multiport drencher systems",
                "Portable fire extinguishers",
                "Foam flooding system",
                "Clean Gas flooding system",
                "Fire Alarm systems",
            ],
        },
        {
            id: 3,
            serviceName: "Consultancy Services",
            services: [
                "Feasibility Study",
                "Conceptual Planning",
                "Preliminary Design Report and Budget Estimates",
                "Detailed Planning",
                "Working Drawings",
                "Specifications",
                "Schedule of Quantities",
                "Detailed Cost Estimates",
                "Approval of Shop Drawings",
                "Site Inspection",
                "Approval of As-built Drawings",
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
        window.addEventListener("scroll", handleScroll);

        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [showScrollButton]); // Dependency array ensures that the effect runs only when showScrollButton changes

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div>
            <div
                className={`scroll-area ${showScrollButton ? "show" : ""}`}
                onClick={scrollToTop}
            >
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

                                <h3>Looking For an Excellent Business Solution?</h3>
                                <p className="hero-description">
                                    Look no further than S M Service Consultancy. With our team of
                                    seasoned professionals and a proven track record of delivering
                                    outstanding results, we provide tailored business solutions
                                    that exceed expectations. Let's elevate your business
                                    together.
                                </p>

                                <div className="features-text">
                                    <h4>We Deliver High-Quality Solutions</h4>
                                    <p className="hero-description">
                                        At S M Service Consultancy, our commitment to excellence is
                                        unwavering. We pride ourselves on delivering high-quality
                                        solutions that exceed expectations, ensuring client
                                        satisfaction and success. Trust us to elevate your projects
                                        to new heights.
                                    </p>
                                    <ul className="service-features-list">
                                        <div className="inner">
                                            <div role="tablist" className="services-list">
                                                {servicesData.map((service) => (
                                                    <button
                                                        key={service.id}
                                                        onClick={() => toggleService(service.id)}
                                                        className={`services-button ${activeService === service.id ? "active" : ""
                                                            }`}
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
                                                    style={{
                                                        display:
                                                            activeService === service.id ? "block" : "none",
                                                    }}
                                                >
                                                    <div
                                                        id={`panel-${service.id}`}
                                                        className="servicePage-box"
                                                    >
                                                        {/* <h3 className="service">{service.serviceName}</h3> */}

                                                        <ul className="service-features-list">
                                                            {service.services.map((item, index) => (
                                                                <li key={index}>
                                                                    <FontAwesomeIcon icon={faCheckCircle} />{" "}
                                                                    {item}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </ul>
                                    <p className="hero-description">
                                        Whether you're embarking on a new venture or seeking to
                                        optimize existing operations, we're here to provide tailored
                                        consultancy services that drive your success. With our
                                        unwavering dedication to quality and a relentless pursuit of
                                        excellence, trust us to be your partner in realizing your
                                        goals. <br />
                                        Explore our expertise, meet our team, and discover how S M
                                        Service Consultancy can elevate your projects to new
                                        heights. Welcome to a consultancy experience redefined.{" "}
                                        <br />
                                        Ready to embark on your next project journey? Get in touch
                                        with us today.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <aside className="services-widget">
                                <section className="widget widget_categories">
                                    <h3 className="widget-title">Our Services</h3>
                                    <ul>
                                        <li className="active">Mechanical</li>
                                        <li>Electric</li>
                                        <li>Plumbing</li>
                                        <li>IT Services</li>
                                    </ul>
                                </section>
                                <section className="widget widget_download_btn">
                                    <h3 className="widget-title">Company Profile</h3>
                                    <div className="section-bottom">
                                        <a
                                            href={PDF}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="active"
                                        >
                                            Download PDF
                                        </a>
                                        {/* <a
                                            href={WORD}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="default-btn"
                                        >
                                            Download Word File
                                        </a> */}
                                    </div>
                                </section>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default ServicePage;
