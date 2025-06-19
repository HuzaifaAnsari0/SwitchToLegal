import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/About';
import DSCInquiryPage from './pages/DSCInquiryPage';
import ContactUsPage from './pages/ContactUsPage';
import ITRPage from './pages/ITRPage';
import GSTRegistrationPage from './pages/GSTRegistrationPage';
import NGOPage from './pages/NGOPage';
import ServicePage from './pages/ServicePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dsc-inquiry" element={<DSCInquiryPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/itr-filing" element={<ITRPage />} />
        <Route path="/gst-registration" element={<GSTRegistrationPage />} />
        <Route path="/ngo" element={<NGOPage />} />
        {/* Dynamic service route */}
        <Route path="/service/:serviceSlug" element={<ServicePage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;