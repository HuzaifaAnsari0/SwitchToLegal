import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.jpeg'; 
import Footer from '../components/footer';
import qrCodeImage from '../assets/qr.png';

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
            
            <nav className="fixed w-full z-50 transition-all duration-300 bg-white shadow-lg">
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <div className="flex items-center space-x-3">
                                                            <div className={`h-14 w-14 rounded-lg overflow-hidden ${scrolled ? 'shadow-md' : ''}`}>
                                                                    <img src={logo} alt="Trust Logo" className="w-full h-full object-cover" />
                                                            </div>
                                                            <div className={`font-bold text-xl leading-tight`}>
                                                                    <span className="text-orange-500">Marol </span>
                                                                    <span className="text-gray-800">Human </span>
                                                                    <span className="text-green-600">Welfare Trust</span>
                                                            </div>
                                                    </div>
                        
                        {/* Desktop Navigation */}
                        <div className="hidden md:flex space-x-1">
                            {navItems.map(item => (
                                <button 
                                    key={item.id}
                                    onClick={() => {
                                        if(item.id === 'home'){
                                            window.location.href = '/';
                                        } else {
                                            window.location.href = `/#${item.id}`;
                                        }
                                    }}
                                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                                        activeSection === item.id 
                                            ? 'bg-blue-600 text-white font-medium' 
                                            : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                        
                        {/* CTA Button */}
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
                                className="p-2 rounded-lg text-gray-800 hover:bg-gray-100"
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
                                    onClick={() => {
                                        if(item.id === 'home'){
                                            window.location.href = '/';
                                        } else {
                                            window.location.href = `/#${item.id}`;
                                        }
                                    }}
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
            <motion.div 
                className="max-w-7xl mx-auto py-20 px-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="text-center mb-16 mt-8">
                    <motion.h1 
                        className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Make a Difference Today
                    </motion.h1>
                    <motion.p 
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        Your contribution helps us continue our mission of creating positive change in communities worldwide.
                    </motion.p>
                </div>

                {/* Donation Methods */}
                <div className="max-w-4xl mx-auto bg-white backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-gray-200 ">
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
            </motion.div>

<Footer />
        </div>
    );
};

export default Donate;
