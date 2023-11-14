import React, { useEffect, useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Service from './components/Service'
import Project from './components/Project'
import Client from './components/Client'
import Footer from './components/Footer'
import NavBar from './components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const HomePage = () => {
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
                <div class="top-wrap">
                    <div class="go-top-btn-wraper">
                        <div class="go-top go-top-button active">
                            <FontAwesomeIcon icon={faArrowUp} />
                            {/* <FontAwesomeIcon icon={faArrowUp} /> */}
                        </div>
                    </div>
                </div>
            </div>
            <NavBar />
            <Hero />
            <About />
            <Service />
            <Project />
            <Client />
            <Footer />
        </div>
    )
}

export default HomePage