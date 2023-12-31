import React, { useEffect, useState } from 'react'
import "./styles/ContactPage.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
const ContactPage = () => {
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
              <p>For any additional questions regarding the company our our services, feel free to contact us For any additional
                questions regarding the company our our services.</p>
            </div>
            <div className="contact-section-icon">
              <div className="socialLinks">
                <ul>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faFacebook} className='fab fa-facebook-f' />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faTwitter} className='fab fa-twitter' />

                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faWhatsapp} className='fa-whatsapp fab' />
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
        </div>
        <div className='contact-right-section'>
          <div className="row contact_bg">
            <p>Make an appointment</p>
            <div className="col-lg-6 col-md-6">
              <div className="form_box">
                <input type="text" name="Your name" placeholder="First Name" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="form_box">
                <input type="text" name="your name" placeholder="Last Name" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="form_box">
                <input type="text" name="your email" placeholder="Your Email" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">

              <div className="form_box">
                <input type="text" name="phone" placeholder="Your Phone" />
              </div>
            </div>
            <div className="col-lg-12 ">
              <div className="form_box">
                <textarea name="massage" id="massage" cols="30" rows="5" placeholder="Your Massage"></textarea>
              </div>
              <div className="contact-form-button btn">
                <button type="submit">Submit Now<i className="bi bi-arrow-right"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default ContactPage