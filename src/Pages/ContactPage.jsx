import React, { useEffect, useState, useRef } from 'react';
import '@/styles/ContactPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { faArrowUp, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactPage = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const formRef = useRef(null);

  const handleScroll = () => {
    setShowScrollButton(window.scrollY > 300);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);

    const first = formData.get("First");
    const last = formData.get("Last");
    const fullName = `${first} ${last}`.trim();
    const email = formData.get("Email");

    formData.append("name", fullName);
    formData.append("from_name", fullName);
    formData.append("reply_to", email);
    formData.append("access_key", "8472d75a-746d-4efd-b193-021603093873");

    // ✅ Set the custom email subject
    formData.append("subject", `SM Consultancy has received a new response from ${fullName}`);

    formData.delete("First");
    formData.delete("Last");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      toast.success('Message sent successfully!');
      formRef.current.reset();
    } else {
      toast.error('Submission failed. Please try again.');
    }
  };

  return (
    <div>
      <ToastContainer />
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
                    <li><Link to="/"><p>Home</p></Link></li>
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
                    <a href="https://wa.me/918335041317" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faWhatsapp} className="fa-whatsapp fab" />
                    </a>
                  </li>
                  <li>
                    <a href="mailto:serviceconsultancysm@gmail.com" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faEnvelope} className="fa-gmail fab" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/s-m-service-consultancy/" target="_blank" rel="noopener noreferrer">
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
            <form ref={formRef} className="form" onSubmit={onSubmit}>
              <div className="form_box d-flex gap-2">
                <div className="form-group col-md-6">
                  <input type="text" name="First" className="form-control" placeholder="First Name" required />
                </div>
                <div className="form-group col-md-6">
                  <input type="text" name="Last" className="form-control" placeholder="Last Name" required />
                </div>
              </div>
              <div className="form_box d-flex gap-2">
                <div className="form-group col-md-6">
                  <input type="email" name="Email" className="form-control" placeholder="Your Email" required />
                </div>
                <div className="form-group col-md-6">
                  <input type="text" name="Phone" className="form-control" placeholder="Your Phone" required />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form_box">
                  <textarea name="Message" className="form-control" cols="30" rows="5" placeholder="Your Message" required></textarea>
                </div>
                <button type="submit" className="contact-form-button btn btn-primary">Submit Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
