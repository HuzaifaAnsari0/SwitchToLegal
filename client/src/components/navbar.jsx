import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Phone,
  Scale,
  Menu,
  X,
  FileText,
  Building,
  Shield,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const serviceCategories = [
    { id: 'citizen-documents', title: 'Citizen Documents' },
    { id: 'education-&-scholarship', title: 'Education & Scholarship' },
    { id: 'legal-documents', title: 'Legal Documents' },
    { id: 'property-registration', title: 'Property Registration' },
    { id: 'trade-mark-&-ipr-registration', title: 'Trade Mark & IPR Registration' },
    { id: 'gst-&-itr-registration', title: 'GST & ITR Registration' },
    { id: 'insurance', title: 'Insurance' },
    { id: 'csc-kyc-&-others-id-proof', title: 'CSC KYC & Others ID Proof' },
    { id: 'business-startup', title: 'Business Startup' },
    { id: 'e-banking', title: 'E-Banking' },
    { id: 'tours-travel-&-visa', title: 'Tours, Travel & Visa' },
    { id: 'e-loan', title: 'E-Loan' },
    { id: 'free-tele-law-&-e-court-support', title: 'Free Tele Law & e-Court Support' },
    { id: 'e-commerce-&-digital-platform', title: 'E-Commerce & Digital Platform' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown and mobile menu when route changes
  useEffect(() => {
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [location]);

  const scrollToService = (serviceId) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: serviceId } });
      setServicesDropdownOpen(false);
      setMobileMenuOpen(false);
      return;
    }
    const element = document.getElementById(serviceId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  // Handle scroll after navigation
  useEffect(() => {
    if (location.state?.scrollTo) {
      const serviceId = location.state.scrollTo;
      setTimeout(() => {
        const element = document.getElementById(serviceId);
        if (element) {
          const navbarHeight = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [location]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-3' : 'bg-white/95 backdrop-blur-sm py-4'}`}>
      <div className="w-full max-w-full mx-auto px-2 sm:px-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center min-w-0">
            <Link to="/" className="flex items-center text-slate-800 min-w-0">
              <div className="mr-3 flex-shrink-0">
                <img src={logo} alt="Logo" className="w-12 h-12 sm:w-14 sm:h-14" />
              </div>
              <div className="truncate">
                <span className="text-lg sm:text-xl font-bold block truncate">Switch to Legal</span>
                <div className="text-xs text-slate-500 font-medium truncate">Professional Services</div>
              </div>
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors flex items-center px-2 py-1"
                aria-haspopup="true"
                aria-expanded={servicesDropdownOpen}
              >
                Services
                {servicesDropdownOpen ? 
                  <ChevronUp className="w-4 h-4 ml-1" /> : 
                  <ChevronDown className="w-4 h-4 ml-1" />
                }
              </button>
              
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 sm:w-72 bg-white rounded-lg shadow-xl border border-slate-200 py-2 max-h-[80vh] overflow-y-auto z-50">
                  {serviceCategories.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => scrollToService(service.id)}
                      className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors"
                    >
                      {service.title}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* <Link 
              to="/itr-filing"
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors relative group px-2 py-1"
            >
              ITR Filing
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></div>
            </Link>
            <Link
              to="/gst-registration"
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors relative group px-2 py-1"
            >
              GST Registration
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></div>
            </Link>
            <Link 
              to="/dsc-inquiry"
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors relative group px-2 py-1"
            >
              DSC
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></div>
            </Link> */}
            <Link 
              to="/about"
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors relative group px-2 py-1"
            >
              About
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></div>
            </Link>
            <Link 
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium flex items-center transition-all duration-300 shadow-sm"
            >
              <Phone className="w-4 h-4 mr-2" />
              Contact Us
            </Link>
          </div>
          
          <button 
            className="lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? 
              <X className="w-7 h-7 text-slate-800" /> : 
              <Menu className="w-7 h-7 text-slate-800" />
            }
          </button>
        </nav>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-black/40 flex justify-end lg:hidden">
            <div className="w-11/12 max-w-xs bg-white shadow-xl rounded-l-lg mt-0 py-4 border-l border-slate-200 h-full overflow-y-auto flex flex-col">
              <div className="flex flex-col space-y-2 px-4">
                {/* Services Dropdown in Mobile Menu */}
                <div className="border-b border-slate-200 pb-2">
                  <div className="font-medium text-slate-700 mb-2">Services</div>
                  <div className="grid grid-cols-1 gap-2 max-h-[60vh] overflow-y-auto">
                    {serviceCategories.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => scrollToService(service.id)}
                        className="text-left text-sm text-slate-600 hover:text-blue-600 hover:bg-slate-50 px-3 py-2 rounded-lg transition-colors"
                      >
                        {service.title}
                      </button>
                    ))}
                  </div>
                </div>

                {/* <Link 
                  to="/itr-filing"
                  className="flex items-center text-slate-700 hover:text-blue-600 hover:bg-slate-50 px-3 py-2 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <FileText className="w-4 h-4 text-slate-400 mr-3" />
                  ITR Filing
                </Link>
                <Link
                  to="/gst-registration"
                  className="flex items-center text-slate-700 hover:text-blue-600 hover:bg-slate-50 px-3 py-2 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Building className="w-4 h-4 text-slate-400 mr-3" />
                  GST Registration
                </Link>
                <Link 
                  to="/dsc-inquiry"
                  className="flex items-center text-slate-700 hover:text-blue-600 hover:bg-slate-50 px-3 py-2 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Shield className="w-4 h-4 text-slate-400 mr-3" />
                  DSC
                </Link> */}
                <Link 
                  to="/about"
                  className="flex items-center text-slate-700 hover:text-blue-600 hover:bg-slate-50 px-3 py-2 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <FileText className="w-4 h-4 text-slate-400 mr-3" />
                  About
                </Link>
                <Link 
                  to="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg flex items-center justify-center mt-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Contact Us
                </Link>
              </div>
            </div>
            {/* Clickable overlay to close menu */}
            <div className="flex-1" onClick={() => setMobileMenuOpen(false)} />
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;