import React, { useEffect, useState } from "react";
import "@/styles/ClientPage.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const logos = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrjxy4LCfmpgHp6uO3_fzflDp1m12qazdYow&s",
  "https://www.sanjivaniconsultant.com/wp-content/uploads/2020/03/lg2N.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLE2gjqwcc9jWYr9DY1oey6UmQrOtEBxPsPw&s",
  "https://www.sanjivaniconsultant.com/wp-content/uploads/2022/09/resize-1663935635122215938croppedimage18.png",
  "https://www.sanjivaniconsultant.com/wp-content/uploads/2022/09/resize-1663934796265803595croppedimage10.png",
  "https://mani-group.com/wp-content/themes/manigroup/source/images/site-logo.svg",
  "https://ctc-composites.com/files/assets/images/ctc_both.svg",
  "https://www.sanjivaniconsultant.com/wp-content/uploads/2022/09/resize-16639348791902852855croppedimage11.png",
"https://static.wixstatic.com/media/a1d5cf_78ea4295858f465c8fa2642115afc708~mv2.jpg/v1/fit/w_2500,h_1330,al_c/a1d5cf_78ea4295858f465c8fa2642115afc708~mv2.jpg",
  "https://www.sanjivaniconsultant.com/wp-content/uploads/2022/09/resize-16639350621729014097croppedimage13.png",
  "https://www.sanjivaniconsultant.com/wp-content/uploads/2022/09/resize-1663935299943490446croppedimage15.png",
  "https://www.sanjivaniconsultant.com/wp-content/uploads/2022/09/resize-1663935478154692368croppedimage17.png",
  "https://www.sanjivaniconsultant.com/wp-content/uploads/2022/09/resize-16639358841712155371croppedimage16.png",
  "https://www.sanjivaniconsultant.com/wp-content/uploads/2022/09/resize-16639359441276039172croppedimage14.png",
  "https://www.sanjivaniconsultant.com/wp-content/uploads/2020/03/lg5n.jpg",
  "https://www.sanjivaniconsultant.com/wp-content/uploads/2020/03/lg3N.jpg",
  "https://www.sanjivaniconsultant.com/wp-content/uploads/2020/03/lg6N.jpg",
  "https://www.sanjivaniconsultant.com/wp-content/uploads/2020/03/lg8.jpg",
  "https://www.sanjivaniconsultant.com/wp-content/uploads/2020/02/lg11.jpg",
  "https://www.sanjivaniconsultant.com/wp-content/uploads/2020/02/lg10.jpg",
  "https://www.sanjivaniconsultant.com/wp-content/uploads/2020/02/lg9.jpg",
   "https://nexgenrealty.in/wp-content/uploads/2020/11/ambuja-neotia.jpg",
  "https://www.sanjivaniconsultant.com/wp-content/uploads/2020/02/lg7.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Bhabha_Atomic_Research_Centre_Logo.png/1200px-Bhabha_Atomic_Research_Centre_Logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/4/4b/Voltas_logo.png",
  "https://newprojects.99acres.com/projects/vinayakgroupkolkata/deodfz8_1739520805_569493689_O.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKD8T9eq5ifK9v5WdmB2h_yLxL48Qc3SYPa0DDe1yewQRaGQ5DgPgkiKR0m0G9qtm40ao&usqp=CAU",
];

const ClientPage = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollButton(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div>
      <div
        className={`scroll-area ${showScrollButton ? "show" : ""}`}
        onClick={scrollToTop}
      >
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
                      <Link to="/"><p>Home</p></Link>
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

      <div className="client-page-section">
        <div className="client-page-container">
          <div className="client-container">
            <div className="client-row">
              {logos.map((logo, index) => (
                <div key={index} className="client-col">
                  <div className="client-box" title={`Client ${index + 1}`}>
                    <img
                      src={logo}
                      alt={`Client Logo ${index + 1}`}
                      loading="lazy"
                      onError={(e) => (e.currentTarget.style.visibility = "hidden")}
                      className="logo-img"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientPage;
