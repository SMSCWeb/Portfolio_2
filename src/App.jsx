import React, { useState } from 'react';
import {  HashRouter, Route, Routes } from 'react-router-dom';
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
      <HashRouter>
          {showContent && <NavBar />}
        <Loader hideLoader={toggleContent}>

          <Routes>
            <Route
              path="/"
              element={
                <HomePage />
              }
            />
            <Route
              path="about"
              element={
                  <AboutPage />
              }
            />
            <Route
              path="service"
              element={
                  <ServicePage />
              }
            />
            <Route
              path="project"
              element={
                  <ProjectPage />
              }
            />
            <Route
              path="client"
              element={
                  <ClientPage />
              }
            />
            <Route
              path="contact"
              element={
                  <ContactPage />
              }
            />
            <Route
              path="career"
              element={
                  <CareerPage />
              }
            />
          </Routes>
          {showContent && <Footer />}
        </Loader>
      </HashRouter>
    </>
  );
};

export default App;
