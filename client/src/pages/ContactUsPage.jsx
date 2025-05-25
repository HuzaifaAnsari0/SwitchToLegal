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
  X
} from 'lucide-react';

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
      primary: "+91 7413 826826",
      secondary: "Tax Support Desk",
      description: "Available 24/7 for immediate assistance",
      color: "bg-green-500"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      primary: "support@webonlineca.com",
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Corporate Header */}
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
              <button className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors relative group">
                ITR Filing
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></div>
              </button>
              <button className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors relative group">
                GST Registration
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></div>
              </button>
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
              <button className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors relative group">
                Trademark
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></div>
              </button>
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
                <button className="flex items-center text-slate-700 hover:text-blue-600 hover:bg-slate-50 px-3 py-2 rounded-lg transition-colors">
                  <FileText className="w-4 h-4 text-slate-400 mr-3" />
                  ITR Filing
                </button>
                <button className="flex items-center text-slate-700 hover:text-blue-600 hover:bg-slate-50 px-3 py-2 rounded-lg transition-colors">
                  <Building className="w-4 h-4 text-slate-400 mr-3" />
                  GST Registration
                </button>
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
                <button className="flex items-center text-slate-700 hover:text-blue-600 hover:bg-slate-50 px-3 py-2 rounded-lg transition-colors">
                  <FileText className="w-4 h-4 text-slate-400 mr-3" />
                  Trademark
                </button>
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

      {/* Rest of the existing content with adjusted top padding */}
      <div className="pt-24">
        {/* Header Section */}
        <div className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-12">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 rounded-2xl shadow-lg">
                  <MessageCircle className="w-12 h-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl font-bold text-slate-800 mb-4">
                Get in Touch with Us
              </h1>
              <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
                We're here to help you with all your tax, legal, and business needs. 
                Reach out to our expert team for personalized assistance.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center bg-green-50 text-green-700 px-4 py-2 rounded-full">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  GSP Licensed
                </div>
                <div className="flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full">
                  <Award className="w-4 h-4 mr-2" />
                  Government Authorized
                </div>
                <div className="flex items-center bg-purple-50 text-purple-700 px-4 py-2 rounded-full">
                  <Shield className="w-4 h-4 mr-2" />
                  Secure & Trusted
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Information */}
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-blue-100 hover:shadow-xl transition-all duration-300">
                    <div className={`${contact.color} p-3 rounded-xl w-fit mb-4`}>
                      <div className="text-white">{contact.icon}</div>
                    </div>
                    <h3 className="font-bold text-slate-800 mb-2">{contact.title}</h3>
                    <p className="text-lg font-semibold text-slate-700 mb-1">{contact.primary}</p>
                    <p className="text-sm text-blue-600 font-medium mb-2">{contact.secondary}</p>
                    <p className="text-sm text-slate-600">{contact.description}</p>
                  </div>
                ))}
              </div>

              {/* Services We Offer */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Our Services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start p-4 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100 hover:shadow-md transition-all duration-300">
                      <div className="text-blue-600 mr-3 mt-1">{service.icon}</div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-1">{service.title}</h4>
                        <p className="text-sm text-slate-600">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Web Online CA?</h2>
                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-white/20 p-3 rounded-xl mr-4">
                        <div className="text-white">{feature.icon}</div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{feature.title}</h3>
                        <p className="text-blue-100">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100 h-fit">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Request a Free Call Back</h2>
                <p className="text-slate-600">We'll inspire and assist you with your requirements</p>
              </div>

              {isSubmitted && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <div>
                    <p className="text-green-800 font-medium">Message sent successfully!</p>
                    <p className="text-green-600 text-sm">We'll get back to you within 30 minutes.</p>
                  </div>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Enter Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Enter Mobile Number
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    placeholder="Your mobile number"
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Enter Email ID
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your email address"
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Select Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    required
                  >
                    <option value="">--Select Subject--</option>
                    <option value="itr-filing">ITR e-filing</option>
                    <option value="company-registration">Company Registration</option>
                    <option value="digital-signature">Digital Signature</option>
                    <option value="gst-services">GST Services</option>
                    <option value="accounting">Accounting Solutions</option>
                    <option value="tds-services">TDS Services</option>
                    <option value="general-inquiry">General Inquiry</option>
                    <option value="technical-support">Technical Support</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Enter Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your requirements or ask any questions..."
                    rows="5"
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>

                <div className="text-center pt-4">
                  <p className="text-sm text-slate-600">
                    Or call us directly at{' '}
                    <a href="tel:+917413826826" className="text-blue-600 font-semibold hover:underline">
                      +91 7413 826826
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information Section */}
          <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Get Tax Ready with Web Online CA</h2>
              <p className="text-slate-600 max-w-3xl mx-auto">
                We were awarded a GSP license after rigorous security evaluation of our technological 
                and financial capabilities to serve our clients with excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl mb-4">
                  <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-bold text-slate-800 mb-2">Ensure Security</h3>
                  <p className="text-sm text-slate-600">
                    We keep your personal information safe and secure. Your privacy is protected across Web Online CA.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl mb-4">
                  <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-bold text-slate-800 mb-2">Expert Team</h3>
                  <p className="text-sm text-slate-600">
                    Our expert team has expertise in their domain and the ability to deliver quality work.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl mb-4">
                  <Headphones className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-bold text-slate-800 mb-2">24/7 Support</h3>
                  <p className="text-sm text-slate-600">
                    Extraordinary customer support - get help and find answers to questions in real-time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Action Banner */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Web Online CA for their business and tax needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+917413826826"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-xl transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +91 7413 826826
              </a>
              <button className="bg-blue-800 hover:bg-blue-900 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 flex items-center justify-center">
                Try Our Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;