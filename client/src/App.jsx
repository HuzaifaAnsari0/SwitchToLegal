import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import DSCInquiryPage from './pages/DSCInquiryPage';
import ContactUsPage from './pages/ContactUsPage';
import ITRPage from './pages/ITRPage';
import GSTRegistrationPage from './pages/GSTRegistrationPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dsc-inquiry" element={<DSCInquiryPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/itr" element={<ITRPage />} />
        <Route path="/gst-registration" element={<GSTRegistrationPage />} />
      </Routes>
    </Router>
  );
}

export default App;