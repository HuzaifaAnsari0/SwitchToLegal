import React, { useState, useEffect } from 'react';
import { ArrowRight, Heart, Book, Users } from 'lucide-react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import food from '../assets/food.jpeg'; // Example image import, replace with actual path
import education from '../assets/documentation.jpg'; // Example image import, replace with actual path
import guidance from '../assets/guidance.jpg'; // Example image import, replace with actual path
import team from '../assets/ogteam.jpeg'; // Example image import, replace with actual path
import poor from '../assets/poor.jpg'; // Example image import, replace with actual path

const About = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  
  // For scroll reveal animations
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.reveal-section');
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const inView = rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0;
        setIsVisible(prev => ({ ...prev, [index]: inView }));
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation style for revealed sections
  const getRevealStyle = (index) => ({
    opacity: isVisible[index] ? 1 : 0,
    transform: isVisible[index] ? 'translateY(0)' : 'translateY(40px)',
    transition: 'opacity 0.8s ease, transform 0.8s ease'
  });

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen font-sans">
      {/* New Hero Section Design */}
        <Navbar />
      <div className="relative pt-32 pb-24 overflow-hidden">
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
                About Us: Empowering Communities with Compassion
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10">
                Discover our commitment to service, support, and sustainable change as we work together for a brighter future.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
                <a 
                    href="/our-story"
                    className="bg-white text-blue-700 font-medium px-8 py-3 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300"
                >
                    Our Story
                </a>
                <a 
                    href="https://wa.me/919987855127?text=Hello,%20I'm%20interested%20in%20learning%20more%20about%20your%20services."
                    className="bg-transparent border-2 border-white text-white font-medium px-6 py-3 rounded-xl hover:bg-white/10 transform hover:-translate-y-1 transition duration-300"
                >
                    Get Involved
                </a>
            </div>
        </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-gray-50"></div>
    <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 80H1440V30C1200 60 720 0 480 30C240 60 120 30 0 10V80Z" fill="#F9FAFB"/>
    </svg>
</div>

      {/* Interactive Mission Section */}
      <div className="container mx-auto px-6 py-20 max-w-5xl reveal-section" style={getRevealStyle(0)}>
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-full h-full bg-blue-200 rounded-lg"></div>
            <img 
              src={team}
              alt="Support in action" 
              className="rounded-lg shadow-xl relative z-10 hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="md:w-1/2">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium mb-4">OUR MISSION</div>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              We are that <span className="text-blue-600 relative">
                support
                <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-400"></span>
              </span>
            </h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              We are that guide. We are Marol Human Welfare Trust. Founded on the belief that <span className="font-bold">no one should feel alone during critical times</span>, our organization emerged from real-life experiences—watching families sleep outside hospitals without food, students drop dreams due to missing documents, and talented youth miss opportunities due to lack of awareness.
            </p>
            <p className="text-gray-700 text-lg font-medium">
              We decided to step in, not as an institution, but as <span className="text-blue-600 font-bold">a family of changemakers</span>.
            </p>
            <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 flex items-center group">
              Learn More
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* What Drives Us - Interactive Tabs */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-24 reveal-section" style={getRevealStyle(1)}>
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">What Drives Us</h2>
          
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Tab Navigation */}
            <div className="flex border-b">
              {["Clarity", "Compassion", "Connection"].map((tab, index) => (
                <button 
                  key={tab} 
                  onClick={() => setActiveSection(index)}
                  className={`flex-1 py-4 text-center font-medium text-lg transition-colors duration-300 ${
                    activeSection === index 
                      ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-600' 
                      : 'text-gray-600 hover:bg-blue-50'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            
            {/* Tab Content */}
            <div className="p-8">
              {activeSection === 0 && (
                <div className="flex flex-col md:flex-row items-center gap-8 animate-fadeIn">
                  <div className="md:w-1/3 flex justify-center">
                    <Book size={120} className="text-blue-600" />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold text-blue-800 mb-4">Clarity in Confusion</h3>
                    <p className="text-gray-700 leading-relaxed">
                      In a world full of uncertainty, we offer clear guidance and direction to those who need it most. Our approach breaks down complex problems into manageable steps, providing a clear path forward when life seems most overwhelming.
                    </p>
                  </div>
                </div>
              )}
              
              {activeSection === 1 && (
                <div className="flex flex-col md:flex-row items-center gap-8 animate-fadeIn">
                  <div className="md:w-1/3 flex justify-center">
                    <Heart size={120} className="text-blue-600" />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold text-blue-800 mb-4">Compassion in Action</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Every interaction is rooted in genuine care and understanding for the challenges people face. We believe that true help comes not just from resources but from empathy that recognizes the dignity of each person we serve.
                    </p>
                  </div>
                </div>
              )}
              
              {activeSection === 2 && (
                <div className="flex flex-col md:flex-row items-center gap-8 animate-fadeIn">
                  <div className="md:w-1/3 flex justify-center">
                    <Users size={120} className="text-blue-600" />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold text-blue-800 mb-4">Connection that Empowers</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We build bridges between resources and those who need them, creating lasting support networks. Our connections extend beyond immediate assistance to create sustainable communities of support that continue long after our initial involvement.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <p className="text-white text-center mt-16 text-xl max-w-3xl mx-auto leading-relaxed">
            Our mission isn't just to offer services—it's to <span className="font-bold underline decoration-2 underline-offset-4">walk alongside those who need us</span>, empowering them with the tools, knowledge, and care they deserve.
          </p>
        </div>
      </div>

      {/* Impact Section - Interactive Cards */}
      <div className="container mx-auto px-6 py-24 max-w-5xl reveal-section" style={getRevealStyle(2)}>
        <h2 className="text-4xl font-bold text-blue-900 mb-4 text-center">Our Impact</h2>
        <p className="text-xl text-blue-700 text-center mb-16 max-w-2xl mx-auto">Real stories of change that make a difference</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Nourishment",
              description: "A hot meal shared outside a hospital gate becomes a moment of relief for a struggling family.",
              image: food
            },
            {
              title: "Documentation",
              description: "A simple correction in a document becomes a student's gateway to college.",
              image: education
            },
            {
              title: "Guidance",
              description: "A conversation about careers becomes a roadmap for a better future.",
              image: guidance
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <h3 className="text-white font-bold text-xl p-4">{item.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700">
                  {item.description.split(' ').map((word, i) => 
                    word.includes('moment') || word.includes('gateway') || word.includes('roadmap') ? 
                    <span key={i} className="font-bold text-blue-600"> {word} </span> : 
                    <span key={i}> {word}</span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-gray-700 text-center mt-16 text-lg max-w-3xl mx-auto">
          These small moments, repeated across hundreds of lives, <span className="font-bold">create ripples of change</span>—and that's what we're here for.
        </p>
      </div>

      {/* Vision - Parallax Effect */}
      <div className="relative py-32 reveal-section" style={getRevealStyle(3)}>
        <div className="absolute inset-0 z-0">
          <img 
            src={poor} 
            alt="" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-blue-800/60"></div>
        </div>
        
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-8">Our Vision</h2>
          <p className="text-2xl text-white mb-10 leading-relaxed">
            We envision a society where <span className="font-bold">help is accessible, knowledge is shared</span>, and everyone—regardless of their background—has the power to move forward with confidence.
          </p>
          <p className="text-xl text-blue-100 font-light">
            We're not just an NGO. We're a <span className="font-bold">movement of kindness, awareness, and action</span>.
          </p>
        </div>
      </div>

      {/* Join Us - Interactive CTA */}
      <div className="container mx-auto px-6 py-24 max-w-4xl text-center reveal-section" style={getRevealStyle(4)}>
        <h2 className="text-4xl font-bold text-blue-900 mb-8">Join Us</h2>
        <p className="text-gray-700 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          If you believe in a world where support should never be out of reach—<span className="font-bold">let's work together</span>. Whether you're a volunteer, donor, or someone who needs guidance—we're here. Let's build brighter futures, one step at a time.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="group bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full transition duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
          onClick={() => window.location.href = "https://wa.me/919987855127?text=Hello,%20I'm%20interested%20in%20learning%20more%20about%20your%20services."}>
            <span>Become a Volunteer</span>
            <ArrowRight className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </button>
          <button className="group bg-white border-2 border-blue-600 hover:bg-blue-50 text-blue-600 font-bold py-4 px-10 rounded-full transition duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
          onClick={() => window.location.href = "/donate"}>
            <span>Donate Now</span>
            <Heart className="ml-2 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all" />
          </button>
        </div>
      </div>
          
        
        {/* Footer */}  
        <Footer />
    </div>
  );
};

export default About;