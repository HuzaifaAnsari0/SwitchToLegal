import React, { useState } from 'react';
import { CheckCircle, Shield, Clock, Users, FileText, Lock, Zap, Award, Globe, ArrowRight, ChevronDown, ChevronUp, Phone, Mail, MapPin, User } from 'lucide-react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

const DSCApplication = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    address: '',
    referralCode: ''
  });
  
  const [expandedFaq, setExpandedFaq] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Application submitted successfully!');
  };

  const benefits = [
    { icon: Shield, title: 'Authentication', desc: 'Verifies identity in online transactions' },
    { icon: Clock, title: 'Reduced Time & Cost', desc: 'No physical signatures required' },
    { icon: Lock, title: 'Data Integrity', desc: 'Prevents document tampering' },
    { icon: Award, title: 'Legal Validity', desc: 'Builds trust and credibility' }
  ];

  const faqs = [
    { q: 'What is a Digital Signature Certificate (DSC)?', a: 'A secure digital key used to verify identity and authenticate documents online.' },
    { q: 'How long does it take to get the DSC?', a: 'Typically issued within 30 minutes of verification.' },
    { q: 'Is physical verification required?', a: 'No, the process is entirely online.' },
    { q: 'What documents are required?', a: 'Aadhaar, PAN, photograph, and address proof.' }
  ];

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white pt-20">
        <div className="max-w-full mx-auto px-6 sm:px-8 lg:px-12 py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Apply for Digital Signature Certificate</h2>
          <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
            Secure your Digital Signature Certificate (DSC) quickly and easily. Get started in minutes with our streamlined process.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              <span>100% Online Process</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              <span>Ready in 30 Minutes</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              <span>Government Approved</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Application Form - Takes up more space */}
          <div className="xl:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <FileText className="w-6 h-6 text-blue-600 mr-3" />
                Fill Your Details for Digital Signature Certificate
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Your Name / (नाम) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Mobile Number / (मोबाइल नंबर) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter mobile number"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email ID / (ईमेल) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter email address"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Referral Code (Optional)
                  </label>
                  <input
                    type="text"
                    name="referralCode"
                    value={formData.referralCode}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter referral code"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-medium mb-2">
                    <MapPin className="w-4 h-4 inline mr-2" />
                    Address / (पता) <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Enter your complete address"
                  />
                </div>
              </div>
              
              <button
                onClick={handleSubmit}
                className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center"
              >
                Get Digital Signature Certificate Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>

            {/* DSC Information - Enhanced with better layout */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">What is a Digital Signature Certificate?</h3>
              <p className="text-gray-600 mb-6">
                A Digital Signature Certificate (DSC) is a secure digital key issued by a certifying authority to verify identity and digitally sign documents, ensuring authentication, data integrity, and legal validity.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <FileText className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Sign Certificate</h4>
                  <p className="text-sm text-gray-600">For ITR, GST, MCA filing</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Lock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Encrypt Certificate</h4>
                  <p className="text-sm text-gray-600">For data encryption</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Sign & Encrypt</h4>
                  <p className="text-sm text-gray-600">Complete security solution</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-3">Common Uses:</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                  {['MCA e-filing', 'ITR filing', 'e-Tendering', 'GST Registration', 'Patent Filing', 'e-Bidding', 'Custom filings', 'Contract signing'].map((use, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{use}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* FAQ Section - Moved to main content area */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-4 py-3 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
                    >
                      <span className="font-medium text-gray-800">{faq.q}</span>
                      {expandedFaq === index ? 
                        <ChevronUp className="w-5 h-5 text-gray-600 flex-shrink-0 ml-2" /> : 
                        <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0 ml-2" />
                      }
                    </button>
                    {expandedFaq === index && (
                      <div className="px-4 py-3 bg-white border-t border-gray-200">
                        <p className="text-gray-600">{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Compact Sidebar */}
          <div className="xl:col-span-1 space-y-8">
            {/* How It Works */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">How It Works</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Complete Purchase</h4>
                    <p className="text-sm text-gray-600">Fill the online form</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Verify Identity</h4>
                    <p className="text-sm text-gray-600">Online verification in 5 minutes</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Download Certificate</h4>
                    <p className="text-sm text-gray-600">Ready within 30 minutes</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Key Benefits</h3>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <benefit.icon className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">{benefit.title}</h4>
                      <p className="text-sm text-gray-600">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Required Documents */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Required Documents</h3>
              <div className="space-y-2 text-sm">
                {['Aadhaar Card', 'PAN Card', 'Passport', 'Electricity Bill', 'Passport-size Photo', 'Filled Application Form'].map((doc, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Industries */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Industries We Serve</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Globe, title: 'Government' },
                  { icon: Users, title: 'Healthcare' },
                  { icon: Zap, title: 'Manufacturing' },
                  { icon: FileText, title: 'Legal & Finance' }
                ].map((industry, index) => (
                  <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                    <industry.icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-800">{industry.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DSCApplication;