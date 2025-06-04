import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MessageCircle, Users, FileText, Award, ArrowRight, Star, Shield, Zap, Globe, CheckCircle, Menu, X, ExternalLink, Building2, CreditCard, Plane, Palette, Scale, Building } from 'lucide-react';

const SwitchToLegal = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { number: '400+', label: 'Business Partners', icon: Users, color: 'from-blue-500 to-blue-600' },
    { number: '400+', label: 'e-Gov Schemes', icon: FileText, color: 'from-green-500 to-green-600' },
    { number: '100%', label: 'Authorized', icon: Shield, color: 'from-purple-500 to-purple-600' },
    { number: '24/7', label: 'Support', icon: Zap, color: 'from-orange-500 to-orange-600' }
  ];

  const services = [
    {
      title: 'Citizen Documents',
      description: 'Complete documentation services',
      icon: FileText,
      color: 'from-blue-500 to-blue-600',
      items: ['Aadhaar Services', 'PAN/TAN Updates', 'Passport Services', 'Certificates']
    },
    {
      title: 'Legal Documents',
      description: 'Professional legal assistance',
      icon: Shield,
      color: 'from-red-500 to-red-600',
      items: ['Legal Assistance', 'Civil Matters', 'Criminal Matters', 'Consultation']
    },
    {
      title: 'Property Registration',
      description: 'Property documentation services',
      icon: Building2,
      color: 'from-green-500 to-green-600',
      items: ['Property Docs', 'Registration', 'Verification', 'Legal Clearance']
    },
    {
      title: 'Trade Mark & IPR',
      description: 'Intellectual property protection',
      icon: Award,
      color: 'from-purple-500 to-purple-600',
      items: ['Trademark Registration', 'IPR Protection', 'Brand Security', 'Legal Rights']
    },
    {
      title: 'GST & ITR',
      description: 'Tax registration & filing',
      icon: CreditCard,
      color: 'from-yellow-500 to-yellow-600',
      items: ['GST Registration', 'ITR Filing', 'Tax Compliance', 'Returns']
    },
    {
      title: 'Tours & Visa',
      description: 'Travel & visa assistance',
      icon: Plane,
      color: 'from-cyan-500 to-cyan-600',
      items: ['Visa Processing', 'Travel Documents', 'Tour Packages', 'Immigration']
    },
    {
      title: 'Digital Services',
      description: 'Web design & marketing',
      icon: Palette,
      color: 'from-pink-500 to-pink-600',
      items: ['Web Design', 'Digital Marketing', 'E-commerce', 'SEO Services']
    },
    {
      title: 'Insurance',
      description: 'Comprehensive insurance',
      icon: Shield,
      color: 'from-indigo-500 to-indigo-600',
      items: ['Life Insurance', 'Health Insurance', 'Vehicle Insurance', 'Business Insurance']
    },
    {
      title: 'e-Banking',
      description: 'Digital banking solutions',
      icon: CreditCard,
      color: 'from-teal-500 to-teal-600',
      items: ['Account Opening', 'Net Banking', 'Mobile Banking', 'Digital Payments']
    },
    {
      title: 'e-Loan',
      description: 'Quick loan processing',
      icon: CreditCard,
      color: 'from-emerald-500 to-emerald-600',
      items: ['Personal Loans', 'Business Loans', 'Home Loans', 'Vehicle Loans']
    },
    {
      title: 'STL Franchisee',
      description: 'Business partnership',
      icon: Users,
      color: 'from-violet-500 to-violet-600',
      items: ['Franchise Setup', 'Business Support', 'Training', 'Marketing']
    },
    {
      title: 'Business Integration',
      description: 'Complete business setup',
      icon: Building2,
      color: 'from-rose-500 to-rose-600',
      items: ['Business Setup', 'Integration', 'Compliance', 'Support']
    },
    {
      title: 'Digital KYC',
      description: 'e-governance solutions',
      icon: Shield,
      color: 'from-amber-500 to-amber-600',
      items: ['Digital KYC', 'e-Governance', 'Verification', 'Compliance']
    },
    {
      title: 'Other Services',
      description: 'Additional specialized services',
      icon: Star,
      color: 'from-slate-500 to-slate-600',
      items: ['Consultation', 'Documentation', 'Support', 'Custom Solutions']
    }
  ];

  const contactInfo = [
    {
      title: 'Phone Support',
      icon: Phone,
      color: 'from-blue-500 to-blue-600',
      items: [
        { type: 'phone', value: '8655540123', href: 'tel:8655540123' },
        { type: 'phone', value: '8898681037', href: 'tel:8898681037' },
        { type: 'phone', value: '7666463388', href: 'tel:7666463388' }
      ]
    },
    {
      title: 'Email & WhatsApp',
      icon: Mail,
      color: 'from-green-500 to-green-600',
      items: [
        { type: 'email', value: 'switchtolegal@gmail.com', href: 'mailto:switchtolegal@gmail.com' },
        { type: 'whatsapp', value: 'WhatsApp Channel', href: 'https://whatsapp.com/channel/0029VapRSHsDzgT4z7kOFe1v' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'YouTube', href: 'https://youtu.be/H2o2bCG5T-0' },
    { name: 'YouTube 2', href: 'https://youtu.be/xYIs0gfuUA8' },
    { name: 'Instagram', href: 'https://instagram.com/switch_to_legal?igshid=YmMyMTA2M2Y=' },
    { name: 'Facebook', href: 'https://fb.watch/hYKBZYMHZA/' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-3' : 'bg-white/95 backdrop-blur-sm py-4'}`}>
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
              <Link to="/" className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors relative group">
                Home
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></div>
              </Link>
              <Link to="/about" className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors relative group">
                About
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></div>
              </Link>
              <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium flex items-center transition-all duration-300 shadow-sm">
                <Phone className="w-4 h-4 mr-2" />
                Contact Us
              </Link>
            </div>

            <button 
              className="lg:hidden p-2" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? 
                <X className="w-6 h-6 text-slate-800" /> : 
                <Menu className="w-6 h-6 text-slate-800" />
              }
            </button>
          </nav>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="lg:hidden bg-white shadow-xl rounded-lg mt-4 py-4 border border-slate-200">
              <div className="flex flex-col space-y-2 px-4">
                <Link to="/" className="flex items-center text-slate-700 hover:text-blue-600 hover:bg-slate-50 px-3 py-2 rounded-lg transition-colors">
                  <FileText className="w-4 h-4 text-slate-400 mr-3" />
                  Home
                </Link>
                <Link to="/about" className="flex items-center text-slate-700 hover:text-blue-600 hover:bg-slate-50 px-3 py-2 rounded-lg transition-colors">
                  <Building className="w-4 h-4 text-slate-400 mr-3" />
                  About
                </Link>
                <Link to="/contact" className="flex items-center text-slate-700 hover:text-blue-600 hover:bg-slate-50 px-3 py-2 rounded-lg transition-colors">
                  <Phone className="w-4 h-4 text-slate-400 mr-3" />
                  Contact Us
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-24">
        {/* Hero Section */}
        <section className="pt-20 pb-12 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
                SWITCH TO LEGAL 2.0
              </h1>
              <p className="text-lg md:text-xl mb-6 text-gray-600 max-w-3xl mx-auto">
                Your trusted partner for legal matters and business expansion with national reach
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 px-8 py-3 rounded-full font-semibold transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <div className={`w-10 h-10 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-800 mb-1">{stat.number}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                About Switch to Legal
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Switch to Legal is an authorized e-Governance online services center helping residents and citizens access priority government and business services. We specialize in empowering rural entrepreneurs through our extensive network.
              </p>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-6 text-center">
              <Award className="w-10 h-10 text-yellow-600 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-yellow-800 mb-2">Nationwide Excellence</h3>
              <p className="text-gray-700">
                Partnered with 400+ Business Associates across India to drive entrepreneurial growth and economic development.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-8 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800">
                Our Premium Services
              </h2>
              <p className="text-base text-gray-600 max-w-3xl mx-auto">
                Comprehensive solutions designed to accelerate your business growth
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 transform hover:scale-102 group"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-8 h-8 bg-gradient-to-r ${service.color} rounded-md flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-sm font-bold text-gray-800">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-xs mb-2">
                      {service.description}
                    </p>
                    <ul className="space-y-0.5">
                      {service.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-500 text-xs flex items-center">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-1 flex-shrink-0" />
                          <span className="truncate">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                Get In Touch
              </h2>
              <p className="text-lg text-gray-600">
                Ready to transform your business? Contact our expert team today.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((section, index) => {
                const IconComponent = section.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                    <div className="text-center mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${section.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-800">{section.title}</h4>
                    </div>
                    <div className="space-y-3">
                      {section.items.map((item, itemIndex) => (
                        <a
                          key={itemIndex}
                          href={item.href}
                          className="block text-center py-2 px-4 bg-gray-50 rounded-lg text-gray-700 hover:bg-gray-100 transition-all duration-300 text-sm"
                          {...(item.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        >
                          {item.value}
                        </a>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Connect With Us</h3>
              <div className="flex justify-center gap-3 flex-wrap">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white px-6 py-3 rounded-full text-gray-700 border border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-all duration-300 transform hover:scale-105 shadow-sm text-sm font-medium"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
              <p className="text-lg font-bold text-gray-800 mb-1">Thanks & Regards</p>
              <p className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                Switch to Legal
              </p>
              <p className="text-gray-600 italic text-sm">By Tatkal eSewa</p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 p-2 rounded-lg mr-3">
                  <Scale className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">Switch to Legal</span>
              </div>
              <p className="text-slate-400 text-sm mb-4">
                Comprehensive Tax, Legal & Compliance Solutions for Businesses and Individuals.
              </p>
              <div className="flex space-x-3 mt-4">
                <a href="tel:+911234567890" className="hover:text-blue-400 transition-colors">
                  <Phone className="w-5 h-5" />
                </a>
                <a href="mailto:info@switchtolegal.com" className="hover:text-blue-400 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="https://wa.me/911234567890" className="hover:text-blue-400 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">ITR Filing</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">GST Registration</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">DSC</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Company Registration</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Trademark</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
                <li><a href="#careers" className="hover:text-blue-400 transition-colors">Careers</a></li>
                <li><a href="#privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <span className="flex items-center">
                    <Phone className="w-4 h-4 mr-2" /> +91 12345 67890
                  </span>
                </li>
                <li>
                  <span className="flex items-center">
                    <Mail className="w-4 h-4 mr-2" /> info@switchtolegal.com
                  </span>
                </li>
                <li>
                  <span className="flex items-center">
                    <Building className="w-4 h-4 mr-2" /> Jaipur, Rajasthan, India
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Switch to Legal. All rights reserved.
            <br />
            Designed and Developed by{' '}
            <a
              href="https://Tarlose.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 font-semibold underline hover:text-blue-300 transition-colors"
            >
              Tarlose
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SwitchToLegal;