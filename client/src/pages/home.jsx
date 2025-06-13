import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    FileText,
    Phone,
    Mail,
    MessageSquare,
    Search,
    Menu,
    X,
    CheckCircle,
    ArrowRight,
    Shield,
    Award,
    Building,
    Users,
    Lock,
    BarChart3,
    Briefcase,
    Scale,
    Calculator,
    Globe,
    UserCheck,
    ClipboardList,
    FileCheck,
    PenLine,
    Store,
    FileEdit,
    UserPlus,
    Bike,
    CarFront,
    Truck,
    HeartPulse,
    Home,
    Banknote
} from 'lucide-react';
import Navbar from '../components/navbar';

export default function CorporateLegalUI() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('itr');
    const [searchQuery, setSearchQuery] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
    });

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const services = [
        { id: 'itr', title: 'File Your ITR Now', desc: 'Professional ITR filing services', icon: <Calculator className="w-6 h-6" /> },
        { id: 'gst-registration', title: 'GST Registration', desc: 'New GST Registration Services', icon: <ClipboardList className="w-6 h-6" /> },
        { id: 'gst-return', title: 'GST Return', desc: 'Monthly/Quarterly GST return filing', icon: <FileCheck className="w-6 h-6" /> },
        { id: 'dsc', title: 'Apply for DSC', desc: 'Digital Signature Certificate Services', icon: <PenLine className="w-6 h-6" /> },
        { id: 'udyam', title: 'Udyam Registration - MSME', desc: 'Micro, Small & Medium Enterprise Registration', icon: <Award className="w-6 h-6" /> },
        { id: 'fssai', title: 'FSSAI Food License', desc: 'Food safety compliance license', icon: <Shield className="w-6 h-6" /> },
        { id: 'shop-act', title: 'Shop and Establishment Act', desc: 'Registration under shop & establishment laws', icon: <Store className="w-6 h-6" /> },
        { id: 'trademark', title: 'TradeMark Registration', desc: 'Intellectual Property registration', icon: <FileEdit className="w-6 h-6" /> },
        { id: 'company', title: 'Company Registration', desc: 'Incorporation of companies', icon: <Building className="w-6 h-6" /> },
        { id: 'accounting', title: 'Accounting Services', desc: 'Professional accounting support', icon: <BarChart3 className="w-6 h-6" /> },
        { id: 'loan', title: 'Apply For Loan', desc: 'Business, Personal, Home loans', icon: <Banknote className="w-6 h-6" /> },
        { id: 'insurance-agent', title: 'Insurance Agent POS Registration', desc: 'Become a certified insurance agent', icon: <UserPlus className="w-6 h-6" /> },
        { id: 'brn', title: 'Apply For BRN No / Sanstha Aadhaar', desc: 'Business Registration Number services', icon: <FileText className="w-6 h-6" /> },
        { id: 'bike-insurance', title: 'Bike Insurance', desc: 'Two-wheeler vehicle insurance', icon: <Bike className="w-6 h-6" /> },
        { id: 'car-insurance', title: 'Car Insurance', desc: 'Four-wheeler insurance plans', icon: <CarFront className="w-6 h-6" /> },
        { id: 'rickshaw-insurance', title: 'Rickshaw Insurance', desc: 'Auto-rickshaw insurance', icon: <Truck className="w-6 h-6" /> },
        { id: 'taxi-insurance', title: 'Taxi Insurance', desc: 'Cab insurance plans', icon: <CarFront className="w-6 h-6" /> },
        { id: 'tractor-insurance', title: 'Tractor Insurance', desc: 'Agricultural vehicle insurance', icon: <Truck className="w-6 h-6" /> },
        { id: 'truck-bus-insurance', title: 'Truck/Bus Insurance', desc: 'Heavy commercial vehicle insurance', icon: <Truck className="w-6 h-6" /> },
        { id: 'pickup-insurance', title: 'Pickup Truck Insurance', desc: 'Light commercial vehicle coverage', icon: <Truck className="w-6 h-6" /> },
        { id: 'accident-insurance', title: 'Personal Accident Insurance', desc: 'Coverage against personal accidents', icon: <HeartPulse className="w-6 h-6" /> },
        { id: 'health-insurance', title: 'Health Insurance', desc: 'Medical insurance coverage', icon: <HeartPulse className="w-6 h-6" /> },
        { id: 'term-life', title: 'Term Life Insurance', desc: 'Life protection plans', icon: <UserCheck className="w-6 h-6" /> },
        { id: 'shop-insurance', title: 'Shop Insurance', desc: 'Insurance for shops and stores', icon: <Store className="w-6 h-6" /> },
        { id: 'home-insurance', title: 'Home Insurance', desc: 'Coverage for home/property', icon: <Home className="w-6 h-6" /> },
        { id: 'lap', title: 'Loan Against Property', desc: 'Mortgage-based loan services', icon: <Banknote className="w-6 h-6" /> },
        { id: 'personal-loan', title: 'Personal Loan', desc: 'Short-term loans for personal use', icon: <Banknote className="w-6 h-6" /> },
        { id: 'home-loan', title: 'Home Loan', desc: 'Affordable housing loan plans', icon: <Home className="w-6 h-6" /> },
        { id: 'vehicle-loan', title: 'Commercial Vehicle Loan', desc: 'Loans for business vehicles', icon: <Truck className="w-6 h-6" /> },
        { id: 'old-car-loan', title: 'Old Car Loan', desc: 'Finance for used cars', icon: <CarFront className="w-6 h-6" /> },
        { id: 'business-loan', title: 'Business Loan', desc: 'Financial assistance for businesses', icon: <Briefcase className="w-6 h-6" /> },
        { id: 'gold-loan', title: 'Gold Loan', desc: 'Loan against gold assets', icon: <Award className="w-6 h-6" /> }
    ];

    const stats = [
        { number: '25,000+', title: 'Satisfied Clients' },
        { number: '50,000+', title: 'Returns Filed' },
        { number: '15+', title: 'Years Experience' },
        { number: '99.8%', title: 'Success Rate' }
    ];

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    // Filter services based on search query
    const filteredServices = services.filter(service => 
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.desc.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="font-sans antialiased text-gray-900 overflow-x-hidden bg-white">
            {/* Corporate Header */}
            <Navbar />

            {/* Professional Hero Section */}
            <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white pt-28 pb-20">
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center bg-blue-600/20 backdrop-blur-sm px-4 py-2 rounded-full text-blue-300 text-sm font-medium mb-6">
                                <Shield className="w-4 h-4 mr-2" />
                                Trusted Legal Partner
                            </div>
                            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                                Find Your <span className="text-blue-400">Legal Service</span>
                            </h1>
                            <p className="text-lg mb-8 text-slate-300">
                                Search from our comprehensive range of legal and compliance services
                            </p>
                        </div>

                        {/* Search Section */}
                        <div className="bg-white rounded-2xl shadow-2xl p-6 mb-8">
                            <div className="relative">
                                <div className="flex items-center">
                                    <div className="flex-1 relative">
                                        <input
                                            type="text"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            placeholder="Search for services (e.g., ITR Filing, GST Registration, DSC)"
                                            className="w-full px-6 py-4 pl-12 text-slate-800 bg-slate-50 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                                        />
                                        <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
                                    </div>
                                </div>
                            </div>

                            {/* Popular Searches */}
                            <div className="mt-6">
                                <div className="text-sm text-slate-500 mb-3">Popular Searches:</div>
                                <div className="flex flex-wrap gap-2">
                                    {['ITR Filing', 'GST Registration', 'DSC', 'Company Registration', 'Trademark'].map((tag, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setSearchQuery(tag)}
                                            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm font-medium transition-colors"
                                        >
                                            {tag}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                                <div className="text-2xl font-bold text-blue-400 mb-1">₹99</div>
                                <div className="text-sm text-slate-300">Starting Price</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                                <div className="text-2xl font-bold text-blue-400 mb-1">24/7</div>
                                <div className="text-sm text-slate-300">Support</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                                <div className="text-2xl font-bold text-blue-400 mb-1">100%</div>
                                <div className="text-sm text-slate-300">Success Rate</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                                <div className="text-2xl font-bold text-blue-400 mb-1">15+</div>
                                <div className="text-sm text-slate-300">Years Experience</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Corporate Services Grid */}
            <div className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredServices.map(service => (
                            <button 
                                key={service.id}
                                onClick={() => handleTabChange(service.id)}
                                className={`group p-6 rounded-xl transition-all duration-300 border-2 ${
                                    activeTab === service.id 
                                    ? 'bg-blue-600 text-white border-blue-600 shadow-lg' 
                                    : 'bg-white hover:bg-slate-50 border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-md'
                                }`}
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className={`p-3 rounded-lg mb-4 transition-colors ${
                                        activeTab === service.id 
                                        ? 'bg-white/20' 
                                        : 'bg-slate-100 group-hover:bg-blue-50'
                                    }`}>
                                        <div className={`${activeTab === service.id ? 'text-white' : 'text-slate-600 group-hover:text-blue-600'}`}>
                                            {service.icon}
                                        </div>
                                    </div>
                                    <h3 className={`font-semibold mb-2 text-sm ${activeTab === service.id ? 'text-white' : 'text-slate-800'}`}>
                                        {service.title}
                                    </h3>
                                    <p className={`text-xs ${activeTab === service.id ? 'text-blue-100' : 'text-slate-500'}`}>
                                        {service.desc}
                                    </p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            
            
                        <div className="py-20 bg-white">
                            <div className="container mx-auto px-4">
                                <div className="text-center mb-16">
                                    <h2 className="text-3xl font-bold text-slate-800 mb-4">Proven Excellence</h2>
                                    <p className="text-slate-600 max-w-2xl mx-auto">Our commitment to quality and client satisfaction is reflected in our track record of successful engagements and long-term partnerships.</p>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                    {stats.map((stat, index) => (
                                        <div key={index} className="text-center">
                                            <div className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center h-full">
                                                <div className="text-2xl md:text-4xl font-bold text-blue-600 mb-2 break-words overflow-hidden text-ellipsis w-full" style={{wordBreak: 'break-word', maxWidth: '100%'}}>
                                                    {stat.number}
                                                </div>
                                                <div className="text-slate-600 font-medium">{stat.title}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* About Section - Corporate */}
            <div className="py-20 bg-slate-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl font-bold mb-6">About Switch to Legal</h2>
                        <p className="text-slate-300 text-lg mb-8">
                            Switch to Legal is a premier professional services firm specializing in comprehensive tax, legal, and business compliance solutions. We combine deep industry expertise with cutting-edge technology to deliver exceptional results for our clients.
                        </p>
                        <p className="text-slate-400">
                            As an Authorized e-Return Intermediary registered with the Income Tax Department, Government of India, we maintain the highest standards of compliance and security. Our association with Telsys Web Infotech Private Limited ensures robust technological infrastructure for all our services.
                        </p>
                    </div>

                    {/* Corporate Credentials */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        <div className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition-colors">
                            <div className="bg-blue-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                                <Shield className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold text-center mb-2">Government Authorized</h3>
                            <p className="text-slate-400 text-sm text-center">Registered e-Return Intermediary with Income Tax Department</p>
                        </div>
                        <div className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition-colors">
                            <div className="bg-green-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                                <Award className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold text-center mb-2">Startup India Certified</h3>
                            <p className="text-slate-400 text-sm text-center">Recognized under Government of India's Startup Initiative</p>
                        </div>
                        <div className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition-colors">
                            <div className="bg-orange-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                                <Building className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold text-center mb-2">iStart Rajasthan</h3>
                            <p className="text-slate-400 text-sm text-center">Supported by Government of Rajasthan's Startup Ecosystem</p>
                        </div>
                        <div className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition-colors">
                            <div className="bg-purple-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                                <Users className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold text-center mb-2">Digital India Partner</h3>
                            <p className="text-slate-400 text-sm text-center">Contributing to India's Digital Transformation</p>
                        </div>
                    </div>

                    {/* Core Services */}
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-slate-800 p-8 rounded-xl hover:bg-slate-700 transition-colors">
                            <div className="bg-blue-600 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                                <FileText className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Tax Advisory Services</h3>
                            <p className="text-slate-400 mb-6">Comprehensive tax planning, compliance, and filing services for individuals, businesses, and NRIs with expert guidance throughout the process.</p>
                            <button className="text-blue-400 font-semibold flex items-center hover:text-blue-300 transition-colors">
                                Learn More <ArrowRight className="w-4 h-4 ml-2" />
                            </button>
                        </div>
                        <div className="bg-slate-800 p-8 rounded-xl hover:bg-slate-700 transition-colors">
                            <div className="bg-green-600 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                                <Building className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Corporate Solutions</h3>
                            <p className="text-slate-400 mb-6">End-to-end business management services including incorporation, compliance, regulatory filings, and strategic business advisory.</p>
                            <button className="text-blue-400 font-semibold flex items-center hover:text-blue-300 transition-colors">
                                Learn More <ArrowRight className="w-4 h-4 ml-2" />
                            </button>
                        </div>
                        <div className="bg-slate-800 p-8 rounded-xl hover:bg-slate-700 transition-colors">
                            <div className="bg-purple-600 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                                <Scale className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Legal Advisory</h3>
                            <p className="text-slate-400 mb-6">Professional legal consultation, documentation, litigation support, and regulatory compliance across various practice areas.</p>
                            <button className="text-blue-400 font-semibold flex items-center hover:text-blue-300 transition-colors">
                                Learn More <ArrowRight className="w-4 h-4 ml-2" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Security & Compliance */}
            <div className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-800 mb-4">Security & Compliance</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">We maintain the highest standards of data security and regulatory compliance to protect your confidential information.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center mb-4">
                                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                                    <Lock className="w-6 h-6 text-blue-600" />
                                </div>
                                <h3 className="font-semibold text-slate-800">Data Encryption</h3>
                            </div>
                            <p className="text-slate-600 text-sm">Bank-grade SSL encryption for all data transmission and SOC 2 Type II compliance.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center mb-4">
                                <div className="bg-green-100 p-3 rounded-lg mr-4">
                                    <Shield className="w-6 h-6 text-green-600" />
                                </div>
                                <h3 className="font-semibold text-slate-800">Privacy Protection</h3>
                            </div>
                            <p className="text-slate-600 text-sm">Strict confidentiality protocols with no unauthorized third-party data sharing.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center mb-4">
                                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                                    <FileText className="w-6 h-6 text-purple-600" />
                                </div>
                                <h3 className="font-semibold text-slate-800">Secure Storage</h3>
                            </div>
                            <p className="text-slate-600 text-sm">ISO 27001 certified data centers with regular security audits and VAPT testing.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center mb-4">
                                <div className="bg-orange-100 p-3 rounded-lg mr-4">
                                    <CheckCircle className="w-6 h-6 text-orange-600" />
                                </div>
                                <h3 className="font-semibold text-slate-800">Quality Assurance</h3>
                            </div>
                            <p className="text-slate-600 text-sm">Multi-layer security architecture with continuous monitoring and risk assessment.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Contact Section - Corporate */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-slate-800 mb-4">Get Professional Consultation</h2>
                            <p className="text-slate-600">Connect with our experts for personalized advice on your tax and legal requirements.</p>
                        </div>
                        
                        <form onSubmit={handleSubmit} className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-slate-700 font-medium mb-2">Full Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors bg-white"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-slate-700 font-medium mb-2">Phone Number *</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors bg-white"
                                        required
                                    />
                                </div>
                            </div>
                            
                            <div className="mb-6">
                                <label className="block text-slate-700 font-medium mb-2">Email Address *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors bg-white"
                                    required
                                />
                            </div>
                            
                            <div className="mb-6">
                                <label className="block text-slate-700 font-medium mb-2">Service Required *</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors bg-white"
                                    placeholder="e.g., ITR Filing, GST Registration, Legal Consultation"
                                    required
                                />
                            </div>
                            
                            <div className="mb-8">
                                <label className="block text-slate-700 font-medium mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors bg-white"
                                    placeholder="Please provide details about your requirements..."
                                ></textarea>
                            </div>
                            
                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center shadow-lg transition-all duration-300"
                            >
                                Submit Inquiry <ArrowRight className="w-5 h-5 ml-2" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            
            {/* Corporate Footer */}
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
                                    <MessageSquare className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Services</h4>
                            <ul className="space-y-2 text-slate-400 text-sm">
                                {services.slice(0, 5).map(service => (
                                    <li key={service.id}>
                                        <button
                                            onClick={() => setActiveTab(service.id)}
                                            className="hover:text-blue-400 transition-colors"
                                        >
                                            {service.title}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Company</h4>
                            <ul className="space-y-2 text-slate-400 text-sm">
                                <li>
                                    <a href="#about" className="hover:text-blue-400 transition-colors">About Us</a>
                                </li>
                                <li>
                                    <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
                                </li>
                                <li>
                                    <a href="#careers" className="hover:text-blue-400 transition-colors">Careers</a>
                                </li>
                                <li>
                                    <a href="#privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
                                </li>
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
}