import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.jpeg'; 
import Footer from '../components/footer';
import qrCodeImage from '../assets/qr.png';
import Navbar from '../components/navbar';

const Donate = () => {
    const [activeTab, setActiveTab] = useState('qrcode');
    const [copied, setCopied] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    
    // Nav items for the navigation
    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'services', label: 'Services' },
        { id: 'donate', label: 'Donate' },
        { id: 'contact', label: 'Contact' }
    ];
    
    // Handle scroll event to change navbar style
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    // Function to scroll to a section
    const scrollToSection = (id) => {
        setActiveSection(id);
        setMobileMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const bankDetails = {
        accountName: 'MAROL HUMAN WELFARE TRUST',
        accountNumber: '04120100041690',
        bankName: 'Bank of Baroda',
        ifscCode: 'BARB0MARMAR',
    };

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-800">
            
           <Navbar />

            {/* Hero Section */}
            <motion.div 
    className="relative pt-32 pb-24 overflow-hidden"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
>
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
                Make a Difference Today
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10">
                Your donation fuels our mission of creating positive change in communities across the region.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
                <a 
                    href="https://wa.me/919987855127?text=Hello,%20I'm%20interested%20in%20donating."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-blue-700 font-medium px-8 py-3 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300"
                >
                    Donate Now
                </a>
                <a 
                    href="https://wa.me/919987855127?text=Hello,%20I'm%20interested%20in%20volunteering."
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
</motion.div>

                {/* Donation Methods */}
                <div className="max-w-4xl mx-auto mb-10 bg-white backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-gray-200 ">
                    {/* Tabs */}
                    <div className="flex border-b border-gray-200">
                        <button 
                            className={`flex-1 py-4 px-6 focus:outline-none transition-colors ${activeTab === 'qrcode' ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600' : 'hover:bg-gray-50'}`}
                            onClick={() => setActiveTab('qrcode')}
                        >
                            QR Code Scanner
                        </button>
                        <button 
                            className={`flex-1 py-4 px-6 focus:outline-none transition-colors ${activeTab === 'bank' ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600' : 'hover:bg-gray-50'}`}
                            onClick={() => setActiveTab('bank')}
                        >
                            Bank Transfer
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                        {activeTab === 'qrcode' && (
                            <motion.div 
                                className="flex flex-col items-center"
                                {...fadeIn}
                            >
                                <div className="bg-gray-100 p-4 rounded-lg mb-6">
                                    {/* Use the imported image instead of QRCodeSVG */}
                                    <img 
                                        src={qrCodeImage} 
                                        alt="Donation QR Code" 
                                        width={200} 
                                        height={200}
                                    />
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">Scan to Donate</h3>
                                <p className="text-gray-600 text-center max-w-md">
                                    Use any UPI app to scan this code and make a direct donation to our organization.
                                </p>
                                <div className="mt-6 flex justify-center space-x-4">
                                    {['Google Pay', 'PhonePe', 'Paytm', 'BHIM UPI'].map((app) => (
                                        <div key={app} className="text-center">
                                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-2">
                                                <span className="text-xs text-blue-600">{app.charAt(0)}</span>
                                            </div>
                                            <p className="text-xs text-gray-600">{app}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {activeTab === 'bank' && (
                            <motion.div
                                className="space-y-6"
                                {...fadeIn}
                            >
                                <h3 className="text-xl font-semibold mb-4 text-gray-800">Bank Transfer Details</h3>
                                
                                <div className="space-y-4">
                                    {Object.entries(bankDetails).map(([key, value]) => (
                                        <div key={key} className="bg-gray-50 p-4 rounded-lg flex justify-between items-center border border-gray-200">
                                            <div>
                                                <p className="text-gray-500 text-sm mb-1">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</p>
                                                <p className="font-mono text-gray-800">{value}</p>
                                            </div>
                                            <button 
                                                onClick={() => handleCopy(value)}
                                                className="bg-blue-100 hover:bg-blue-200 text-blue-600 px-3 py-1 rounded transition-colors focus:outline-none"
                                            >
                                                {copied ? 'Copied!' : 'Copy'}
                                            </button>
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
                                  <h4 className="text-blue-600 font-medium mb-2">Important Note</h4>
                                  <p className="text-sm text-gray-700">
                                    After making your transfer, please email the transaction details to <span className="text-blue-600">mhwt2021mumbai@gmail.com</span> so we can acknowledge your contribution.
                                  </p>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
          

<Footer />
        </div>
    );
};

export default Donate;
