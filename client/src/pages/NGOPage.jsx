import React, { useState, useEffect } from 'react';
import { ChevronDown, Heart, Users, BookOpen, Lightbulb, Globe, Phone, Mail, MapPin, ExternalLink, Menu, X, Star, ArrowRight, CheckCircle } from 'lucide-react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import scanner from '../assets/scanner.png';
import ServiceForm from '../components/ServiceForm';

const HumanityZonePlusWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '🌟' },
    { id: 'initiatives', label: 'Initiatives', icon: '🚀' },
    { id: 'partnership', label: 'Partnership', icon: '🤝' },
    { id: 'contact', label: 'Contact', icon: '📞' }
  ];

  const coreInitiatives = [
    {
      title: "Youth Civic Leadership Program",
      description: "Training college students to become community leaders through ward-level governance and civic monitoring.",
      icon: <Users className="w-8 h-8 text-blue-500" />,
      category: "Community Development"
    },
    {
      title: "Legal Awareness Camps",
      description: "Organizing Legal Literacy Days with mock courts and workshops on rights and protections.",
      icon: <BookOpen className="w-8 h-8 text-green-500" />,
      category: "Legal Literacy"
    },
    {
      title: "Mental Health Outreach Van",
      description: "Mobile wellness van offering free counseling and mental health resources to communities.",
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      category: "Wellbeing"
    },
    {
      title: "Digital Literacy Drives",
      description: "Tech-savvy youth helping seniors with digital tools and cybersecurity awareness.",
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      category: "Technology"
    },
    {
      title: "AI Awareness Bootcamps",
      description: "Teaching students to use AI for content creation, resume building, and business ideation.",
      icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
      category: "Innovation"
    },
    {
      title: "Zero Hunger Sundays",
      description: "Weekend food donation drives coordinating with restaurants and residential societies.",
      icon: <Heart className="w-8 h-8 text-red-500" />,
      category: "Food Security"
    }
  ];

  const impactStats = [
    { number: "2506", label: "Season Running", suffix: "" },
    { number: "50+", label: "Communities Served", suffix: "" },
    { number: "1000+", label: "Students Engaged", suffix: "" },
    { number: "2018", label: "Established", suffix: "" }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
              <span className="text-blue-600 font-semibold">🌍 Season 2506 Active</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                My Zone,
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                My Responsibility
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Empowering communities through youth-led initiatives, civic engagement, and sustainable development. 
              Building responsible citizens, one zone at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('initiatives')}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Explore Our Initiatives <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button 
                onClick={() => scrollToSection('partnership')}
                className="px-8 py-4 border-2 border-blue-500 text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105"
              >
                Partner With Us
              </button>
            </div>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text mb-2">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Humanity Zone Plus
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Since 2018, we've been transforming communities in Mumbai through youth empowerment and civic engagement
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Community-Driven Approach</h3>
                    <p className="text-gray-600">We believe active community participation is key to building an inclusive, responsive, and empowered society.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Youth Empowerment</h3>
                    <p className="text-gray-600">Training the next generation of leaders through hands-on civic engagement and skill development programs.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Holistic Wellbeing</h3>
                    <p className="text-gray-600">Addressing mental health, education, legal awareness, and social welfare through integrated programs.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                🌍
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-2xl animate-pulse">
                ✨
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section id="initiatives" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Core Initiatives
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive programs designed to create lasting impact in communities across Mumbai
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreInitiatives.map((initiative, index) => (
              <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    {initiative.icon}
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                    {initiative.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                  {initiative.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {initiative.description}
                </p>
              </div>
            ))}
          </div>

          {/* Additional Programs */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Additional Programs</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "🌱 Clean & Green Zone Challenges",
                "🔧 Fix My Area Campaign", 
                "🎓 Scholarship Mapping Cell",
                "📱 MZMR Community Dashboard",
                "🏆 Local Heroes Recognition",
                "🎪 Unity Fest - MZMR Carnival",
                "📚 Weekend Learning Circles",
                "🗳️ Citizen Suggestion Walls"
              ].map((program, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 text-center hover:shadow-md transition-all duration-300">
                  <div className="text-2xl mb-2">{program.split(' ')[0]}</div>
                  <div className="text-sm font-medium text-gray-700">{program.substring(3)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section id="partnership" className="py-16 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Partner With Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us in creating meaningful change. We invite educational institutions and organizations to collaborate.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Key Focus Areas</h3>
                  <ul className="space-y-3">
                    {[
                      "Legal Literacy & Documentation Helpdesks",
                      "Educational Scholarship Access Programs", 
                      "Community Development Projects",
                      "Mental Health Support Initiatives",
                      "Social Outreach and Volunteering"
                    ].map((area, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-3">Ready to Partner?</h3>
                  <p className="mb-4">Let's discuss a customized partnership plan for your institution.</p>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Get In Touch <ArrowRight className="inline-block ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <div className="text-6xl mb-6">🤝</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Join Our Network</h3>
                <p className="text-gray-600 mb-6">Become part of a growing community of change-makers working towards a better tomorrow.</p>
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-xl p-4">
                    <div className="text-2xl font-bold text-blue-600">50+</div>
                    <div className="text-sm text-gray-600">Partner Organizations</div>
                  </div>
                  <div className="bg-green-50 rounded-xl p-4">
                    <div className="text-2xl font-bold text-green-600">1000+</div>
                    <div className="text-sm text-gray-600">Students Engaged</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-2 text-center">
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Support Our Cause
            </h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Your contribution directly supports mental health vans, legal awareness drives, civic leadership programs, and food distribution efforts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="text-center">
                <div className="w-80 h-80 bg-gray-200 rounded-xl flex items-center justify-center mb-2">
                    <img src={scanner} alt="Scan to Donate" className="w-80 h-80 object-cover rounded-lg shadow-lg" />
                </div>
                <div className="text-xs text-gray-500">Scan to Donate</div>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-6">All donations are used transparently. Receipts available upon request.</p>
          </div>
          <div className="max-w-3xl mx-auto px-4">
          <ServiceForm serviceType="NGO" />
        </div>
        </div>
      </section>

      {/* Service Form for NGO
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <ServiceForm serviceType="NGO" />
        </div>
      </section> */}

        <section id="contact" className="py-16 bg-gray-100 text-gray-900">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to make a difference? Contact us to learn more about our programs or to get involved.
            </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 hover:bg-blue-50 transition-colors shadow">
              <Phone className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Call Us</h3>
              <div className="space-y-2 text-gray-700">
                <div>Mr. Abdul Rashid Pardesi</div>
                <div className="font-mono">+91 98672 22166</div>
                <div>Mrs. Salma Shaikh</div>
                <div className="font-mono">+91 98922 67713</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 hover:bg-green-50 transition-colors shadow">
              <Mail className="w-8 h-8 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Email Us</h3>
              <div className="text-gray-700">
                <div className="font-mono">humanityzoneplus@gmail.com</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 hover:bg-purple-50 transition-colors shadow">
              <MapPin className="w-8 h-8 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Visit Us</h3>
              <div className="text-gray-700">
                <div>Shop No. 09, 1st Floor</div>
                <div>A.K. Marg, Opp. Bandra Court</div>
                <div>Bandra East, Mumbai - 400051</div>
              </div>
            </div>
            </div>

            <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-4 bg-white rounded-full px-6 py-3 shadow">
              <span className="text-gray-700">Join our WhatsApp Community:</span>
              <a 
                href="https://whatsapp.com/channel/0029VbAU5cn2phHGikJC8f3j" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-semibold transition-colors inline-flex items-center"
              >
                WhatsApp <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
        <Footer />

    </div>
  );
};

export default HumanityZonePlusWebsite;