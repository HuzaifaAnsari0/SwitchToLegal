import React, { useState, useEffect } from 'react';
import ogteam from '../assets/ogteam.jpeg';
import logo from '../assets/logo.jpeg';
import Footer from '../components/footer';
import testimonial1 from '../assets/person2.png';
import testimonial2 from '../assets/person1.png';
import testimonial3 from '../assets/person3.png';
import Navbar from '../components/navbar';

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
    
        <Navbar />

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

<Footer />
    </div>
);
};

export default HomePage;