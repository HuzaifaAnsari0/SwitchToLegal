import React, { useState } from 'react';
import {
  CheckCircle, FileSignature, ArrowRight, ChevronDown, ChevronUp, Phone, Mail, MapPin, User, Shield, Clock, Lock, Award, Users, Globe, Zap, FileText
} from 'lucide-react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import ServiceForm from '../components/ServiceForm';


const faqs = [
  {
    q: 'Who should get multiple GST registrations?',
    a: 'Businesses with branches in multiple states must apply for separate GSTINs for each state.'
  },
  {
    q: 'Who can register under the Composition Scheme?',
    a: 'Small businesses with turnover under ₹1.5 Cr (₹75L for special states) can register and pay GST at reduced rates with simplified returns.'
  },
  {
    q: 'Who is a Primary Authorised Signatory?',
    a: 'The individual who is authorized to file returns and act on behalf of the business under GST—usually a director, partner, or proprietor.'
  },
  {
    q: 'What is a Taxable Event under GST?',
    a: 'Any supply of goods or services that attracts GST is a taxable event.'
  },
  {
    q: 'Can others besides supplier/receiver pay GST?',
    a: 'Yes, in special cases like reverse charge mechanism (RCM), a third party may be liable to pay tax.'
  }
];

const GSTRegistrationPage = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('GST Registration Application submitted successfully!');
    setFormData({
      name: '',
      mobile: '',
      email: '',
      address: '',
      referralCode: ''
    });
  };

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // Sidebar content for "How It Works", "Benefits", "Required Documents", "Business Types"
  const howItWorks = [
    {
      step: 1,
      title: 'Consultation & Docs',
      desc: 'Expert consultation and document collection'
    },
    {
      step: 2,
      title: 'Application & Submission',
      desc: 'Application review and online submission'
    },
    {
      step: 3,
      title: 'GSTIN Allotment',
      desc: 'Govt. review, GSTIN issued, certificate delivered'
    }
  ];

  const benefits = [
    { icon: Shield, title: 'Input Tax Credit', desc: 'Claim GST paid on purchases against GST collected' },
    { icon: Award, title: 'Legal Supplier Recognition', desc: 'Legally collect taxes and pass ITC' },
    { icon: Lock, title: 'Simplified Compliance', desc: 'One tax system with online filings' },
    { icon: Clock, title: 'Faster Bank Loans', desc: 'GST returns used for creditworthiness' },
    { icon: Users, title: 'Seamless Trade', desc: 'Required for online sales and cross-state trade' },
    { icon: Globe, title: 'Online Sales Ready', desc: 'Sell through Amazon, Flipkart, etc.' }
  ];

  const requiredDocs = [
    { group: 'Personal Details', docs: ['PAN Card (individual/firm/company)', 'Aadhaar Card', 'Passport-size Photo'] },
    { group: 'Address Proof', docs: ['Rent Agreement with Electricity Bill', 'NOC from Owner + Electricity Bill', 'Property Tax Receipt (if applicable)', 'Ownership Documents (for owned office)'] },
    { group: 'Business Proof', docs: ['Partnership Deed / Certificate of Incorporation', 'AOA, MOA, and Board Resolution (for Pvt Ltd)', 'GST Authorization Form (signed by authorized signatory)', 'Bank Statement'] }
  ];

  const businessTypes = [
    { type: 'Proprietorship', docs: ['PAN Card of proprietor', 'Address proof'] },
    { type: 'LLP', docs: ['LLP PAN Card', 'LLP Agreement', 'Partners’ IDs and address proofs'] },
    { type: 'Private Limited Company', docs: ['Certificate of Incorporation', 'PAN Card', 'AOA & MOA', 'Resolution signed by board', 'Directors’ ID & address proof', 'Digital Signatures of directors'] }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white pt-20">
        <div className="max-w-full mx-auto px-6 sm:px-8 lg:px-12 py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Apply for GST Registration</h2>
          <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
            Register your business under GST and get your GSTIN with expert assistance from Switch to Legal.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              <span>100% Online Process</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              <span>Expert Guidance</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              <span>Govt. Authorized</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Application Form */}
          <div className="xl:col-span-2">
            <ServiceForm serviceType="GST Registration" />


            {/* Who Should Register */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Who Should Register?</h3>
              <table className="w-full text-left border mb-2">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-2 border">Type</th>
                    <th className="p-2 border">Criteria</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border">Turnover</td>
                    <td className="p-2 border">₹40L (Goods – Normal State), ₹20L (Services – Normal), ₹10L–₹20L (Special Category)</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">Inter-State Supplier</td>
                    <td className="p-2 border">Mandatory GST registration</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">E-Commerce Operator</td>
                    <td className="p-2 border">Compulsory GST registration</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">Casual Taxable Persons</td>
                    <td className="p-2 border">Temporary businesses (e.g. exhibitions, stalls) must register</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">Voluntary Registration</td>
                    <td className="p-2 border">Any business wishing to claim input tax credit & build trust</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Types of GST Registration */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Types of GST Registration</h3>
              <table className="w-full text-left border mb-2">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-2 border">Type</th>
                    <th className="p-2 border">Applicability</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border">Compulsory Registration</td>
                    <td className="p-2 border">Required regardless of turnover (interstate, e-commerce, etc.)</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">Voluntary Registration</td>
                    <td className="p-2 border">For those under threshold limit, but still want to register</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">Composition Scheme</td>
                    <td className="p-2 border">Small businesses with turnover under ₹1.5 Cr (₹75L for special states)</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">No Registration Needed</td>
                    <td className="p-2 border">For exempt goods/services, low turnover, or agriculture-based supply</td>
                  </tr>
                </tbody>
              </table>
            </div>


            {/* FAQ Section */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Frequently Asked Questions (FAQs)</h3>
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

          {/* Sidebar */}
          <div className="xl:col-span-1 space-y-8">
            {/* How It Works */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">How It Works</h3>
              <div className="space-y-4">
                {howItWorks.map((step, idx) => (
                  <div className="flex items-start" key={idx}>
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">{step.step}</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{step.title}</h4>
                      <p className="text-sm text-gray-600">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Key Benefits</h3>
              <div className="space-y-3">
                {benefits.slice(0, 4).map((benefit, index) => (
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
                {requiredDocs.flatMap(section => section.docs).slice(0, 6).map((doc, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Types */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Business Types</h3>
              <div className="space-y-2 text-sm">
                {businessTypes.map((type, idx) => (
                  <div key={idx}>
                    <div className="font-semibold">{type.type}</div>
                    <ul className="list-disc pl-6 text-gray-700">
                      {type.docs.slice(0, 2).map((doc, i) => (
                        <li key={i}>{doc}</li>
                      ))}
                    </ul>
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

export default GSTRegistrationPage;