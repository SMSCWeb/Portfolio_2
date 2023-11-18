import React, { useEffect, useState } from 'react'
import "./styles/CareerPage.css"
import Image1 from "./assets/bg1.jpg";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import jobData from './components/JobData';

const CareerPage = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [activeJobCategory, setActiveJobCategory] = useState(1);
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




  const jobCategories = [
    { id: 1, name: 'ADABAS-Natural Technical SME', location: 'Location: Santa Fe Province, Rosario', creationDate: '2023-10-25' },
    { id: 2, name: 'AWS Cloud Engineer', location: 'Florida, Fort Lauderdale', creationDate: '2023-09-29' },
    { id: 3, name: 'PowerApps Developer', location: 'Kolkata, West Bengal', creationDate: '2023-12-10' },
    // Add more categories as needed
  ];

  const renderJobCategories = () => {
    return jobCategories.map((category) => (
      <div
        key={category.id}
        className={`category-btn ${activeJobCategory === category.id ? 'active' : ''}`}
        onClick={() => setActiveJobCategory(category.id)}
      >
        <div className='job-catagory-details'>
          <p className="category-name widget-title">{category.name}</p>
          <p className="location">{category.location}</p>
          <p className="creation-date">Creation date: {category.creationDate}</p>
        </div>
      </div>
    ));
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
      <div className='carrer-page-container'>
        <div className="career-left-section">
          <div className="t-5-col p-6-col d-8-col page-intro-left">
            <div className="section-main-title"> <h1>
              Looking to be part of an exciting and growing Transport Advisory business?
            </h1>
            </div>
            <h5>WHY US?</h5>

            <div className="d-11-col t-8-col p-6-col page-intro-description heading4 light-text after-50-px-wide after-25-px-phone">
              <p className='hero-description'>You’ll collaborate side by side with different team members and as “one team” deliver thoughtful transport solutions. You’ll be exposed to a wide variety of transport projects and clients, and most importantly you’ll have a say in the types of projects you want to work on and how the company evolves. <br />We’re also a pretty flexible team whether it is working from the office or home, though you might want to make it in time for the morning team coffee run!</p>
            </div>

          </div>
        </div>
        <div className="career-right-section">
          <video src="https://disalconsulting.com/wp-content/uploads/2022/01/Composizione-10.mp4" autoPlay muted loop></video>
        </div>
      </div>
      <div className='job-categories-container'>
        <h5 className='section-main-title'>CURRENT OPENINGS</h5>
        <div className="job-categories-btn">
          <div className='job-catagories-list'>
            {renderJobCategories()}
          </div>
        </div>
        <div>
          {activeJobCategory !== null && (
            <div className="job-data">
              <ul className="job-data-list">
                <li className="job-data-item">
                  <p className='job-data-item-heading'>Description</p>
                  <p className='hero-description'>{jobData[activeJobCategory].description}</p>
                </li>
                <li className="job-data-item">
                  <p className='job-data-item-heading'>What We Are Looking For:</p>
                  <p className='hero-description'>{jobData[activeJobCategory].whatWeAreLookingFor}</p>
                </li>
                <li className="job-data-item">
                  <p className='job-data-item-heading'>Position Overview:</p>
                  <p className='hero-description'>{jobData[activeJobCategory].positionOverview}</p>
                </li>
                <li className="job-data-item">
                  <p className='job-data-item-heading'>Key Responsibilities:</p>
                  <ul>
                    {Object.values(jobData[activeJobCategory].keyResponsibilities).map(
                      (responsibility, index) => (
                        <li key={index} className="job-responsibilty">
                          <p className='hero-description'>
                            {responsibility}
                          </p>
                        </li>
                      )
                    )}
                  </ul>
                </li>
                <li className="job-data-item">
                  <p className='job-data-item-heading'>Required Skills :</p>
                  <p className='hero-description'>{jobData[activeJobCategory].requiredSkills}</p>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className='career-btn'>
        <p className='hero-description'>
          Mail Your Cv To <a href="mailto:smconsultency@gmail.com">smconsultency@gmail.com</a>
        </p>
      </div>
      </div>
    </div>

  )
}

export default CareerPage