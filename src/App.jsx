import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import ServicePage from './ServicePage'
import ProjectPage from './ProjectPage'
import ClientPage from './ClientPage'
import ContactPage from './ContactPage'
import CareerPage from './CareerPage'
const App = () => {
  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="about" element={<AboutPage/>}/>
          <Route path="service" element={<ServicePage/>}/>
          <Route path="project" element={<ProjectPage/>}/>
          <Route path="client" element={<ClientPage/>}/>
          <Route path="contact" element={<ContactPage/>}/>
          <Route path="career" element={<CareerPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App