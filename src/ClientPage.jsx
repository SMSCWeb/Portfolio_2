import React, { useEffect, useState } from 'react'
import NavBar from './components/Navbar'
import Footer from './components/Footer'
import "./styles/ClientPage.css"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
const logos = [
  'https://www.sanjivaniconsultant.com/wp-content/uploads/2022/09/resize-1663934796265803595croppedimage10.png',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLE2gjqwcc9jWYr9DY1oey6UmQrOtEBxPsPw&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrjxy4LCfmpgHp6uO3_fzflDp1m12qazdYow&s',
  'https://mani-group.com/wp-content/themes/manigroup/source/images/site-logo.svg',
  'https://ctc-composites.com/files/assets/images/ctc_both.svg',
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
      <div className='client-page-section'>
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
      </div >
      </div>

      {/* <Footer /> */}
    </div >
  )
}

export default ClientPage