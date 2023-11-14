import { useState, useEffect } from "react";
// import ClearIcon from '@mui/icons-material/Clear';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "../styles/Project.css"
import Image1 from "../assets/bg1.jpg";
import Image2 from "../assets/bg2.jpg";
import Image3 from "../assets/bg3.jpg";
import Image4 from "../assets/bg4.jpg";
import Image5 from "../assets/bg5.jpg";
import Image6 from "../assets/bg6.jpg";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const images = [Image1, Image2, Image3, Image4, Image5, Image6];

const Project = () => {
    const [modalImage, setModalImage] = useState(null);
    const [loading, setLoading] = useState(false);

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

    return (


        <div className="project-container">
            <div className="project-content">
                <div className="section-main-title">Our Work</div>
                <hr />
                <p className='hero-description service-description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum eligendi illo explicabo voluptatem sapiente distinctio vel quasi voluptatibus est, animi nesciunt, temporibus tempore, quidem autem expedita. Sequi obcaecati ex soluta!
                </p>
            </div>

            <div className="gallery">
                <div className="grid">
                    {images.map((image, index) => (
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
                    <div>
                        <Link to="/project">
                            <button className='btn'>
                                See All Work
                            </button>
                        </Link>
                    </div>
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
    );
};

export default Project;