import React from 'react'
import "./styles/ContactPage.css"
import Image from "./assets/bg3.jpg"
import NavBar from './components/Navbar'
import Footer from './components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
const ContactPage = () => {
  return (
    <div>
      <NavBar />
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
              <div class="socialLinks">
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
      <Footer />
    </div>
  )
}

export default ContactPage