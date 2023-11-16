import React from 'react'
import NavBar from './components/Navbar'
import Footer from './components/Footer'
import "./styles/ClientPage.css"
import { Link } from 'react-router-dom'
const logos = [
  'https://www.sanjivaniconsultant.com/wp-content/uploads/2022/09/resize-1663934796265803595croppedimage10.png',
  'https://www.sanjivaniconsultant.com/wp-content/uploads/2022/09/resize-16639348791902852855croppedimage11.png',
  'https://www.sanjivaniconsultant.com/wp-content/uploads/2022/09/resize-16639349632145199982croppedimage12.png',
  'https://www.sanjivaniconsultant.com/wp-content/uploads/2022/09/resize-16639350621729014097croppedimage13.png',
  'https://www.sanjivaniconsultant.com/wp-content/uploads/2022/09/resize-1663935299943490446croppedimage15.png',
  'https://www.sanjivaniconsultant.com/wp-content/uploads/2022/09/resize-1663935478154692368croppedimage17.png',
  'https://www.sanjivaniconsultant.com/wp-content/uploads/2022/09/resize-1663935635122215938croppedimage18.png',
  'https://www.sanjivaniconsultant.com/wp-content/uploads/2022/09/resize-1663935723543309197croppedimage19.png',
  'https://www.sanjivaniconsultant.com/wp-content/uploads/2022/09/resize-16639358841712155371croppedimage16.png',
  'https://www.sanjivaniconsultant.com/wp-content/uploads/2022/09/resize-16639359441276039172croppedimage14.png',
  'https://www.sanjivaniconsultant.com/wp-content/uploads/2020/03/lg5n.jpg',
  'https://www.sanjivaniconsultant.com/wp-content/uploads/2020/03/lg2N.jpg',
  'https://www.sanjivaniconsultant.com/wp-content/uploads/2020/03/lg3N.jpg',
  'https://www.sanjivaniconsultant.com/wp-content/uploads/2020/03/lg6N.jpg',
  'https://www.sanjivaniconsultant.com/wp-content/uploads/2020/03/lg8.jpg',
  'https://www.sanjivaniconsultant.com/wp-content/uploads/2020/02/lg11.jpg',
  'https://www.sanjivaniconsultant.com/wp-content/uploads/2020/02/lg10.jpg',
  'https://www.sanjivaniconsultant.com/wp-content/uploads/2020/02/lg9.jpg',
  'https://www.sanjivaniconsultant.com/wp-content/uploads/2020/02/lg4.jpg',
  'https://www.sanjivaniconsultant.com/wp-content/uploads/2020/02/lg7.jpg',
  // Add URLs for all 20 logos here
];

const testimonials = [
  {
    id: 1,
    name: 'Client 1',
    role: 'Designer',
    text: 'Testimonial text for Client 1.',
    imageSrc: 'client1.jpg',
  },
  {
    id: 2,
    name: 'Client 2',
    role: 'Developer',
    text: 'Testimonial text for Client 2.',
    imageSrc: 'client2.jpg',
  },
  // Add more testimonials as needed
];

const ClientPage = () => {
  return (
    <div>
      {/* <NavBar /> */}
      <div className="breatcome-area d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="breatcome-content">
                <div className="breatcome-title">
                  <h1>Our Clients</h1>
                </div>
                <div className="breatcome-text">
                  <ul>
                    <li>
                      <Link to="/">
                        <p>Home</p>
                      </Link>
                    </li>
                    <li> &gt; Client</li>
                  </ul>
                </div>
              </div>
              <div id="overlay"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="client-page-container">
        <div className="client-container">
          <div className="client-row">
            {logos.map((logo, index) => (
              <div key={index} className="client-col">
                <div className="client-box">
                  <img src={logo} alt={`Client Logo ${index}`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <p>testimonial/review</p> */}
      </div >
      {/* <Footer /> */}
    </div >
  )
}

export default ClientPage