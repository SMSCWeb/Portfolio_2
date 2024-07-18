import { useState, useEffect } from "react";
// import ClearIcon from '@mui/icons-material/Clear';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./styles/ProjectPage.css"
import Image1 from "./assets/bg_image/bg20.jpeg";
import Image2 from "./assets/bg_image/bg19.jpg";
import Image3 from "./assets/bg_image/bg18.jpg";
import Image4 from "./assets/bg_image/bg17.jpeg";
import Image5 from "./assets/bg_image/bg16.jpg";
import Image6 from "./assets/bg_image/bg15.jpg";
import Image7 from "./assets/bg_image/bg14.jpg";
import Image8 from "./assets/bg_image/bg13.jpg";
import Image9 from "./assets/bg_image/bg12.jpg";
import Image10 from "./assets/bg_image/bg23.jpeg";

import Image12 from "./assets/bg_image/bg25.png";
import Image13 from "./assets/bg_image/bg26.jpg";
import Image14 from "./assets/bg_image/bg27.jpg";
import Image15 from "./assets/bg_image/bg29.jpg";
import Image16 from "./assets/bg_image/bg30.jpg";
import Image17 from "./assets/bg_image/bg31.jpg";
import Image18 from "./assets/bg_image/bg32.png";
import Image19 from "./assets/bg_image/bg33.jpg";
import { faArrowUp, faXmark } from "@fortawesome/free-solid-svg-icons";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";

const completeImages = [Image1, Image2, Image3, Image4, Image5, Image6,Image7, Image8, Image9, Image10, Image12, Image13, Image14,Image15, Image16, Image17, Image18, Image19];
const continueImages = [Image2, Image5, Image3, Image1, Image6, Image4];

const ProjectPage = () => {
  const [modalImage, setModalImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showCompleteSection, setShowCompleteSection] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, [modalImage]);

  const openModal = (image) => {
    setLoading(true);
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };
  const showCompleteProject = () => {
    setShowCompleteSection(true);
  };

  const showContinueProject = () => {
    setShowCompleteSection(false);
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
                  <h1>Our Works</h1>
                </div>
                <div className="breatcome-text">
                  <ul>
                    <li>
                      <Link to="/">
                        <p>Home</p>
                      </Link>
                    </li>
                    <li> &gt; Projects</li>
                  </ul>
                </div>
              </div>
              <div id="overlay"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="project-page-container">
        <div className="help-area">
          <div className="container">
            <div className="row help align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="help-thumb">
                  <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRlYW0lMjBiYW5uZXJ8ZW58MHx8MHx8fDA%3D" alt="help-thumb" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="section-title text-left">
                  <div className="section-sub-title">
                    <h5>WE ARE HERE FOR</h5>
                  </div>
                  <div className="section-main-title">
                    <h1>We are help identify your</h1>
                    <h1>business needs.</h1>
                  </div>
                  <p className="section-title-desc">
                  Discover the culmination of expertise and dedication at S M Service Consultancy. From pioneering urban infrastructure projects to innovative industrial solutions, our portfolio showcases a diverse range of successful endeavours. Each project exemplifies our commitment to excellence, innovation, and client satisfaction. Dive into our works and witness the transformative power of our solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project-page-container">
          <div className="project-selection-buttons">
            {/* <button onClick={showCompleteProject}>Complete Project</button>
            <button onClick={showContinueProject}>Continue Project</button> */}
          </div>
          {showCompleteSection && (
            <div className="complete-project-section">
              <div className="project-container">
                <div className="project-content">
                  <p className="section-main-title project-page-title">Our Complete Project</p>
                  <p className='hero-description service-description service-page-desc'>At S M Service Consultancy, we take pride in our track record of successfully completed projects. Each endeavour represents a testament to our commitment to excellence and client satisfaction. Explore our portfolio of completed projects to see firsthand the impactful solutions we've delivered across various industries. From inception to execution, trust us to bring your vision to life.
                  </p>
                </div>
                <div className="gallery">
                  <div className="grid">
                    {completeImages.map((image, index) => (
                      <div key={index} className="grid-item">
                        <div className="grid-item-inner" onClick={() => openModal(image)}>
                          <img
                            src={image}
                            alt={`Image ${index + 1}`}
                            width={400}
                            height={300}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  {modalImage && (
                    <div className="project-modal">
                      <span className="close-button" onClick={closeModal}>
                        <FontAwesomeIcon icon={faXmark} />
                      </span>
                      <img src={modalImage} alt="Modal Image" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          {!showCompleteSection && (
            <div className="continue-project-section">
              <div className="project-container">
                <div className="project-content">
                  <p className="section-main-title project-page-title">Our Ongoing Project</p>
                  <p className='hero-description service-description service-page-desc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum eligendi illo explicabo voluptatem sapiente distinctio vel quasi voluptatibus est, animi nesciunt, temporibus tempore, quidem autem expedita. Sequi obcaecati ex soluta!
                  </p>
                </div>
                <div className="gallery">
                  <div className="grid">
                    {continueImages.map((image, index) => (
                      <div key={index} className="grid-item">
                        <div className="grid-item-inner" onClick={() => openModal(image)}>
                          <img
                            src={image}
                            alt={`Image ${index + 1}`}
                            width={400}
                            height={300}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  {modalImage && (
                    <div className="project-modal">
                      <span className="close-button" onClick={closeModal}>
                        <FontAwesomeIcon icon={faXmark} />
                      </span>
                      <img src={modalImage} alt="Modal Image" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
      {/* <Footer /> */}
    </div>

  );
};

export default ProjectPage;