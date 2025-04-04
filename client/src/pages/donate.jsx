import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.jpeg'; // Import the logo image directly
// Import the QR code image directly
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
                        <div className="flex items-center space-x-2">
                            <div className={`h-10 w-10 rounded-lg overflow-hidden ${scrolled ? 'shadow-md' : ''}`}>
                                <img src={logo} alt="Trust Logo" className="w-full h-full object-cover" />
                            </div>
                            <span className="font-bold text-xl text-gray-800">Marol Human Welfare Trust</span>
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

export default Donate;
