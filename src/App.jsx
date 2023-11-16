import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import ServicePage from './ServicePage'
import ProjectPage from './ProjectPage'
import ClientPage from './ClientPage'
import ContactPage from './ContactPage'
import CareerPage from './CareerPage'
// import { Navbar } from 'react-bootstrap'
import Footer from './components/Footer'
import NavBar from './components/Navbar'
const App = () => {
  return (
    <>
      <BrowserRouter >
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="service" element={<ServicePage />} />
          <Route path="project" element={<ProjectPage />} />
          <Route path="client" element={<ClientPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="career" element={<CareerPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App