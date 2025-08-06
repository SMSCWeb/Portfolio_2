import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '@/Pages/HomePage';
import AboutPage from '@/Pages/AboutPage';
import ServicePage from '@/Pages/ServicePage';
import ProjectPage from '@/Pages/ProjectPage';
import ClientPage from '@/Pages/ClientPage';
import ContactPage from '@/Pages/ContactPage';
import CareerPage from '@/Pages/CareerPage';
import Footer from '@/Component/Footer';
import NavBar from '@/Component/Navbar';
import Loader from '@/Component/Loader.jsx';

const App = () => {
  const [showContent, setShowContent] = useState(true);

  const toggleContent = () => {
    setShowContent((prevShowContent) => !prevShowContent);
  };

  return (
    <>
      <Router>
        <NavBar />
        <Loader hideLoader={toggleContent}>
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
        </Loader>
      </Router>
    </>
  );
};

export default App;
