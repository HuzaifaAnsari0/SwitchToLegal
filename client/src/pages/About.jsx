import React from 'react';
import { Phone, Mail, MessageCircle, Users, FileText, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '400+', label: 'Business Partners' },
    { number: '400+', label: 'e-Gov Schemes' },
    { number: '100%', label: 'Authorized' }
  ];

  const services = [
    {
      title: 'Legal & Business',
      items: [
        'Legal Documents Assistance',
        'Civil & Criminal Matters',
        'Trademark Registration & ISO',
        'Digital Signature Certificate'
      ]
    },
    {
      title: 'Government IDs',
      items: [
        'e-Aadhaar Services',
        'e-PAN/TAN Updates',
        'e-Passport Services',
        'e-Gazette Services'
      ]
    },
    {
      title: 'Certificates',
      items: [
        'Income Certificate',
        'Domicile Certificate',
        'Marriage Certificate',
        'Pramaan Patra'
      ]
    },
    {
      title: 'Financial Services',
      items: [
        'e-Banking Support',
        'e-Insurance',
        'e-Loan Assistance',
        'Investment Guidance'
      ]
    },
    {
      title: 'Government Schemes',
      items: [
        'Ayushman Bharat Yojna',
        'eShram Registration',
        'Vishwakarma Scheme',
        'Women Empowerment'
      ]
    },
    {
      title: 'Premium Services',
      items: [
        'Education Services',
        'VIP Door Services',
        'Priority Access',
        'Business Consultation'
      ]
    }
  ];

  const contactInfo = [
    {
      title: 'Phone Support',
      items: [
        { type: 'phone', value: '8655540123', href: 'tel:8655540123' },
        { type: 'phone', value: '8898681037', href: 'tel:8898681037' },
        { type: 'phone', value: '7666463388', href: 'tel:7666463388' }
      ]
    },
    {
      title: 'Email & WhatsApp',
      items: [
        { type: 'email', value: 'switchtolegal@gmail.com', href: 'mailto:switchtolegal@gmail.com' },
        { type: 'whatsapp', value: 'WhatsApp Channel', href: 'https://whatsapp.com/channel/0029VapRSHsDzgT4z7kOFe1v' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'YouTube 1', href: 'https://youtu.be/H2o2bCG5T-0' },
    { name: 'YouTube 2', href: 'https://youtu.be/xYIs0gfuUA8' },
    { name: 'Instagram', href: 'https://instagram.com/switch_to_legal?igshid=YmMyMTA2M2Y=' },
    { name: 'Facebook', href: 'https://fb.watch/hYKBZYMHZA/' }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto p-5">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-100 to-blue-200 text-blue-800 p-10 text-center rounded-xl mb-8 border border-blue-300 shadow-sm">
          <h1 className="text-4xl md:text-5xl font-semibold mb-3">
            SWITCH TO LEGAL 2.0
          </h1>
          <p className="text-xl mb-4 text-blue-700">
            Take Your Business to New Heights
          </p>
          <p className="text-base text-blue-600 opacity-90">
            Your trusted partner for legal matters and business expansion with national reach
          </p>
        </div>

        {/* About Section */}
        <div className="bg-white rounded-lg p-8 mb-6 shadow-sm border border-gray-200">
          <h2 className="text-blue-800 text-3xl mb-6 font-medium flex items-center gap-3">
            <Users className="w-8 h-8" />
            About Switch to Legal
          </h2>
          <p className="text-gray-600 mb-6 text-base leading-relaxed">
            Switch to Legal is an authorized e-Governance online services center helping residents and citizens access priority government and business services. We specialize in empowering rural entrepreneurs through our extensive network.
          </p>
          
          <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-6 mb-8 text-yellow-800 text-center">
            <Award className="w-6 h-6 inline-block mr-2" />
            Partnered with 400+ Business Associates nationwide to support entrepreneurial growth and economic development
          </div>

          <div className="flex justify-around flex-wrap gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-slate-100 p-6 rounded-lg border border-slate-200 min-w-[140px]">
                <div className="text-3xl font-semibold text-blue-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="bg-white rounded-lg p-8 mb-6 shadow-sm border border-gray-200">
          <h2 className="text-blue-800 text-3xl mb-8 font-medium flex items-center gap-3">
            <FileText className="w-8 h-8" />
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border-l-4 border-blue-400 shadow-sm border border-gray-100">
                <h3 className="text-blue-800 text-lg mb-4 font-medium">
                  {service.title}
                </h3>
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-600 text-sm flex items-start">
                      <span className="text-blue-400 font-bold mr-3 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 border border-blue-200 shadow-sm">
          <h2 className="text-blue-800 text-3xl mb-8 text-center font-medium flex items-center justify-center gap-3">
            <Phone className="w-8 h-8" />
            Contact Us
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {contactInfo.map((section, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 text-center">
                <h4 className="text-lg mb-4 text-gray-800 font-medium flex items-center justify-center gap-2">
                  {section.title === 'Phone Support' ? <Phone className="w-5 h-5" /> : <Mail className="w-5 h-5" />}
                  {section.title}
                </h4>
                {section.items.map((item, itemIndex) => (
                  <p key={itemIndex} className="mb-2">
                    <a 
                      href={item.href} 
                      className="text-blue-600 hover:text-blue-800 hover:underline transition-colors text-sm"
                      {...(item.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {item.value}
                    </a>
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mb-6 flex-wrap">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white px-6 py-3 rounded-full text-blue-600 text-sm border border-gray-200 hover:bg-gray-50 hover:transform hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="text-center text-gray-600 text-base">
            <p className="font-semibold mb-1">Thanks & Regards, Switch to Legal</p>
            <p className="italic text-sm">By Tatkal eSewa</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;