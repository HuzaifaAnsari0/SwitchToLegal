import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone,
  Scale,
  Menu,
  X,
  FileText,
  Building,
  Shield
} from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-3' : 'bg-white/95 backdrop-blur-sm py-4'}`}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center text-slate-800">
              <div className="bg-blue-600 p-2 rounded-lg mr-3">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">Switch to Legal</span>
                <div className="text-xs text-slate-500 font-medium">Professional Services</div>
              </div>
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/itr"
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors relative group"
            >
              ITR Filing
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></div>
            </Link>
            <Link
              to="/gst-registration"
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors relative group"
            >
              GST Registration
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></div>
            </Link>
            <Link 
              to="/dsc-inquiry"
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors relative group"
            >
              DSC
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></div>
            </Link>
            <button className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors relative group">
              Company Registration
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></div>
            </button>
            <Link 
              to="/about"
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors relative group"
            >
              About
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></div>
            </Link>
            <Link 
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium flex items-center transition-all duration-300 shadow-sm"
            >
              <Phone className="w-4 h-4 mr-2" />
              Contact Us
            </Link>
          </div>
          
          <button 
            className="lg:hidden p-2" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? 
              <X className="w-6 h-6 text-slate-800" /> : 
              <Menu className="w-6 h-6 text-slate-800" />
            }
          </button>
        </nav>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white shadow-xl rounded-lg mt-4 py-4 border border-slate-200">
            <div className="flex flex-col space-y-2 px-4">
              <Link 
                to="/itr"
                className="flex items-center text-slate-700 hover:text-blue-600 hover:bg-slate-50 px-3 py-2 rounded-lg transition-colors"
              >
                <FileText className="w-4 h-4 text-slate-400 mr-3" />
                ITR Filing
              </Link>
              <Link
                to="/gst-registration"
                className="flex items-center text-slate-700 hover:text-blue-600 hover:bg-slate-50 px-3 py-2 rounded-lg transition-colors"
              >
                <Building className="w-4 h-4 text-slate-400 mr-3" />
                GST Registration
              </Link>
              <Link 
                to="/dsc-inquiry"
                className="flex items-center text-slate-700 hover:text-blue-600 hover:bg-slate-50 px-3 py-2 rounded-lg transition-colors"
              >
                <Shield className="w-4 h-4 text-slate-400 mr-3" />
                DSC
              </Link>
              <button className="flex items-center text-slate-700 hover:text-blue-600 hover:bg-slate-50 px-3 py-2 rounded-lg transition-colors">
                <Building className="w-4 h-4 text-slate-400 mr-3" />
                Company Registration
              </button>
              <Link 
                to="/about"
                className="flex items-center text-slate-700 hover:text-blue-600 hover:bg-slate-50 px-3 py-2 rounded-lg transition-colors"
              >
                <FileText className="w-4 h-4 text-slate-400 mr-3" />
                About
              </Link>
              <Link 
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg flex items-center justify-center mt-4"
              >
                <Phone className="w-4 h-4 mr-2" />
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;    