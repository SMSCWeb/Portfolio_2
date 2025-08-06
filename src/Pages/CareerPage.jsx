import React, { useEffect, useState } from "react";
import "@/styles/CareerPage.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import CADDesignerImage from "@/assets/Career/job1.jpeg";
import CADExpertImage from "@/assets/Career/job2.jpeg";

const CareerPage = () => {
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
        onClick={scrollToTop}>
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
                  <h1>Our Careers</h1>
                </div>
                <div className="breatcome-text">
                  <ul>
                    <li>
                      <Link to="/">
                        <p>Home</p>
                      </Link>
                    </li>
                    <li> &gt; Careers</li>
                  </ul>
                </div>
              </div>
              <div id="overlay"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="career-page-header">
        <div className="section-main-title">
          {" "}
          <h1>Shape the future of transportation with SMSC!</h1>
        </div>

        <div className="d-11-col t-8-col p-6-col page-intro-description heading4 light-text after-50-px-wide after-25-px-phone">
          <p className="hero-description">
            Are you looking for a career that's both exciting and impactful? At
            SMSC, we offer a unique opportunity to collaborate with a passionate
            team and deliver innovative transport solutions.
          </p>
        </div>
      </div>
      <div className="carrer-page-container">
        <div className="career-left-section">
          <div className="t-5-col p-6-col d-8-col page-intro-left">
            <h5>Here's what makes SMSC stand out:</h5>
            <div className="d-11-col t-8-col p-6-col page-intro-description heading4 light-text after-50-px-wide after-25-px-phone">
              <p className="hero-description">
                <span className="job-data-item-heading">
                  Collaborative Environment:
                </span>{" "}
                We believe in teamwork! You'll work side-by-side with talented
                colleagues from diverse backgrounds, fostering a truly
                collaborative "one team" approach.
              </p>
              <p className="hero-description">
                <span className="job-data-item-heading">Project Variety:</span>{" "}
                Gain exposure to a wide range of transportation projects and
                clients. No two days will be the same!
              </p>
              <p className="hero-description">
                <span className="job-data-item-heading">
                  Shaping the Future:
                </span>{" "}
                We value your input! You'll have a say in the types of projects
                you work on and how SMSC evolves as a company.
              </p>
              <p className="hero-description">
                <span className="job-data-item-heading">Flexible Work:</span>
                We embrace a flexible work style. Whether you prefer the office
                or remote work, we can accommodate your needs (but don't miss
                the morning team coffee run – it's legendary!).
              </p>
            </div>

            <p className="hero-description">
              If you're a passionate and motivated individual looking to make a
              difference in the transportation industry, SMSC is the place for
              you!
              <br />
              <br />
              Join our team and help us shape the future of transportation!
            </p>
          </div>
        </div>
        <div className="career-right-section">
          <video
            src="https://disalconsulting.com/wp-content/uploads/2022/01/Composizione-10.mp4"
            autoPlay
            muted
            loop></video>
        </div>
      </div>
      <div className="job-categories-container">
        <h5 className="section-main-title">CURRENT OPENINGS</h5>
        <div className="job-categories">
          <div className="job-category">
            <img
              src={CADDesignerImage}
              alt="CAD Designer"
              width={360}
              height={520}
            />
            {/* <div className='job-details'>
              <h3 className='category-name widget-title'>CAD Designer</h3>
              <p>
                <span className='job-data-item-heading'>Salary:</span>
                Rs 10,000/- to 12,000/- with incentives
              </p>
              <p className='job-data-item-heading'>Min 1 year of field experience in AutoCAD</p>
              <p className='job-data-item-heading'>6 months training period</p>
              <p>
                <span className='job-data-item-heading'>No. of positions:</span>
                2
              </p>
            </div> */}
          </div>
          <div className="job-category">
            <img
              src={CADExpertImage}
              alt="CAD Expert"
              width={360}
              height={520}
            />
            {/* <div className='job-details'>
              <h3 className='category-name widget-title'>CAD Expert</h3>
              <p>
                <span className='job-data-item-heading'>Salary:</span>
                Rs 15,000/- to 20,000/- with incentives
              </p>
              <p className='job-data-item-heading'>Immediate Joining</p>
              <p>
                <span className='job-data-item-heading'>No. of positions:</span>
                1
              </p>
            </div> */}
          </div>
        </div>

        <div className="career-btn">
          <p className="hero-description">
            Mail Your Cv To{" "}
            <a href="mailto:jobs@smscmep.com">jobs@smscmep.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareerPage;
