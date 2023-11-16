import React from 'react'
import "../styles/Client.css"
import { Link } from 'react-router-dom'
const Client = () => {
    return (
        <div className='client-section'>
            <p className='section-main-title'>Our Valued Clients</p>
            <hr />
            <p className="section-description hero-description">
                Trusted by leading companies from various industries.
            </p>
            <div className="slider">
                <div className="slide-track">
                    <div className="slide">
                        <img src="https://cdn.freebiesupply.com/logos/thumbs/2x/mcdonalds-black-logo.png" alt="" />
                    </div>
                    <div className="slide">
                        <img src="https://cdn.freebiesupply.com/images/large/2x/starbucks-logo-black-and-white.png" alt="" />
                    </div>
                    <div className="slide">
                        <img src="https://cdn.freebiesupply.com/logos/large/2x/general-electric-black-logo-png-transparent.png" alt="" />
                    </div>
                    <div className="slide">
                        <img src="https://cdn.freebiesupply.com/logos/large/2x/nfl-logo-png-transparent.png" alt="" />
                    </div>
                    <div className="slide">
                        <img src="https://cdn.freebiesupply.com/logos/large/2x/mercedes-benz-6-logo-png-transparent.png" alt="" />
                    </div>
                    <div className="slide">
                        <img src="https://cdn.freebiesupply.com/logos/large/2x/hogwarts-logo-png-transparent.png" alt="" />
                    </div>
                    <div className="slide">
                        <img src="https://cdn.freebiesupply.com/logos/thumbs/2x/mcdonalds-black-logo.png" alt="" />
                    </div>
                    <div className="slide">
                        <img src="https://cdn.freebiesupply.com/images/large/2x/starbucks-logo-black-and-white.png" alt="" />
                    </div>
                    <div className="slide">
                        <img src="https://cdn.freebiesupply.com/logos/large/2x/general-electric-black-logo-png-transparent.png" alt="" />
                    </div>
                    <div className="slide">
                        <img src="https://cdn.freebiesupply.com/logos/large/2x/nfl-logo-png-transparent.png" alt="" />
                    </div>
                    <div className="slide">
                        <img src="https://cdn.freebiesupply.com/logos/large/2x/mercedes-benz-6-logo-png-transparent.png" alt="" />
                    </div>
                    <div className="slide">
                        <img src="https://cdn.freebiesupply.com/logos/large/2x/hogwarts-logo-png-transparent.png" alt="" />
                    </div>
                    <div className="slide">
                        <img src="https://cdn.freebiesupply.com/logos/thumbs/2x/mcdonalds-black-logo.png" alt="" />
                    </div>
                    <div className="slide">
                        <img src="https://cdn.freebiesupply.com/images/large/2x/starbucks-logo-black-and-white.png" alt="" />
                    </div>
                    <div className="slide">
                        <img src="https://cdn.freebiesupply.com/logos/large/2x/general-electric-black-logo-png-transparent.png" alt="" />
                    </div>
                    <div className="slide">
                        <img src="https://cdn.freebiesupply.com/logos/large/2x/nfl-logo-png-transparent.png" alt="" />
                    </div>
                    <div className="slide">
                        <img src="https://cdn.freebiesupply.com/logos/large/2x/mercedes-benz-6-logo-png-transparent.png" alt="" />
                    </div>
                    <div className="slide">
                        <img src="https://cdn.freebiesupply.com/logos/large/2x/hogwarts-logo-png-transparent.png" alt="" />
                    </div>
                </div>
            </div>
            <Link to="/client">
                <button className='btn'>
                    Learn More
                </button>
            </Link>
        </div>
    )
}

export default Client