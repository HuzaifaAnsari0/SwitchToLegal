import React, { useState } from 'react';
import {
  CheckCircle, Shield, Clock, Users, FileText, Lock, Zap, Award, Globe, ArrowRight, ChevronDown, ChevronUp, Phone, Mail, MapPin, User, BookOpen, FileSignature, Briefcase, Landmark, Banknote
} from 'lucide-react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import ServiceForm from '../components/ServiceForm';

const faqs = [
  {
    q: 'What is Online ITR Filing?',
    a: `It's a legal obligation for individuals with income exceeding the exempt limit, allowing you to file your tax return online.`
  },
  {
    q: 'How is e-filing tax different from regular filing?',
    a: 'E-filing is faster, paperless, and more secure compared to regular filing.'
  },
  {
    q: 'Can I upload my Income Tax Return filing after the deadline?',
    a: 'Yes, but late filing may attract penalties.'
  },
  {
    q: `When do I get a refund if I've paid too much tax?`,
    a: 'You will receive your refund after the tax department processes your ITR.'
  },
  {
    q: 'How can I track the progress of my ITR filing?',
    a: 'You can track it online through the Income Tax e-filing portal.'
  }
];

const ITRPage = () => {
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
          <h2 className="text-3xl font-bold mb-4">Apply for Income Tax Return (ITR) Filing</h2>
          <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
            File your Income Tax Return (ITR) securely and easily with Switch To Legal. Get expert support and maximize your deductions.
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
              <span>Government Authorized</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Application Form */}
          <div className="xl:col-span-2">
            <ServiceForm serviceType="ITR Filing" />

            {/* KYC & ITR Filing */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">KYC Information & ITR Filing</h3>
              <p className="text-gray-700 mb-2">Fill Your Basic KYC Information</p>
              <p className="text-gray-600 mb-4">Fill in your essential details like your Name, DOB, PAN No, Aadhar No, and more.</p>
              <h4 className="font-semibold text-gray-800 mb-2">Documents Required for ITR Filing</h4>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Aadhar Card</li>
                <li>Pan Card</li>
                <li>Form-16</li>
                <li>Salary Slips</li>
                <li>Bank Statement, etc.</li>
              </ul>
            </div>

            {/* Support Channels */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Support Channels</h3>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-center mb-2 text-blue-700 font-semibold">
                    <Phone className="w-5 h-5 mr-2" />
                    Support by Call
                  </div>
                  <p className="text-gray-600 text-sm">A Service Request Number (SRN) will be generated after you submit your Income Tax Return (ITR).</p>
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-2 text-blue-700 font-semibold">
                    <Mail className="w-5 h-5 mr-2" />
                    Support by Chat
                  </div>
                  <p className="text-gray-600 text-sm">Once you confirm your order, our Expert Team will contact you.</p>
                </div>
              </div>
            </div>


            {/* Documents Required */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Documents Required for Income Tax eFiling</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Aadhar Card</li>
                <li>PAN Card</li>
                <li>Bank Account Details</li>
                <li>Form 16</li>
                <li>Form 16A</li>
                <li>Form 26AS</li>
                <li>Fixed Deposit Statements</li>
                <li>Rent Receipts</li>
                <li>Bank Passbook</li>
                <li>Investment Details</li>
                <li>Medical Expenses Receipts (if any)</li>
                <li>Proof of Home Loan Interest (if any)</li>
                <li>Share Transaction Statement (if any)</li>
                <li>GST Registration Number Details (if any)</li>
              </ul>
            </div>

            {/* Income Tax Slab Rates */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Income Tax Slab Rates</h3>
              <div className="mb-4">
                <div className="font-semibold mb-1">Old Regime (for individuals below 60 years)</div>
                <table className="w-full text-left mb-4 border">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-2 border">Tax Slab</th>
                      <th className="p-2 border">Tax Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 border">Up to Rs. 2.5 Lakhs</td>
                      <td className="p-2 border">Nil</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">Rs. 2.5 Lakhs - 5 Lakhs</td>
                      <td className="p-2 border">10%</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">Rs. 5 Lakhs - 10 Lakhs</td>
                      <td className="p-2 border">20%</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">Above Rs. 10 Lakhs</td>
                      <td className="p-2 border">30%</td>
                    </tr>
                  </tbody>
                </table>
                <div className="font-semibold mb-1">New Regime (for all individuals)</div>
                <table className="w-full text-left border">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-2 border">Tax Slab</th>
                      <th className="p-2 border">Tax Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 border">Up to Rs. 3 Lakhs</td>
                      <td className="p-2 border">Nil</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">Rs. 3 Lakhs - 7 Lakhs</td>
                      <td className="p-2 border">5%</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">Rs. 7 Lakhs - 10 Lakhs</td>
                      <td className="p-2 border">10%</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">Above Rs. 10 Lakhs</td>
                      <td className="p-2 border">30%</td>
                    </tr>
                  </tbody>
                </table>
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

          {/* Sidebar */}
          <div className="xl:col-span-1 space-y-8">
            {/* How It Works */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">How It Works</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Fill Application</h4>
                    <p className="text-sm text-gray-600">Complete the online ITR form</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Upload Documents</h4>
                    <p className="text-sm text-gray-600">Upload required KYC and income documents</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Expert Review</h4>
                    <p className="text-sm text-gray-600">Our experts review and process your return</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">E-Filing & Confirmation</h4>
                    <p className="text-sm text-gray-600">We file your ITR and send confirmation</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Required Documents */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Required Documents</h3>
              <div className="space-y-2 text-sm">
                {[
                  'Aadhar Card',
                  'PAN Card',
                  'Bank Account Details',
                  'Form 16',
                  'Form 16A',
                  'Form 26AS',
                  'Fixed Deposit Statements',
                  'Rent Receipts',
                  'Bank Passbook',
                  'Investment Details',
                  'Medical Expenses Receipts (if any)',
                  'Proof of Home Loan Interest (if any)',
                  'Share Transaction Statement (if any)',
                  'GST Registration Number Details (if any)'
                ].map((doc, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Types of ITR Forms */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Types of ITR Forms</h3>
              <ul className="list-disc pl-6 text-gray-700 text-sm space-y-1">
                <li>ITR 1 – Individuals (income up to Rs. 50 lakhs)</li>
                <li>ITR 2 – Individuals/HUFs (no business income)</li>
                <li>ITR 3 – Individuals/HUFs (business income)</li>
                <li>ITR 4 – Presumptive business/profession</li>
                <li>ITR 5 – Firms, AOPs, BOIs</li>
                <li>ITR 6 – Companies (not Section 11)</li>
                <li>ITR 7 – For specific sections</li>
              </ul>
            </div>

            {/* Advantages */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Advantages of Filing ITR</h3>
              <ul className="list-disc pl-6 text-gray-700 text-sm space-y-1">
                <li>Easier Loan Processing</li>
                <li>Proof of Net Worth</li>
                <li>Avoid Penalties</li>
                <li>Claim TDS Refund</li>
                <li>Visa Applications</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ITRPage;