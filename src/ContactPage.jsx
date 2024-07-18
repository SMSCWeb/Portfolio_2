import React, { useEffect, useState } from 'react';
import './styles/ContactPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { faArrowUp, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const ContactPage = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const showButtonThreshold = 300;

    if (scrollY > showButtonThreshold && !showScrollButton) {
      setShowScrollButton(true);
    } else if (scrollY <= showButtonThreshold && showScrollButton) {
      setShowScrollButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showScrollButton]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const Submit = (e) => {
    e.preventDefault();
    const formEle = document.querySelector('form');
    const formDatab = new FormData(formEle);
  
    
    axios.post(
      'https://script.google.com/macros/s/AKfycbxdl3cWVClsKlXcBUnFGnDH8zSHulYDtLY1WF5esMXDYxrBOlHb4yKGhn2Q2QKu7HF0/exec',
      formDatab
    )
      .then((res) => {
        console.log(res.data);
        // Reset the form after successful submission
        formEle.reset();
      })
      .catch((error) => {
        console.error(error);
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
                  <h1>Contact Us</h1>
                </div>
                <div className="breatcome-text">
                  <ul>
                    <li>
                      <Link to="/">
                        <p>Home</p>
                      </Link>
                    </li>
                    <li> &gt; Contact</li>
                  </ul>
                </div>
              </div>
              <div id="overlay"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-page-container">
        <div className="contact-left-section">
          <div className="section-title">
            <div className="section-main-title">
              <h1>Get a free consultation</h1>
            </div>
            <div className="section-description">
              <p>For any additional questions regarding the company or our services, feel free to contact us.</p>
            </div>
            <div className="contact-section-icon">
              <div className="socialLinks">
                <ul>
                  <li>
                    <a href="https://wa.me/918335041317" target="_blank">
                      <FontAwesomeIcon icon={faWhatsapp} className="fa-whatsapp fab" />
                    </a>
                  </li>
                  <li>
                    <a href="mailto:serviceconsultancysm@gmail.com" target="_blank">
                      <FontAwesomeIcon icon={faEnvelope} className="fa-gmail fab" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/s-m-service-consultancy/" target="_blank">
                      <FontAwesomeIcon icon={faLinkedin} className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-right-section">
          <div className="row contact_bg">
            <p>Make an appointment</p>
            <form className="form" onSubmit={(e) => Submit(e)}>
              <div className="form_box d-flex gap-2">
                <div className="form-group col-md-6">
                  <input type="text" name="First" className="form-control" placeholder="First Name" />
                </div>
                <div className="form-group col-md-6">
                  <input type="text" name="Last" className="form-control" placeholder="Last Name" />
                </div>
              </div>
              <div className="form_box d-flex gap-2">
                <div className="form-group col-md-6">
                  <input type="text" name="Email" className="form-control" placeholder="Your Email" />
                </div>
                <div className="form-group col-md-6">
                  <input type="text" name="Phone" className="form-control" placeholder="Your Phone" />
                </div>
              </div>
              <div className='col-lg-12'>

              <div className="form_box">
                <textarea name="Message" className="form-control" id="Message" cols="30" rows="5" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="contact-form-button btn btn-primary">Submit Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default ContactPage;
