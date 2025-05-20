import { useState, useEffect } from 'react';
import { 
    FileText, 
    Shield, 
    FileSignature, 
    Building, 
    Award, 
    BookOpen, 
    DollarSign, 
    Users,
    Phone,
    Mail,
    MessageSquare,
    ChevronDown,
    ArrowRight,
    CheckCircle,
    CheckSquare,
    Lock,
    Search,
    Star,
    Menu,
    X,
    UserCheck, 
    Briefcase, 
    HeartPulse, 
    Home, 
    Landmark, 
    Banknote,
    Car, 
    Bike, 
    Truck, 
    Factory, 
    ClipboardCheck, 
    Handshake, 
    User, 
    Scale
} from 'lucide-react';

export default function WebOnlineCA() {
    const [activeTab, setActiveTab] = useState('itr');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
    });
    
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        alert('Thank you for your message! Our team will contact you shortly.');
        setFormData({
            name: '',
            phone: '',
            email: '',
            subject: '',
            message: ''
        });
    };
    
    // Updated services with simpler texts
    const services = [
        // Tax & Compliance Services
        { id: 'itr', icon: <FileText className="w-6 h-6" />, title: 'Income Tax Return - ITR', desc: 'File Your ITR Now' },
        { id: 'gst', icon: <Scale className="w-6 h-6" />, title: 'GST Registration', desc: 'GST Registration & Return Filing' },
        { id: 'dsc', icon: <FileSignature className="w-6 h-6" />, title: 'Apply for DSC', desc: 'Digital Signature Certificate' },
        { id: 'udyam', icon: <Factory className="w-6 h-6" />, title: 'Udyam Registration - MSME', desc: 'Register Your MSME' },
        { id: 'fssai', icon: <ClipboardCheck className="w-6 h-6" />, title: 'FSSAI Food License', desc: 'Get FSSAI Food License' },
        { id: 'shop', icon: <Landmark className="w-6 h-6" />, title: 'Shop & Establishment Act', desc: 'Register under Shop Act' },
        { id: 'trademark', icon: <Award className="w-6 h-6" />, title: 'TradeMark Registration', desc: 'Register your Trademark' },
        { id: 'company', icon: <Briefcase className="w-6 h-6" />, title: 'Company Registration', desc: 'Register New Company' },
        { id: 'accounting', icon: <BookOpen className="w-6 h-6" />, title: 'Accounting Services', desc: 'Maintain Your Books' },
        { id: 'brn', icon: <UserCheck className="w-6 h-6" />, title: 'BRN No Sanstha Aadhaar', desc: 'Apply For BRN Number' },
      
        // Insurance Services
        { id: 'insurance-agent', icon: <User className="w-6 h-6" />, title: 'Insurance Agent POS', desc: 'Insurance Agent Registration' },
        { id: 'bike-insurance', icon: <Bike className="w-6 h-6" />, title: 'Bike Insurance', desc: 'Get Bike Insurance' },
        { id: 'car-insurance', icon: <Car className="w-6 h-6" />, title: 'Car Insurance', desc: 'Get Car Insurance' },
        { id: 'rickshaw-insurance', icon: <Truck className="w-6 h-6" />, title: 'Rickshaw Insurance', desc: 'Apply Rickshaw Insurance' },
        { id: 'taxi-insurance', icon: <Car className="w-6 h-6" />, title: 'Taxi Insurance', desc: 'Apply Taxi/Cab Insurance' },
        { id: 'tractor-insurance', icon: <Truck className="w-6 h-6" />, title: 'Tractor Insurance', desc: 'Apply Tractor Insurance' },
        { id: 'truck-insurance', icon: <Truck className="w-6 h-6" />, title: 'Truck/Bus Insurance', desc: 'Apply For Truck/Bus Insurance' },
        { id: 'pickup-insurance', icon: <Truck className="w-6 h-6" />, title: 'Pickup Truck Insurance', desc: 'Apply For Truck/Pickup Insurance' },
        { id: 'accident-insurance', icon: <Shield className="w-6 h-6" />, title: 'Personal Accident Insurance', desc: 'Apply for Personal Accident Insurance' },
        { id: 'health-insurance', icon: <HeartPulse className="w-6 h-6" />, title: 'Health Insurance', desc: 'Apply Health Insurance' },
        { id: 'life-insurance', icon: <UserCheck className="w-6 h-6" />, title: 'Term Life Insurance', desc: 'Apply Term Life Insurance' },
        { id: 'shop-insurance', icon: <Landmark className="w-6 h-6" />, title: 'Shop Insurance', desc: 'Apply Shop Insurance' },
        { id: 'home-insurance', icon: <Home className="w-6 h-6" />, title: 'Home Insurance', desc: 'Apply Home Insurance' },
      
        // Loan Services
        { id: 'property-loan', icon: <Banknote className="w-6 h-6" />, title: 'Loan Against Property', desc: 'Apply Loan Against Property' },
        { id: 'personal-loan', icon: <Handshake className="w-6 h-6" />, title: 'Personal Loan', desc: 'Apply Personal Loan' },
        { id: 'home-loan', icon: <Home className="w-6 h-6" />, title: 'Home Loan', desc: 'Apply Home Loan' },
        { id: 'vehicle-loan', icon: <Truck className="w-6 h-6" />, title: 'Commercial Vehicle Loan', desc: 'Apply Commercial Vehicle Loan' },
        { id: 'old-car-loan', icon: <Car className="w-6 h-6" />, title: 'Old Car Loan', desc: 'Apply Old Car Loan' },
        { id: 'business-loan', icon: <Briefcase className="w-6 h-6" />, title: 'Business Loan', desc: 'Apply Business Loan' },
      ];
    const stats = [
        { number: '4.5 lakh+', title: 'Tax Returns Filed' },
        { number: '24520+', title: 'Strategic Partnerships' },
        { number: '70+', title: 'Onboard Experts' },
        { number: '250+', title: 'Working Cities' }
    ];
    
    const steps = [
        { title: 'Complete Application', desc: 'Simple steps for everyone', icon: <FileText className="w-5 h-5" /> },
        { title: 'Secure Payment', desc: 'Fast & secure processing', icon: <DollarSign className="w-5 h-5" /> },
        { title: 'Expert Processing', desc: 'Application handled by pros', icon: <Users className="w-5 h-5" /> },
        { title: 'Email Confirmation', desc: 'Get updates instantly', icon: <Mail className="w-5 h-5" /> }
    ];
    
    const benefits = [
        { title: '100% Satisfaction Guaranteed', desc: 'We promise exceptional service', icon: <CheckCircle className="w-6 h-6" /> },
        { title: 'Secure and Safe', desc: 'Your data is secure with us', icon: <Lock className="w-6 h-6" /> },
        { title: 'Team of Experts', desc: 'Get help from professionals', icon: <Users className="w-6 h-6" /> },
        { title: 'One Stop Solution', desc: 'All your tax and business needs', icon: <Shield className="w-6 h-6" /> }
    ];

    return (
        <div className="font-sans antialiased text-gray-900 overflow-x-hidden">
            {/* Navbar - Fixed & Transparent initially, solid after scroll */}
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
                <div className="container mx-auto px-4">
                    <nav className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className={`flex items-center ${scrolled ? 'text-red-600' : 'text-white'}`}>
                                <FileText className="w-8 h-8 mr-2" />
                                <span className="text-2xl font-bold">Switch to Legal</span>
                            </div>
                        </div>
                        
                        <div className="hidden lg:flex items-center space-x-6">
                            {services.slice(0, 5).map(service => (
                                <button 
                                    key={service.id}
                                    onClick={() => handleTabChange(service.id)}
                                    className={`flex items-center text-sm font-medium hover:text-red-500 ${scrolled ? 'text-gray-700' : 'text-white'} transition-colors`}
                                >
                                    <span className="ml-1">{service.title}</span>
                                </button>
                            ))}
                            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full shadow-lg flex items-center transition-all duration-300 transform hover:scale-105">
                                <Phone className="w-4 h-4 mr-2" />
                                Contact Us
                            </button>
                        </div>
                        
                        {/* Mobile menu button */}
                        <button 
                            className="lg:hidden text-2xl p-2" 
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? 
                                <X className={`w-6 h-6 ${scrolled ? 'text-gray-800' : 'text-white'}`} /> : 
                                <Menu className={`w-6 h-6 ${scrolled ? 'text-gray-800' : 'text-white'}`} />
                            }
                        </button>
                    </nav>
                    
                    {/* Mobile menu */}
                    {mobileMenuOpen && (
                        <div className="lg:hidden bg-white shadow-xl rounded-lg mt-2 py-4 px-2 absolute top-full left-4 right-4 border border-gray-100">
                            <div className="flex flex-col space-y-3">
                                {services.slice(0, 5).map(service => (
                                    <button 
                                        key={service.id}
                                        onClick={() => {
                                            handleTabChange(service.id);
                                            setMobileMenuOpen(false);
                                        }}
                                        className="flex items-center text-gray-800 hover:text-red-600 px-4 py-2 hover:bg-red-50 rounded-lg"
                                    >
                                        {service.icon}
                                        <span className="ml-3">{service.title}</span>
                                    </button>
                                ))}
                                <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg flex items-center justify-center mt-4">
                                    <Phone className="w-4 h-4 mr-2" />
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </header>
            
            {/* Hero Section with Animation */}
            <div className="relative bg-gradient-to-r from-red-600 via-red-500 to-yellow-500 text-white pt-32 pb-24 overflow-hidden">
                {/* Animated circles in background */}
                <div className="absolute top-20 right-10 w-64 h-64 bg-yellow-400 opacity-20 rounded-full animate-pulse"></div>
                <div className="absolute bottom-10 left-10 w-32 h-32 bg-red-700 opacity-20 rounded-full animate-pulse delay-150"></div>
                <div className="absolute top-40 left-1/3 w-24 h-24 bg-yellow-300 opacity-10 rounded-full animate-pulse delay-300"></div>
                
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="text-center md:text-left">
                            <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 leading-tight">
                                Tax Filing <span className="text-yellow-300">Made Simple</span>
                            </h1>
                            <p className="text-lg mb-8 text-white opacity-90 max-w-lg">
                                A hassle-free experience for everyone. No technical jargon – just simple steps to file your taxes and manage your business compliances.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                                <button className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold flex items-center shadow-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105">
                                    <FileText className="w-5 h-5 mr-2" />
                                    File Your ITR Now
                                </button>
                                <button className="bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-full font-semibold flex items-center shadow-lg border border-red-400 transition-all duration-300 transform hover:scale-105">
                                    <Search className="w-5 h-5 mr-2" />
                                    Explore Services
                                </button>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="relative transform transition-all hover:scale-105 duration-500">
                                <div className="absolute -top-6 -left-6 bg-yellow-400 rounded-full w-24 h-24 flex items-center justify-center shadow-lg animate-pulse z-10">
                                    <div className="text-red-600 font-bold rotate-12">
                                        <div className="text-2xl">50%</div>
                                        <div className="text-sm">OFF</div>
                                    </div>
                                </div>
                                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 text-gray-800 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                                    <div className="flex justify-between items-center mb-6">
                                        <div className="flex space-x-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                        </div>
                                        <FileText className="w-8 h-8 text-red-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">Quick ITR Filing</h3>
                                    <div className="space-y-4 mb-6">
                                        <div className="flex items-center">
                                            <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                                            <span>Easy Documentation</span>
                                        </div>
                                        <div className="flex items-center">
                                            <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                                            <span>Expert Assistance</span>
                                        </div>
                                        <div className="flex items-center">
                                            <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                                            <span>Fast Processing</span>
                                        </div>
                                    </div>
                                    <button className="bg-gradient-to-r from-red-600 to-yellow-500 text-white px-6 py-3 rounded-full w-full flex items-center justify-center font-medium transition-all duration-300 hover:shadow-lg">
                                        Start Filing <ArrowRight className="w-4 h-4 ml-2" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Wave separator */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
                        <path fill="#ffffff" fillOpacity="1" d="M0,32L48,37.3C96,43,192,53,288,53.3C384,53,480,43,576,48C672,53,768,75,864,69.3C960,64,1056,32,1152,16C1248,0,1344,0,1392,0L1440,0L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"></path>
                    </svg>
                </div>
            </div>
            
            {/* Services Showcase - Modern Grid */}
            <div className="py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="inline-block text-3xl font-bold relative">
                            Our Services
                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full"></div>
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                        {services.map(service => (
                            <button 
                                key={service.id}
                                onClick={() => handleTabChange(service.id)}
                                className={`group p-6 rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl relative overflow-hidden ${
                                    activeTab === service.id 
                                    ? 'bg-gradient-to-br from-red-500 to-red-600 text-white' 
                                    : 'bg-white hover:bg-gray-50'
                                }`}
                            >
                                {/* Background circle decoration */}
                                <div className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-full ${activeTab === service.id ? 'bg-red-400/30' : 'bg-red-100/50'} transition-all duration-300 group-hover:bg-red-500/20`}></div>
                                
                                <div className="relative z-10 flex flex-col items-center text-center">
                                    <div className={`p-3 rounded-full mb-4 ${
                                        activeTab === service.id 
                                        ? 'bg-white/20' 
                                        : 'bg-red-50 group-hover:bg-red-100'
                                    } transition-colors duration-300`}>
                                        <div className={`${activeTab === service.id ? 'text-white' : 'text-red-500'}`}>
                                            {service.icon}
                                        </div>
                                    </div>
                                    <h3 className={`font-bold mb-1 text-sm ${activeTab === service.id ? 'text-white' : ''}`}>
                                        {service.title}
                                    </h3>
                                    <p className={`text-xs ${activeTab === service.id ? 'text-white/80' : 'text-gray-500'}`}>
                                        {service.desc}
                                    </p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            
            {/* Stats Section with Animation */}
            <div className="bg-gray-50 py-16 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-red-100"></div>
                    <div className="absolute bottom-10 left-10 w-56 h-56 rounded-full bg-yellow-100"></div>
                </div>
                
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="inline-block text-3xl font-bold relative">
                            Why Choose <span className="text-red-600">Switch to Legal</span>
                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full"></div>
                        </h2>
                        <p className="text-gray-600 mt-4 max-w-lg mx-auto">Trusted by thousands of individuals and businesses across India</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                                <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">{stat.number}</div>
                                <div className="text-gray-600">{stat.title}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            {/* About Section */}
            <div className="py-16 bg-gradient-to-b from-white to-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl font-bold mb-6">Welcome to Switch to Legal</h2>
                        <p className="text-gray-600 mb-8">
                            Switch to Legal is about providing excellent services towards affordable online tax return filing solutions for individuals and businesses. We believe in using technology to attain accuracy that walks towards excellence and our service line is built with this thought. We are working to break the myth of tax return filing process that it is a time taking and hard procedure which is mandatory to complete.
                        </p>
                        <p className="text-gray-600">
                            Switch to Legal is an Authorized e-Return Intermediary Registered with the Income-Tax Department, Government of India. We are a close concern of Telsys Web Infotech Private Limited and provide tax return filing services with our easy e-filing system.
                        </p>
                    </div>

                    {/* Authorizations */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                            <div className="bg-red-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                                <Shield className="w-8 h-8 text-red-500" />
                            </div>
                            <h3 className="text-lg font-semibold text-center mb-2">Authorized e-Return Intermediary</h3>
                            <p className="text-gray-600 text-sm text-center">Registered with Income Tax Department for e-filing returns</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                            <div className="bg-yellow-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                                <Award className="w-8 h-8 text-yellow-500" />
                            </div>
                            <h3 className="text-lg font-semibold text-center mb-2">Startup India Certified</h3>
                            <p className="text-gray-600 text-sm text-center">Duly certified under GOI's Startup India scheme</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                            <div className="bg-green-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                                <Building className="w-8 h-8 text-green-500" />
                            </div>
                            <h3 className="text-lg font-semibold text-center mb-2">iStart Supported</h3>
                            <p className="text-gray-600 text-sm text-center">Government of Rajasthan Initiative for Startups</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                            <div className="bg-blue-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                                <Users className="w-8 h-8 text-blue-500" />
                            </div>
                            <h3 className="text-lg font-semibold text-center mb-2">Digital India</h3>
                            <p className="text-gray-600 text-sm text-center">Supporting Government Making India Digital</p>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-12">Why Choose Us</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {stats.map((stat, index) => (
                                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                    <div className="text-3xl font-bold text-red-600 mb-2">{stat.number}</div>
                                    <div className="text-gray-600">{stat.title}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Services Grid */}
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="bg-red-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                                <FileText className="w-8 h-8 text-red-500" />
                            </div>
                            <h3 className="text-xl font-semibold mb-4">ITR Filing Assistance</h3>
                            <p className="text-gray-600 mb-4">Get Expert assistance in tax filling for salaried and self-employed individuals, NRIs, Capital gains, and more services.</p>
                            <button className="text-red-600 font-semibold flex items-center hover:text-red-700">
                                Learn More <ArrowRight className="w-4 h-4 ml-2" />
                            </button>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="bg-yellow-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                                <Building className="w-8 h-8 text-yellow-500" />
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Business Management</h3>
                            <p className="text-gray-600 mb-4">Business Management is the coordination and organization of business activities. Business managers oversee operations and help employees reach their top productivity levels.</p>
                            <button className="text-red-600 font-semibold flex items-center hover:text-red-700">
                                Learn More <ArrowRight className="w-4 h-4 ml-2" />
                            </button>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="bg-green-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                                <Shield className="w-8 h-8 text-green-500" />
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Legal Services</h3>
                            <p className="text-gray-600 mb-4">Preparation of planning memo of appeal, paper book including printing and translation of documents in legal proceedings, Drafting of legal documents special leave petition etc.</p>
                            <button className="text-red-600 font-semibold flex items-center hover:text-red-700">
                                Learn More <ArrowRight className="w-4 h-4 ml-2" />
                            </button>
                        </div>
                    </div>

                    {/* Security Features */}
                    <div className="bg-gradient-to-r from-red-50 to-yellow-50 rounded-2xl p-8 mb-16">
                        <h2 className="text-3xl font-bold text-center mb-12">Committed to Security</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="bg-white p-6 rounded-xl shadow-md">
                                <div className="flex items-center mb-4">
                                    <Lock className="w-6 h-6 text-red-500 mr-3" />
                                    <h3 className="font-semibold">Encryption</h3>
                                </div>
                                <p className="text-gray-600 text-sm">Your data is transmitted across SSL certified pathways. We are SOC 2 complaint.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-md">
                                <div className="flex items-center mb-4">
                                    <Shield className="w-6 h-6 text-red-500 mr-3" />
                                    <h3 className="font-semibold">Privacy</h3>
                                </div>
                                <p className="text-gray-600 text-sm">We do not share your or your client's data with unaffiliated third parties for their own purpose.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-md">
                                <div className="flex items-center mb-4">
                                    <FileText className="w-6 h-6 text-red-500 mr-3" />
                                    <h3 className="font-semibold">Data Storage</h3>
                                </div>
                                <p className="text-gray-600 text-sm">We use ISO 2000:2001 certified data centric which are quarterly VAPT tested and externally audited.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-md">
                                <div className="flex items-center mb-4">
                                    <CheckCircle className="w-6 h-6 text-red-500 mr-3" />
                                    <h3 className="font-semibold">Safe & Secure</h3>
                                </div>
                                <p className="text-gray-600 text-sm">Our aim is to enable maximum security, through multiple layers, and to minimize the risk of anyone's data being misused.</p>
                            </div>
                        </div>
                    </div>

                    {/* Satisfaction Guarantee */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
                        <div className="max-w-2xl mx-auto">
                            <h2 className="text-3xl font-bold mb-6">100% Satisfaction Guaranteed</h2>
                            <p className="text-gray-600 mb-8">
                                We promise to provide exceptional service, in case you are not satisfied with the service you purchased, we will provide on unconditional refund of Switch to Legal. In service fee you paid.
                            </p>
                            <button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center mx-auto shadow-lg transition-all duration-300 transform hover:scale-105">
                                Get Started Now <ArrowRight className="w-5 h-5 ml-2" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Contact Form Section */}
            <div className="bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                            <p className="text-gray-600">Have questions? We're here to help!</p>
                        </div>
                        
                        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8">
                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors"
                                        required
                                    />
                                </div>
                            </div>
                            
                            <div className="mb-6">
                                <label className="block text-gray-700 font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors"
                                    required
                                />
                            </div>
                            
                            <div className="mb-6">
                                <label className="block text-gray-700 font-medium mb-2">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors"
                                    required
                                />
                            </div>
                            
                            <div className="mb-6">
                                <label className="block text-gray-700 font-medium mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors"
                                    required
                                ></textarea>
                            </div>
                            
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-105"
                            >
                                Send Message <ArrowRight className="w-5 h-5 ml-2" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            
            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center mb-4">
                                <FileText className="w-8 h-8 mr-2 text-red-500" />
                                <span className="text-2xl font-bold">Switch to Legal</span>
                            </div>
                            <p className="text-gray-400">Your trusted partner for all tax and business compliance needs.</p>
                        </div>
                        
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Services</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">ITR Filing</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">GST Registration</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Company Registration</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Trademark Registration</a></li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center text-gray-400">
                                    <Phone className="w-5 h-5 mr-2" />
                                    +91 1234567890
                                </li>
                                <li className="flex items-center text-gray-400">
                                    <Mail className="w-5 h-5 mr-2" />
                                    info@webonlineca.com
                                </li>
                                <li className="flex items-center text-gray-400">
                                    <MessageSquare className="w-5 h-5 mr-2" />
                                    Live Chat Support
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                        <p>&copy; {new Date().getFullYear()} Switch to Legal. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}