import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ServicePage from './ServicePage';
import ProjectPage from './ProjectPage';
import ClientPage from './ClientPage';
import ContactPage from './ContactPage';
import CareerPage from './CareerPage';
import Footer from './components/Footer';
import NavBar from './components/Navbar';
import Loader from './Loader';

const App = () => {
  const [showContent, setShowContent] = useState(true);

  const toggleContent = () => {
    setShowContent((prevShowContent) => !prevShowContent);
  };

  return (
    <>
      <BrowserRouter>
        {showContent && <NavBar />}
        <Routes>
          <Route
            path="/"
            element={
              <Loader hideLoader={toggleContent}>
                <HomePage />
              </Loader>
            }
          />
          <Route
            path="about"
            element={
              <Loader hideLoader={toggleContent}>
                <AboutPage />
              </Loader>
            }
          />
          <Route
            path="service"
            element={
              <Loader hideLoader={toggleContent}>
                <ServicePage />
              </Loader>
            }
          />
          <Route
            path="project"
            element={
              <Loader hideLoader={toggleContent}>
                <ProjectPage />
              </Loader>
            }
          />
          <Route
            path="client"
            element={
              <Loader hideLoader={toggleContent}>
                <ClientPage />
              </Loader>
            }
          />
          <Route
            path="contact"
            element={
              <Loader hideLoader={toggleContent}>
                <ContactPage />
              </Loader>
            }
          />
          <Route
            path="career"
            element={
              <Loader hideLoader={toggleContent}>
                <CareerPage />
              </Loader>
            }
          />
        </Routes>
        {showContent && <Footer />}
      </BrowserRouter>
    </>
  );
};

export default App;
