import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Clock, 
  CheckCircle, 
  FileText, 
  Users, 
  Phone, 
  Mail, 
  MapPin, 
  Star,
  Download,
  Lock,
  Zap,
  Award,
  ArrowRight,
  User,
  Building,
  CreditCard,
  Scale,
  Menu,
  X
} from 'lucide-react';

const DSCInquiryPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    address: '',
    certificateType: 'sign',
    validity: '1',
    subject: '',
    message: ''
  });

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
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Authentication",
      description: "Authenticate personal information when conducting business online"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Reduced Cost & Time",
      description: "Digitally sign PDF files instantly without physical presence"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Data Integrity",
      description: "Documents cannot be altered after signing, ensuring security"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Document Authenticity",
      description: "Provides confidence in document authenticity and prevents forgery"
    }
  ];

  const certificateTypes = [
    {
      type: "Class 1",
      description: "For individual/private subscribers",
      icon: <User className="w-5 h-5" />
    },
    {
      type: "Class 2", 
      description: "For company directors and ROC filing",
      icon: <Building className="w-5 h-5" />
    },
    {
      type: "Class 3",
      description: "For e-auctions and online tenders",
      icon: <Award className="w-5 h-5" />
    }
  ];

  const useCases = [
    "Income Tax e-filing (ITR)",
    "Company Incorporation",
    "MCA e-filing",
    "GST Returns",
    "Government Tenders",
    "Trademark Applications",
    "Contract Signing",
    "E-Procurement"
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
          <div className="container mx-auto px-4 py-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 rounded-2xl shadow-lg">
                  <Shield className="w-12 h-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl font-bold text-slate-800 mb-4">
                Digital Signature Certificate
              </h1>
              <p className="text-xl text-slate-600 mb-6 max-w-3xl mx-auto">
                Get your DSC approved in 30 minutes with our completely online process. 
                Authorized by Income Tax Department and certified under Startup India.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center bg-green-50 text-green-700 px-4 py-2 rounded-full">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Same Day Processing
                </div>
                <div className="flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full">
                  <Zap className="w-4 h-4 mr-2" />
                  5 Min Verification
                </div>
                <div className="flex items-center bg-purple-50 text-purple-700 px-4 py-2 rounded-full">
                  <Award className="w-4 h-4 mr-2" />
                  Government Authorized
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Information */}
            <div className="space-y-8">
              {/* Pricing Card */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-slate-800 mb-2">Pricing Summary</h2>
                  <div className="text-4xl font-bold text-blue-600 mb-2">₹1,950/-</div>
                  <p className="text-slate-600">Complete processing fee</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-slate-600">Processing Time</span>
                    <span className="font-semibold text-slate-800">30 minutes</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-slate-600">Verification</span>
                    <span className="font-semibold text-slate-800">5 minutes online</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-slate-600">Validity</span>
                    <span className="font-semibold text-slate-800">1-3 years</span>
                  </div>
                </div>
              </div>

              {/* Certificate Types */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-blue-100">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Certificate Classes</h3>
                <div className="space-y-4">
                  {certificateTypes.map((cert, index) => (
                    <div key={index} className="flex items-start p-4 bg-blue-50 rounded-xl">
                      <div className="bg-blue-600 p-2 rounded-lg mr-4">
                        {cert.icon}
                        <span className="text-white text-xs">{}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800">{cert.type} Certificates</h4>
                        <p className="text-sm text-slate-600">{cert.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-blue-100">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Key Benefits</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="p-4 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100">
                      <div className="text-blue-600 mb-2">{benefit.icon}</div>
                      <h4 className="font-semibold text-slate-800 mb-1">{benefit.title}</h4>
                      <p className="text-sm text-slate-600">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Use Cases */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-blue-100">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Common Uses</h3>
                <div className="grid grid-cols-2 gap-2">
                  {useCases.map((useCase, index) => (
                    <div key={index} className="flex items-center p-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-slate-700">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100 h-fit">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Apply for DSC</h2>
                <p className="text-slate-600">Fill your details for Digital Signature Certificate</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-slate-800 border-b border-blue-100 pb-2">Personal Information</h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Your Name / (नाम) *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Mobile Number / (मोबाइल नंबर) *
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      placeholder="Enter mobile number"
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email ID / (ईमेल) *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter email address"
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Address / (पता) *
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Enter your complete address"
                      rows="3"
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      required
                    />
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-slate-800 border-b border-blue-100 pb-2">Certificate Details</h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Certificate Type
                    </label>
                    <select
                      name="certificateType"
                      value={formData.certificateType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                      <option value="sign">Sign Certificate</option>
                      <option value="encrypt">Encrypt Certificate</option>
                      <option value="sign-encrypt">Sign & Encrypt Certificate</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Validity Period
                    </label>
                    <select
                      name="validity"
                      value={formData.validity}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                      <option value="1">1 Year</option>
                      <option value="2">2 Years</option>
                      <option value="3">3 Years</option>
                    </select>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-slate-800 border-b border-blue-100 pb-2">Additional Information</h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                      <option value="">--Select Subject--</option>
                      <option value="new-application">New DSC Application</option>
                      <option value="renewal">DSC Renewal</option>
                      <option value="support">Technical Support</option>
                      <option value="pricing">Pricing Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Enter your message or special requirements"
                      rows="4"
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg flex items-center justify-center"
                >
                  Submit Application
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Section - Support */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Need Help? We're Here 24/7</h2>
              <p className="text-blue-100 text-lg">Get instant support from our expert team</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-white/20 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-blue-100">+91 7413 826826</p>
              </div>

              <div className="text-center">
                <div className="bg-white/20 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-blue-100">support@webonlineca.com</p>
              </div>

              <div className="text-center">
                <div className="bg-white/20 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">Response Time</h3>
                <p className="text-blue-100">Within 30 minutes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DSCInquiryPage;