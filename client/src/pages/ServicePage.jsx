import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  CheckCircle, Shield, Clock, Users, FileText, Lock, Zap, Award, Globe, ArrowRight, ChevronDown, ChevronUp, Phone, Mail, MapPin, User
} from 'lucide-react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import ServiceForm from '../components/ServiceForm';

const ServicePage = () => {
  const { serviceSlug } = useParams();
  const navigate = useNavigate();
  const [serviceData, setServiceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const url = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        setLoading(true);
        console.log('Fetching service data for:', serviceSlug);
        const response = await fetch(`${url}/service-info/${serviceSlug}`);
        
        //console.log('Response status:', response.status);
        
        if (!response.ok) {
          if (response.status === 404) {
            setError('Service not found');
          } else {
            setError('Failed to load service information');
          }
          return;
        }
        
        const data = await response.json();
        //console.log('Service data received:', data);
        setServiceData(data);
      } catch (err) {
        setError('Failed to load service information');
        console.error('Error fetching service data:', err);
      } finally {
        setLoading(false);
      }
    };

    if (serviceSlug) {
      fetchServiceData();
    }
  }, [serviceSlug, url]);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading service information...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !serviceData) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="text-red-600 text-6xl mb-4">⚠️</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Service Not Found</h2>
            <p className="text-gray-600 mb-4">{error || 'The requested service could not be found.'}</p>
            <p className="text-gray-500 text-sm mb-4">Service Slug: {serviceSlug}</p>
            <button
              onClick={() => navigate('/')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Go Back Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white pt-20">
        <div className="max-w-full mx-auto px-6 sm:px-8 lg:px-12 py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">{serviceData.serviceName} – Simplified & Hassle-Free</h2>
          <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
            {`${serviceData.serviceName} is a comprehensive service designed to help you navigate the legal and compliance requirements efficiently.`}
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
          {/* Application Form - Enhanced professional design */}
          <div className="xl:col-span-2">
            {/* <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-5">
                <h3 className="text-xl font-semibold text-white">Apply for {serviceData.serviceName}</h3>
                <p className="text-blue-100 text-sm mt-1">Complete the form below to get started</p>
              </div>
              <div className="p-8">
                
              </div>
            </div> */}
            <ServiceForm serviceType={serviceData.serviceName} />

            {/* Service Description Section - Enhanced */}
            {serviceData.description && (
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <FileText className="mr-3 h-6 w-6 text-blue-600" />
                  Service Description
                </h3>
                <div className="prose prose-blue max-w-none text-gray-700">
                  <p className="leading-relaxed">{serviceData.description}</p>
                </div>
              </div>
            )}
            
            {/* FAQ Section */}
            {serviceData.faqs && serviceData.faqs.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {serviceData.faqs.map((faq, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full px-4 py-3 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
                      >
                        <span className="font-medium text-gray-800">{faq.question}</span>
                        {expandedFaq === index ?
                          <ChevronUp className="w-5 h-5 text-gray-600 flex-shrink-0 ml-2" /> :
                          <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0 ml-2" />
                        }
                      </button>
                      {expandedFaq === index && (
                        <div className="px-4 py-3 bg-white border-t border-gray-200">
                          <p className="text-gray-600">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
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
                    <h4 className="font-semibold text-gray-800">Submit Required Data</h4>
                    <p className="text-sm text-gray-600">Email or WhatsApp your documents</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Get Confirmation</h4>
                    <p className="text-sm text-gray-600">Service completed within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Required Documents */}
            {serviceData.requiredDocuments && serviceData.requiredDocuments.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Required Documents</h3>
                <div className="space-y-2 text-sm">
                  {serviceData.requiredDocuments.map((doc, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Why Choose Us */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-blue-600 mb-4">Why Choose Us</h3>
              <p className="text-gray-700 mb-2">
                Our mission is to provide accessible, reliable, and affordable legal services to all individuals who require assistance in dealing with the government.
              </p>
              <p className="text-gray-700">
                Our vision is to create a society where everyone has equal access to legal services and can exercise their rights without facing any undue obstacles.
              </p>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServicePage; 