import React, { useState, useEffect } from 'react';
import ogteam from '../assets/ogteam.jpeg';
import logo from '../assets/logo.jpeg';
import testimonial1 from '../assets/person2.png';
import testimonial2 from '../assets/person1.png';
import testimonial3 from '../assets/person3.png';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('meals');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll events for navbar and scroll animations
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Determine active section based on scroll position
      const sections = ['home', 'services', 'impact', 'about', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      id: 'meals',
      icon: '🍱',
      title: 'Community Meal Support',
      description: 'We provide nutritious meals and refreshments to relatives of outstation patients at Tata Memorial Hospital and KEM Hospital, ensuring they have access to basic sustenance during challenging times.',
      details: 'Our volunteers work directly with hospital administration to identify families in need and deliver balanced meals that meet dietary requirements. We serve over 200 meals daily across multiple hospitals.',
      color: 'from-blue-600 to-cyan-400'
    },
    {
      id: 'docs',
      icon: '📄',
      title: 'Documentation Guidance',
      description: 'We assist students and families with accurate documentation for academic and official purposes, including verification, corrections, and preparing necessary paperwork.',
      details: 'Our team of experienced volunteers helps navigate complex documentation requirements for admissions, scholarships, and government schemes. We provide personalized guidance sessions and verification workshops.',
      color: 'from-indigo-600 to-blue-400'
    },
    {
      id: 'education',
      icon: '🎓',
      title: 'Educational Counseling',
      description: 'We advise students about educational funding opportunities, providing information about scholarships and guidance on availing education loans.',
      details: 'We specialize in Maulana Azad Education Loan applications and similar financial aid programs designed for minority communities. Our counselors have helped over 5,000 students secure education funding.',
      color: 'from-violet-600 to-indigo-400'
    },
    {
      id: 'programs',
      icon: '🌍',
      title: 'State-Level Upliftment',
      description: 'We organize state-level awareness and empowerment initiatives aimed at uplifting minority communities and other underrepresented groups.',
      details: 'Our programs focus on education, skill-building, and creating equal opportunities for sustainable growth and development. We work with government agencies and private organizations to maximize our impact.',
      color: 'from-purple-600 to-violet-400'
    },
    {
      id: 'career',
      icon: '📚',
      title: 'Career & Course Guidance',
      description: 'We provide comprehensive educational guidance to students from minority communities for medical, engineering, law, commerce, arts, and other professional courses.',
      details: 'Our counselors offer personalized advice for exams like NEET, JEE, MHT-CET, helping students make informed career decisions. We conduct regular workshops and one-on-one counseling sessions.',
      color: 'from-fuchsia-600 to-purple-400'
    },
    {
      id: 'skills',
      icon: '🛠️',
      title: 'Skill Development',
      description: 'We promote skill enhancement programs to boost employment opportunities among youth, sharing updates on government and private skill development schemes.',
      details: 'Our vocational training initiatives are tailored to current market needs, helping participants gain practical, employable skills. We partner with industry leaders to provide internship and job placement opportunities.',
      color: 'from-blue-600 to-indigo-400'
    }
  ];

  // For testimonials and impact stats
  const impactStats = [
    { figure: '10,000+', label: 'Meals Served', icon: '🍲' },
    { figure: '5,000+', label: 'Students Counseled', icon: '👨‍🎓' },
    { figure: '2,000+', label: 'Documents Processed', icon: '📋' },
    { figure: '500+', label: 'Scholarships Facilitated', icon: '💰' }
  ];

const testimonials = [
    {
        id: 1,
        name: "Rahul Sharma",
        role: "Medical Student",
        quote: "The guidance I received for my NEET preparation and scholarship applications was invaluable. I'm now pursuing my dream of becoming a doctor.",
        image: testimonial1
    },
    {
        id: 2,
        name: "Priya Patel",
        role: "Parent",
        quote: "When my child was hospitalized at Tata Memorial, the meal support program was a blessing. It allowed me to stay by my child's side without worrying about food.",
        image: testimonial2
    },
    {
        id: 3,
        name: "Arjun Kumar",
        role: "Engineering Graduate",
        quote: "The documentation assistance and education loan guidance helped me complete my engineering degree. I'm now employed at a top tech company.",
        image: testimonial3
    }
];

  // Navigation items
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'impact', label: 'Impact' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' }
  ];

  // Scroll to section function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between h-20">
                            {/* Logo */}
                            <div className="flex items-center space-x-2">
                                    <div className={`h-10 w-10 rounded-lg overflow-hidden ${scrolled ? 'shadow-md' : ''}`}>
                                            <img src={logo} alt="Trust Logo" className="w-full h-full object-cover" />
                                    </div>
                                    <span className={`font-bold text-xl ${scrolled ? 'text-gray-800' : 'text-white'}`}>
                                            Marol Human Welfare Trust
                                    </span>
                            </div>

                            {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-1">
                        {navItems.map(item => (
                            <button 
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                                    activeSection === item.id 
                                        ? 'bg-blue-600 text-white font-medium' 
                                        : `${scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`
                                }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                    
            
                    <div className="hidden md:block">
                            <button
                                    onClick={() => window.location.href = '/donate'}
                                    className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition duration-300"
                            >
                                    Donate
                            </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button 
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className={`p-2 rounded-lg ${scrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
                        >
                            {mobileMenuOpen ? '✕' : '☰'}
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white shadow-lg animate-slideDown">
                    <div className="px-4 py-2 space-y-1">
                        {navItems.map(item => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                                    activeSection === item.id ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                                }`}
                            >
                                {item.label}
                            </button>
                        ))}
                        <button
                                onClick={() => window.location.href = '/donate'}
                                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition duration-300"
                            >
                                Donate
                            </button>
                    </div>
                </div>
            )}
        </nav>

        {/* Hero Section */}
        <section id="home" className="relative pt-32 pb-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-indigo-900 to-violet-900 opacity-90 z-0"></div>
            <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center mix-blend-overlay z-0"></div>
            
            
            <div className="absolute inset-0 z-0">
                {[...Array(20)].map((_, i) => (
                    <div 
                        key={i}
                        className="absolute rounded-full bg-white/20 animate-float"
                        style={{
                            width: `${Math.random() * 10 + 5}px`,
                            height: `${Math.random() * 10 + 5}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDuration: `${Math.random() * 10 + 10}s`,
                            animationDelay: `${Math.random() * 5}s`
                        }}
                    ></div>
                ))}
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Empowering Communities Through Support & Guidance
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10">
                        Providing essential services to families and students from minority communities across the region
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <a 
                            href="https://wa.me/919987855127?text=Hello,%20I'm%20interested%20in%20learning%20more%20about%20your%20services."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-blue-700 font-medium px-8 py-3 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300"
                        >
                            Get Support
                        </a>
                        <a 
                            href="https://wa.me/919987855127?text=Hello,%20I'm%20interested%20in%20learning%20more%20about%20your%20services."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-transparent border-2 border-white text-white font-medium px-6 py-3 rounded-xl hover:bg-white/10 transform hover:-translate-y-1 transition duration-300"
                        >
                            Volunteer With Us
                        </a>
                    </div>
                </div>
            </div>

            
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-gray-50"></div>
            <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 80H1440V30C1200 60 720 0 480 30C240 60 120 30 0 10V80Z" fill="#F9FAFB"/>
            </svg>
            </section>

            {/* Services Section */}
            <section id="services" className="py-10 sm:py-20 container mx-auto px-4 sm:px-6">
                <div className="text-center mb-10 sm:mb-16">
                    <h6 className="text-blue-600 font-semibold mb-2">WHAT WE DO</h6>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Our Key Initiatives and Services</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto px-2">
                        Comprehensive support programs designed to empower communities through education, guidance, and essential services
                    </p>
                </div>
                
                {/* Service Navigation - Glassy Tabs - More mobile friendly */}
                <div className="flex overflow-x-auto pb-4 mb-6 sm:mb-8 hide-scrollbar px-4 sm:px-0">
                    <div className="flex space-x-1 sm:space-x-2 mx-auto p-1 bg-gray-100 bg-opacity-60 backdrop-blur-md rounded-xl">
                        {services.map(service => (
                            <button
                                key={service.id}
                                onClick={() => setActiveTab(service.id)}
                                className={`flex items-center px-2 sm:px-4 py-2 sm:py-3 rounded-lg transition-all duration-300 ${
                                    activeTab === service.id 
                                        ? `bg-gradient-to-r ${service.color} text-white shadow-lg` 
                                        : 'bg-white/80 hover:bg-white text-gray-700'
                                }`}
                            >
                                <span className="text-lg sm:text-xl mr-1 sm:mr-2">{service.icon}</span>
                                <span className="whitespace-nowrap text-xs sm:text-base font-medium">{service.title.split(' ')[0]}</span>
                            </button>
                        ))}
                    </div>
                </div>
                
                {/* Active Service Content - Improved for mobile */}
                <div className="relative mb-8 sm:mb-12">
                    {services.map(service => (
                        <div 
                            key={service.id}
                            className={`transition-all duration-500 ${
                                activeTab === service.id 
                                    ? 'opacity-100 transform translate-x-0' 
                                    : 'opacity-0 transform translate-x-8 pointer-events-none absolute inset-0'
                            }`}
                            style={{
                                position: activeTab === service.id ? 'relative' : 'absolute'
                            }}
                        >
                            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                                <div className="flex flex-col md:flex-row">
                                    <div className={`w-full md:w-2/5 bg-gradient-to-br ${service.color} text-white p-6 sm:p-8 flex items-center justify-center`}>
                                        <div className="text-center">
                                            <span className="text-4xl sm:text-7xl inline-block mb-3 sm:mb-4">{service.icon}</span>
                                            <h3 className="text-lg sm:text-3xl font-bold">{service.title}</h3>
                                            <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/30">
                                                <button className="bg-white/20 hover:bg-white/30 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-lg backdrop-blur-sm transition duration-300 text-sm">
                                                    Learn More
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-3/5 p-6 sm:p-8 md:p-12 flex flex-col justify-between">
                                        <div>
                                            <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800">How We Help</h4>
                                            <p className="text-sm sm:text-lg mb-3 sm:mb-6">{service.description}</p>
                                            <p className="text-xs sm:text-base text-gray-600">{service.details}</p>
                                        </div>
                                        <div className="flex flex-wrap gap-2 mt-4 sm:mt-6">
                                            <span className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">Support</span>
                                            <span className="px-2 sm:px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs font-medium">Community</span>
                                            <span className="px-2 sm:px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">Empowerment</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Interactive Stats Section */}
            <section id="impact" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-600 opacity-5 z-0">
                    {/* Decorative grid pattern */}
                    <div className="absolute inset-0" style={{
                        backgroundImage: "linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)",
                        backgroundSize: "50px 50px"
                    }}></div>
                </div>
                
                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h6 className="text-blue-600 font-semibold mb-2">OUR REACH</h6>
                        <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-4">The Impact We've Made</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Working tirelessly to support our community through various initiatives
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                        {impactStats.map((stat, index) => (
                            <div 
                                key={index} 
                                className="bg-white rounded-2xl shadow-lg p-8 text-center transform hover:scale-105 hover:shadow-xl transition duration-300 border border-transparent hover:border-blue-100"
                            >
                                <div className="text-4xl mb-4">{stat.icon}</div>
                                <p className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{stat.figure}</p>
                                <p className="text-gray-600 mt-2 font-medium">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                    
                    {/* Testimonials */}
                <div className="mt-20">
                    <h3 className="text-2xl font-bold text-center mb-12">What Our Community Says</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial) => (
                            <div 
                                key={testimonial.id}
                                className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-blue-600 transform hover:-translate-y-2 transition duration-300"
                            >
                                <div className="flex items-center mb-4">
                                    <img 
                                        src={testimonial.image} 
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full mr-4"
                                    />
                                    <div>
                                        <h4 className="font-bold">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                                    </div>
                                </div>
                                <p className="text-gray-700">"{testimonial.quote}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
            <div className="container mx-auto px-6">
                <div className="md:flex md:items-center md:space-x-12">
                    <div className="md:w-1/2 mb-10 md:mb-0">
                        <div className="relative">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-1 inline-block">
                                <div className="rounded-xl overflow-hidden">
                                    <img 
                                        src={ogteam}
                                        alt="Organization Team" 
                                        className="w-full h-auto mix-blend-overlay opacity-90"
                                    />
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 w-48">
                                <p className="font-bold text-blue-600 text-lg">10+ years</p>
                                <p className="text-gray-700">Serving communities</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <h6 className="text-blue-300 font-semibold mb-2">ABOUT US</h6>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission & Vision</h2>
                        <p className="text-blue-100 mb-6">
                            We are committed to empowering underserved communities through comprehensive support programs, focusing on education, health, and social welfare. By providing essential services and guidance, we aim to create equal opportunities for growth and development.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="bg-blue-500/20 p-2 rounded-lg mr-4">
                                    <span className="text-xl">✨</span>
                                </div>
                                <div>
                                    <h4 className="font-bold mb-1">Vision</h4>
                                    <p className="text-blue-100">A society where every individual has access to equal opportunities and resources.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-blue-500/20 p-2 rounded-lg mr-4">
                                    <span className="text-xl">🎯</span>
                                </div>
                                <div>
                                    <h4 className="font-bold mb-1">Mission</h4>
                                    <p className="text-blue-100">To support and uplift communities through education, health services, and skill development.</p>
                                </div>
                            </div>
                        </div>
                        <button className="mt-8 bg-white text-blue-700 px-8 py-3 rounded-xl font-medium hover:shadow-lg transform hover:-translate-y-1 transition duration-300">
                            Learn Our Story
                        </button>
                    </div>
                </div>
            </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-500 text-white relative overflow-hidden">
            
                                <div className="absolute inset-0 z-0">
                                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                                            </pattern>
                                        </defs>
                                        <rect width="100%" height="100%" fill="url(#grid)" />
                                    </svg>
                                </div>
                                
                                <div className="container mx-auto px-6 text-center relative z-10">
                                    <h2 className="text-4xl font-bold mb-6">Join Us in Making a Difference</h2>
                                    <p className="text-xl max-w-2xl mx-auto mb-10">Whether you need support or want to volunteer, we welcome you to become part of our community</p>
                                    <div className="flex flex-wrap gap-6 justify-center">
                                        <a 
                                            href="https://wa.me/919987855127?text=Hello,%20I'm%20interested%20in%20learning%20more%20about%20your%20services."
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-white text-blue-700 font-medium px-10 py-4 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300">
                                            Get Support
                                        </a>
                                        <a href="https://wa.me/919987855127?text=Hello,%20I'm%20interested%20in%20learning%20more%20about%20your%20services."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-transparent border-2 border-white text-white font-medium px-8 py-4 rounded-xl hover:bg-white/10 transform hover:-translate-y-1 transition duration-300">
                            Volunteer With Us
                        </a>
                                        <button
                                                onClick={() => window.location.href = '/donate'}
                                                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition duration-300"
                                        >
                                                Donate
                                        </button>
                                    </div>
                                </div>
                                    </section>

                                    {/* Contact Section */}
                        <section id="contact" className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h6 className="text-blue-600 font-semibold mb-2">GET IN TOUCH</h6>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">Have questions or need assistance? Reach out to our team</p>
                        </div>
                        
                        <div className="md:flex md:space-x-8 items-center">
                            <div className="md:w-1/2 mb-10 md:mb-0">
                                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 h-full">
                            <h3 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                                        <span className="text-blue-600 text-xl">📍</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1 text-gray-800">Address</h4>
                                        <p className="text-gray-600">104, My Home CHS LTD near,
 ST. Lawrence High School,
Marol Andheri East, Mumbai 40059, Maharashtra, India</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                                        <span className="text-blue-600 text-xl">📱</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1 text-gray-800">Phone</h4>
                                        <p className="text-gray-600">+91 99878 55127</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                                        <span className="text-blue-600 text-xl">✉️</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1 text-gray-800">Email</h4>
                                        <p className="text-gray-600">mhwt2021mumbai@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                                        <span className="text-blue-600 text-xl">🕒</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1 text-gray-800">Working Hours</h4>
                                        <p className="text-gray-600">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                                    </div>
                                </div>
                            </div>
                                </div>
                            </div>
                            <div className="md:w-1/2">
                                <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                            <div className="mb-8">
                                <div className="bg-green-500 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                                        <path d="M12 0C5.373 0 0 5.373 0 12c0 6.628 5.373 12 12 12 6.627 0 12-5.372 12-12 0-6.627-5.373-12-12-12zm6.654 17.041c-.292.868-1.652 1.585-2.769 1.762-.732.115-1.688.106-2.681-.157-1.233-.328-2.793-.903-4.304-2.128-2.442-1.983-4.663-5.448-4.663-7.376 0-2.147 1.077-3.815 1.532-4.356.298-.354.649-.501 1.065-.501.364 0 .728.006.999.015.334.011.622.005.815.462.243.576.712 2.006.796 2.425.085.418.129.735-.221 1.154-.346.415-.675.678-.975.982-.162.162-.387.41-.245.82.141.41.596 1.512 1.456 2.483 1.066 1.205 1.953 1.585 2.339 1.771.385.187.643.152.877-.095.236-.247.921-1.08 1.176-1.452.254-.372.51-.309.847-.199.337.11 2.145 1.014 2.519 1.2.373.184.619.275.705.428.086.152.086 1.012-.207 1.982z" clipRule="evenodd" fillRule="evenodd"/>
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-gray-800">Connect With Us Instantly</h3>
                                <p className="text-gray-600 mb-8">Have questions or need immediate assistance? Connect with our team directly on WhatsApp for quick response.</p>
                            </div>
                            <a 
                                href="https://wa.me/919987855127?text=Hello,%20I'm%20interested%20in%20learning%20more%20about%20your%20services." 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-medium px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300 w-full md:w-auto"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="white" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                                </svg>
                                Chat With Us on WhatsApp
                            </a>
                            <div className="mt-6 text-gray-500">
                                <p>Available Monday-Saturday, 9 AM - 6 PM</p>
                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        </section>

                        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                    <div className="flex items-center space-x-2 mb-4">
                            <div className={`h-10 w-10 rounded-lg overflow-hidden ${scrolled ? 'shadow-md' : ''}`}>
                                            <img src={logo} alt="Trust Logo" className="w-full h-full object-cover" />
                            </div>
                                    <span className={`font-bold text-xl ${scrolled ? 'text-white' : 'text-white'}`}>
                                            Marol Human Welfare Trust
                                    </span>
                    </div>
                        <p className="text-gray-400 mb-6">Empowering communities through education, support, and guidance.</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                                <span className="sr-only">Facebook</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                                <span className="sr-only">Instagram</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                                <span className="sr-only">Twitter</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Home</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Services</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Impact</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4">Our Services</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Community Meal Support</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Documentation Guidance</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Educational Counseling</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Career Guidance</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Skill Development</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4">Newsletter</h3>
                        <p className="text-gray-400 mb-4">Subscribe to our newsletter to get updates on our latest initiatives.</p>
                        <div className="flex">
                            <input type="email" placeholder="Your email" className="px-4 py-2 rounded-l-lg w-full focus:outline-none text-gray-900" />
                            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg transition duration-300">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
                {/* <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400">&copy; {new Date().getFullYear()} EmpowerPlus. All rights reserved.</p>
                    <div className="mt-4 md:mt-0">
                        <a href="#" className="text-gray-400 hover:text-white transition duration-300 mx-3">Privacy Policy</a>
                        <a href="#" className="text-gray-400 hover:text-white transition duration-300 mx-3">Terms of Service</a>
                    </div>
                </div> */}
                
                {/* Developer attribution - prominently displayed */}
                <div className="mt-10 py-4 px-6 bg-gradient-to-r from-blue-900 to-indigo-900 rounded-lg text-center">
                    <a 
                        href="https://tarlose.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex flex-col md:flex-row items-center justify-center"
                    >
                        <span className="text-lg font-bold text-white mr-2">Designed and Developed by</span>
                        <span className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-200 hover:from-pink-300 hover:via-purple-300 hover:to-indigo-400 transition-all duration-300">
                            Tarlose
                        </span>
                        <svg className="h-5 w-5 ml-2 text-blue-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    </div>
);
};

export default HomePage;