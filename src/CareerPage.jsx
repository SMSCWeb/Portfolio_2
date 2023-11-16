import React from 'react'
import "./styles/CareerPage.css"
import Image1 from "./assets/bg1.jpg";
import { Link } from 'react-router-dom';

const CareerPage = () => {
  return (
    <div>
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
          <div class="t-5-col p-6-col d-8-col page-intro-left">
            <div> <h1 class="heading1 semibold-text page-intro-title">
              Join us
            </h1></div>
            <div class="d-11-col t-8-col p-6-col page-intro-description heading4 light-text after-50-px-wide after-25-px-phone">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis ea officia molestiae corrupti rerum libero hic tempora nesciunt perferendis quam recusandae aut ullam ex iure, placeat itaque unde praesentium sint. Eligendi omnis officia odio dignissimos voluptates quod aut distinctio, nostrum ipsa consequuntur exercitationem adipisci laborum culpa nobis, corporis reiciendis. Quisquam.</p>
            </div>

          </div>
        </div>
        <div className="career-right-section">
          <div className="row contact_bg">
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
                <label>
                  Upload CV:
                  <input type="file" name="Upload Cv" accept="application/pdf" />
                </label>
              </div>
              <div className="contact-form-button btn">
                <button type="submit">Submit Now<i className="bi bi-arrow-right"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default CareerPage