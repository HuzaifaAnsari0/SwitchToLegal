import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/About';
import ContactUsPage from './pages/ContactUsPage';
import NGOPage from './pages/NGOPage';
import ServicePage from './pages/ServicePage';
import TermsAndCondition from './pages/TermsAndCondition';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFoundPage from './pages/404';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/ngo" element={<NGOPage />} />
          <Route path="/terms-and-conditions" element={<TermsAndCondition />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          {/* Dynamic service route */}
          <Route path="/service/:serviceSlug" element={<ServicePage />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
      {/* WhatsApp Floating Button */}
      <a
  href="https://api.whatsapp.com/send?phone=+919867222166&text=Hello."
  className="float group"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat with us on WhatsApp"
>
  <i className="fa fa-whatsapp my-float"></i>
  <span className="whatsapp-tooltip group-hover:opacity-100">
    Chat with us
  </span>
</a>
<style>{`
  .float{
    position:fixed;
    width:60px;
    height:60px;
    bottom:30px;
    right:30px;
    background-color:#25d366;
    color:#FFF;
    border-radius:50px;
    text-align:center;
    font-size:30px;
    box-shadow: 2px 2px 3px #999;
    z-index:100;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: box-shadow 0.2s, transform 0.2s;
    cursor: pointer;
  }
  .float:hover, .float:focus {
    box-shadow: 0 8px 24px #25d36680;
    transform: scale(1.08);
  }
  .my-float{
    margin-top:0;
    font-size:32px;
    transition: transform 0.2s;
  }
  .float:hover .my-float, .float:focus .my-float {
    transform: scale(1.15) rotate(-8deg);
  }
  .whatsapp-tooltip {
    position: absolute;
    right: 70px;
    bottom: 50%;
    transform: translateY(50%);
    background: #222;
    color: #fff;
    padding: 6px 16px;
    border-radius: 6px;
    font-size: 15px;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s;
    box-shadow: 0 2px 8px #0002;
  }
`}</style>
    </>
  );
}

export default App;