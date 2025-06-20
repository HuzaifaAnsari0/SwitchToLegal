import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send,
  CheckCircle,
  Shield,
  Users,
  Award,
  Headphones,
  FileText,
  Calculator,
  Building,
  CreditCard,
  Globe,
  ArrowRight,
  Scale,
  Menu,
  X,
  Contact
} from 'lucide-react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ServiceForm from '../components/ServiceForm';

const ContactUsPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    console.log('Contact form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      primary: "+91 98672 22166",
      secondary: "Tax Support Desk",
      description: "Available 24/7 for immediate assistance",
      color: "bg-green-500"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      primary: "switchtolegal@gmail.com",
      secondary: "Quick Response",
      description: "Get detailed answers to your queries",
      color: "bg-blue-500"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      primary: "Bandra East",
      secondary: "Mumbai - 400051",
      description: "Meet our experts in person",
      color: "bg-purple-500"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Response Time",
      primary: "Within 30 minutes",
      secondary: "Average Response",
      description: "Fast and reliable customer support",
      color: "bg-orange-500"
    }
  ];

  const services = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "ITR e-filing",
      description: "Complete income tax return filing service"
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Company Registration",
      description: "Firm and company registration services"
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Accounting Solutions",
      description: "Professional accounting and bookkeeping"
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "TDS Refund/Return",
      description: "TDS return filing and refund processing"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Digital Signature",
      description: "DSC certificates for secure transactions"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "GST Services",
      description: "GST registration and return filing"
    }
  ];

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Protected",
      description: "Your personal information is safe and secure with us"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description: "Professional experts with domain expertise"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support available"
    }
  ];

  const handleTryServicesClick = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Corporate Header */}
      <Navbar />

      {/* Rest of the existing content with adjusted top padding */}
      <div className="pt-20 sm:pt-24">
        {/* Header Section */}
        <div className="bg-white shadow-sm">
          <div className="container mx-auto px-2 sm:px-4 py-8 sm:py-12">
            <div className="text-center">
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-3 sm:p-4 rounded-2xl shadow-lg">
                  <MessageCircle className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                </div>
              </div>
              <h1 className="text-2xl sm:text-4xl font-bold text-slate-800 mb-2 sm:mb-4">
                Get in Touch with Us
              </h1>
              <p className="text-base sm:text-xl text-slate-600 mb-6 sm:mb-8 max-w-xl sm:max-w-3xl mx-auto">
                We're here to help you with all your tax, legal, and business needs. 
                Reach out to our expert team for personalized assistance.
              </p>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                <div className="flex items-center bg-green-50 text-green-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-base">
                  <CheckCircle className="w-4 h-4 mr-1 sm:mr-2" />
                  GSP Licensed
                </div>
                <div className="flex items-center bg-blue-50 text-blue-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-base">
                  <Award className="w-4 h-4 mr-1 sm:mr-2" />
                  Government Authorized
                </div>
                <div className="flex items-center bg-purple-50 text-purple-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-base">
                  <Shield className="w-4 h-4 mr-1 sm:mr-2" />
                  Secure & Trusted
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-2 sm:px-4 py-8 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Left Side - Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 border border-blue-100 hover:shadow-xl transition-all duration-300">
                    <div className={`${contact.color} p-2 sm:p-3 rounded-xl w-fit mb-3 sm:mb-4`}>
                      <div className="text-white">{contact.icon}</div>
                    </div>
                    <h3 className="font-bold text-slate-800 mb-1 sm:mb-2 text-base sm:text-lg">{contact.title}</h3>
                    <p className="text-base font-semibold text-slate-700 mb-0.5 sm:mb-1">{contact.primary}</p>
                    <p className="text-xs sm:text-sm text-blue-600 font-medium mb-1 sm:mb-2">{contact.secondary}</p>
                    <p className="text-xs sm:text-sm text-slate-600">{contact.description}</p>
                  </div>
                ))}
              </div>

              {/* Services We Offer */}
              <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-8 border border-blue-100">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4 sm:mb-6 text-center">Our Services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start p-3 sm:p-4 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100 hover:shadow-md transition-all duration-300">
                      <div className="text-blue-600 mr-2 sm:mr-3 mt-1">{service.icon}</div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-0.5 sm:mb-1 text-base">{service.title}</h4>
                        <p className="text-xs sm:text-sm text-slate-600">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-8 border border-blue-100 h-fit">
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-1 sm:mb-2">Request a Free Call Back</h2>
                <p className="text-slate-600 text-sm sm:text-base">We'll inspire and assist you with your requirements</p>
              </div>
              

              <ServiceForm serviceType="Contact" />
            </div>
          </div>

          {/* Additional Information Section */}
          <div className="mt-10 sm:mt-16 bg-white rounded-2xl shadow-lg p-4 sm:p-8 border border-blue-100">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2 sm:mb-4">Get Tax Ready with Switch To Legal</h2>
              <p className="text-slate-600 max-w-xl sm:max-w-3xl mx-auto text-sm sm:text-base">
                We were awarded a GSP license after rigorous security evaluation of our technological 
                and financial capabilities to serve our clients with excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 sm:p-6 rounded-2xl mb-3 sm:mb-4">
                  <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mx-auto mb-2 sm:mb-4" />
                  <h3 className="font-bold text-slate-800 mb-1 sm:mb-2 text-base sm:text-lg">Ensure Security</h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    We keep your personal information safe and secure. Your privacy is protected across Switch To Legal.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 sm:p-6 rounded-2xl mb-3 sm:mb-4">
                  <Users className="w-10 h-10 sm:w-12 sm:h-12 text-green-600 mx-auto mb-2 sm:mb-4" />
                  <h3 className="font-bold text-slate-800 mb-1 sm:mb-2 text-base sm:text-lg">Expert Team</h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Our expert team has expertise in their domain and the ability to deliver quality work.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 sm:p-6 rounded-2xl mb-3 sm:mb-4">
                  <Headphones className="w-10 h-10 sm:w-12 sm:h-12 text-purple-600 mx-auto mb-2 sm:mb-4" />
                  <h3 className="font-bold text-slate-800 mb-1 sm:mb-2 text-base sm:text-lg">24/7 Support</h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Extraordinary customer support - get help and find answers to questions in real-time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Action Banner */}
          <div className="mt-8 sm:mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-4 sm:p-8 text-white text-center">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">Ready to Get Started?</h2>
            <p className="text-blue-100 mb-4 sm:mb-6 max-w-lg sm:max-w-2xl mx-auto text-sm sm:text-base">
              Join thousands of satisfied customers who trust Switch To Legal for their business and tax needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a 
                href="tel:+917413826826"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-2 sm:py-3 px-4 sm:px-8 rounded-xl transition-all duration-300 flex items-center justify-center text-sm sm:text-base"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +91 98672 22166
              </a>
              <button
                className="bg-blue-800 hover:bg-blue-900 text-white font-semibold py-2 sm:py-3 px-4 sm:px-8 rounded-xl transition-all duration-300 flex items-center justify-center text-sm sm:text-base"
                onClick={handleTryServicesClick}
              >
                Try Our Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUsPage;
