import React, { useState } from 'react';
import {
  CheckCircle, Shield, Clock, Users, FileText, Lock, Zap, Award, Globe, ArrowRight, ChevronDown, ChevronUp, Phone, Mail, MapPin, User
} from 'lucide-react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import ServiceForm from '../components/ServiceForm';

const benefits = [
  { icon: Shield, title: 'No Cascading Tax', desc: 'Eliminates tax-on-tax effect' },
  { icon: Award, title: 'Higher Threshold', desc: 'Small businesses benefit from higher limits' },
  { icon: Lock, title: 'Simple Compliance', desc: 'Easy online filing and fewer returns' },
  { icon: Clock, title: 'Faster Processing', desc: 'Quick confirmation and seamless process' }
];

const faqs = [
  {
    q: 'Who is required to file GST Returns under the GST Act?',
    a: 'Any individual or business registered under GST must file GST returns regularly.'
  },
  {
    q: 'When must I upload my invoice on the GST portal?',
    a: 'Invoices must be uploaded as per return deadlines – usually monthly or quarterly.'
  },
  {
    q: 'Can I revise my GST return?',
    a: 'No. GST returns once filed cannot be revised. Corrections must be made in subsequent returns.'
  },
  {
    q: 'What happens if I miss the filing deadline?',
    a: 'A late fee is applicable. Also, you won’t be able to file the next period\'s return until the pending one is completed.'
  }
];

const requiredDocs = [
  'Sell Invoices (B2B and B2C)',
  'Purchase Invoices',
  'Bank Statement',
  'Invoices to GSTIN-holders',
  'Consolidated inter-state sales data',
  'HSN-wise summary of goods',
  'Credit/Debit notes or Advance Receipts'
];

const GSTReturnPage = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white pt-20">
        <div className="max-w-full mx-auto px-6 sm:px-8 lg:px-12 py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">GST Return Filing – Simplified & Hassle-Free</h2>
          <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
            File your GST returns quickly and accurately with our expert team. Stay compliant and avoid penalties.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              <span>100% Online Process</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              <span>Expert Assistance</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              <span>Govt. Authorized ERI</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Application Form - Takes up more space */}
          <div className="xl:col-span-2">
            <ServiceForm serviceType="GST Return Filing" />

            {/* Overview */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="flex items-center text-blue-700 font-bold text-lg mb-2">
                <CheckCircle className="w-6 h-6 mr-2" /> GST Return Filing – Simplified & Hassle-Free
              </div>
              <ul className="list-disc pl-8 text-gray-700 space-y-1 mb-4">
                <li>Authorized e-Return Intermediary (ERI) – Licensed by the Income Tax Department to e-file returns on your behalf.</li>
                <li>Registered with Startup India – Certified under the Government of India’s Startup India scheme.</li>
                <li>Supported by iStart Rajasthan – An official Government initiative supporting startups.</li>
                <li>Aligned with Digital India – Committed to supporting India’s transition to a digitally empowered economy.</li>
              </ul>
            </div>

            {/* GST Return Filing Process */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-2">GST Return Filing Process</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <FileText className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">1. Fill Online Form</h4>
                  <p className="text-sm text-gray-600">Start by filling the GST return form and making payment to initiate the process.</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Mail className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">2. Submit Invoice Data</h4>
                  <p className="text-sm text-gray-600">Send your invoice data via Email or WhatsApp – quick and simple!</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">3. Confirmation in 24 Hours</h4>
                  <p className="text-sm text-gray-600">Your return is filed within 24 hours once we receive your data. You’ll receive an instant confirmation.</p>
                </div>
              </div>
            </div>


            {/* FAQ Section */}
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
                    <h4 className="font-semibold text-gray-800">Fill Online Form</h4>
                    <p className="text-sm text-gray-600">Start the process online</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Submit Invoice Data</h4>
                    <p className="text-sm text-gray-600">Email or WhatsApp your invoices</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Get Confirmation</h4>
                    <p className="text-sm text-gray-600">Return filed within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>


            {/* Required Documents */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Required Documents</h3>
              <div className="space-y-2 text-sm">
                {requiredDocs.map((doc, index) => (
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
                  { icon: Globe, title: 'E-Commerce' },
                  { icon: Users, title: 'Retail' },
                  { icon: Zap, title: 'Manufacturing' },
                  { icon: FileText, title: 'Professional Services' }
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

export default GSTReturnPage;