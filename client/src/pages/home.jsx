import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    FileText,
    Phone,
    Search,
    X,
    CheckCircle,
    Shield,
    Award,
    Building,
    Users,
    Lock,
    Briefcase,
    Scale,
    Calculator,
    Globe,
    UserCheck,
    Store,
    CarFront,
    HeartPulse,
    Home,
    Banknote,
    FileSignature,
    FileCheck,
    ShieldCheck,
    Newspaper,
    IdCard,
    ContactRound,
    FileKey,
    MapPinCheck,
    GraduationCap,
    ShieldAlert,
    BadgeIndianRupee,
    Handshake,
    Siren,
    Receipt,
    Repeat,
    Contact,
    FileX,
    Gift,
    Zap
} from 'lucide-react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

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
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const services = [
        { 
            id: 'citizen-documents',
            category: 'Citizen Documents',
            items: [
                { id: 'birth-certificate', title: 'Birth Certificate', desc: 'Official birth documentation', icon: <FileText className="w-6 h-6" /> },
                { id: 'aadhar-card', title: 'Aadhaar Card', desc: 'Unique identification document', icon: <UserCheck className="w-6 h-6" /> },
                { id: 'pan-tan', title: 'PAN TAN / TDS / TCS / DSC', desc: 'Tax and digital signature services', icon: <FileSignature className="w-6 h-6" /> },
                { id: 'passport', title: 'Passport Services', desc: 'Fresh/Reissue/Tatkaal passport', icon: <Globe className="w-6 h-6" /> },
                { id: 'gazette', title: 'Gazette Services', desc: 'Name/DOB/Religion changes', icon: <FileCheck className="w-6 h-6" /> },
                { id: 'marriage-certificate', title: 'Marriage Certificate', desc: 'Official marriage documentation', icon: <ShieldCheck className="w-6 h-6" /> },
                { id: 'voter-id', title: 'Voter ID', desc: 'Electoral identification', icon: <UserCheck className="w-6 h-6" /> },
                { id: 'driving-license', title: 'Driving License', desc: '2/4/3 Wheeler + TR/LMV', icon: <CarFront className="w-6 h-6" /> },
                { id: 'newspaper-notice', title: 'News Paper Published', desc: 'Public notice publication', icon: <Newspaper className="w-6 h-6" /> },
                { id: 'senior-citizen', title: 'Senior Citizen Card', desc: 'E-Shram Card services', icon: <IdCard className="w-6 h-6" /> },
                { id: 'cast-certificate', title: 'Cast Certificate', desc: 'NC/EWS/IC/DC/PCC', icon: <FileText className="w-6 h-6" /> },
                { id: 'family-documents-kyc', title: 'Family Documents KYC', desc: 'Family identification services', icon: <ContactRound className="w-6 h-6" /> },
                { id: 'police-clearance-certificate', title: 'Police Clearance Certificate', desc: 'Criminal record verification', icon: <Siren className="w-6 h-6" /> },
                { id: 'apostille-certificate', title: 'Apostille Certificate', desc: 'International document verification', icon: <MapPinCheck className="w-6 h-6" /> },
                { id: 'hsrp', title: 'HSRP', desc: 'High-Security Registration Plate', icon: <FileKey className="w-6 h-6" /> }
            ]
        },
        {
            id: 'education-&-scholarship',
            category: 'Education & Scholarship',
            items: [
                { id: 'domicile', title: 'Domicile Certificate', desc: 'Residence proof documentation', icon: <FileText className="w-6 h-6" /> },
                { id: 'income-certificate', title: 'Income Certificate', desc: 'Medical/Education/Property', icon: <Receipt className="w-6 h-6" /> },
                { id: 'cast-certificate-tehsil', title: 'Cast Certificate by Tehsil', desc: 'ST/SC/OBC documentation', icon: <FileText className="w-6 h-6" /> },
                { id: 'non-creamy-layer', title: 'Non-Creamy Layer Certificate', desc: '3yrs IC/DC/Cast Cert merger', icon: <FileText className="w-6 h-6" /> },
                { id: 'ews', title: 'EWS Certificate', desc: 'Economically Weaker Section', icon: <ShieldAlert className="w-6 h-6" /> },
                { id: 'education-scholarship', title: 'Education Scholarship', desc: 'CSC e-Governance & NGO support', icon: <GraduationCap className="w-6 h-6" /> }
            ]
        },
        {
            id: 'legal-documents',
            category: 'Legal Documents',
            items: [
                { id: 'will-registration', title: 'Will Registration', desc: 'Legal will documentation', icon: <Repeat className="w-6 h-6" /> },
                { id: 'sales-deed', title: 'Sales Deed', desc: 'Room Set Agreement', icon: <BadgeIndianRupee className="w-6 h-6" /> },
                { id: 'renouncing-affidavit', title: 'Renouncing Affidavit', desc: 'Legal bonds and affidavits', icon: <Scale className="w-6 h-6" /> },
                { id: 'friendly-loan', title: 'Friendly Loan Affidavit', desc: 'Loan documentation', icon: <Contact className="w-6 h-6" /> },
                { id: 'marriage-declaration', title: 'Marriage Declaration', desc: 'Legal marriage documentation', icon: <FileText className="w-6 h-6" /> },
                { id: 'gap-certificate', title: 'Gap Certificate', desc: 'Educational gap documentation', icon: <FileText className="w-6 h-6" /> },
                { id: 'lost-certificate', title: 'Lost Certificate Affidavit', desc: 'Certificate replacement', icon: <FileX className="w-6 h-6" /> },
                { id: 'leave-licence', title: 'Leave & Licence', desc: 'Property licensing', icon: <FileText className="w-6 h-6" /> },
                { id: 'partnership-deed', title: 'Partnership Deed', desc: 'Framing & Registration', icon: <Handshake className="w-6 h-6" /> },
                { id: 'gift-deed', title: 'Gift Deed', desc: 'Property gifting documentation', icon: <Gift className="w-6 h-6" /> }
            ]
        },
        {
            id: 'property-registration',
            category: 'Property Registration',
            items: [
                { id: 'registered-property', title: 'Registered Property', desc: 'MHADA/SRA/CIDCO/MMRDA', icon: <Home className="w-6 h-6" /> },
                { id: 'sale-deed', title: 'Sale Deed', desc: 'Non-Registered/SLUM Property', icon: <FileText className="w-6 h-6" /> },
                { id: 'will-probation', title: 'Will Registration', desc: 'Probation requirements', icon: <FileText className="w-6 h-6" /> },
                { id: 'legal-heirs', title: 'Legal Heirs Certificate', desc: 'Tehsil documentation', icon: <Scale className="w-6 h-6" /> },
                { id: 'electricity-transfer', title: 'Electricity Bill Transfer', desc: 'Name/Ownership transfer', icon: <Zap className="w-6 h-6" /> },
                { id: 'title-search', title: 'Title Search', desc: 'Bank loan verification', icon: <Search className="w-6 h-6" /> }
            ]
        },
        {
            id: 'trade-mark-&-ipr-registration',
            category: 'Trade Mark & IPR Registration',
            items: [
                { id: 'trademark', title: 'Trademark Registration', desc: 'Brand protection services', icon: <FileText className="w-6 h-6" /> },
                { id: 'copyright', title: 'Copyright Registration', desc: 'Intellectual property protection', icon: <FileText className="w-6 h-6" /> },
                { id: 'design', title: 'Design Registration', desc: 'Industrial design protection', icon: <FileText className="w-6 h-6" /> },
                { id: 'patent', title: 'Patent Registration', desc: 'Innovation protection', icon: <FileText className="w-6 h-6" /> },
                { id: 'iso', title: 'ISO Certification', desc: 'Quality standards certification', icon: <Award className="w-6 h-6" /> },
                { id: 'shop-act', title: 'Shop Act License', desc: 'Business licensing', icon: <Store className="w-6 h-6" /> },
                { id: 'company-incorporation', title: 'Company Incorporation', desc: 'Business registration', icon: <Building className="w-6 h-6" /> },
                { id: 'partnership-firm', title: 'Partnership Firm', desc: 'Business partnership setup', icon: <Users className="w-6 h-6" /> },
                { id: 'proprietorship', title: 'Proprietorship Firm', desc: 'Sole proprietorship setup', icon: <Users className="w-6 h-6" /> },
                { id: 'import-export', title: 'Import Export Code', desc: 'International trade code', icon: <Globe className="w-6 h-6" /> },
                { id: 'barcode', title: 'Bar Code Registration', desc: 'Product identification code', icon: <FileText className="w-6 h-6" /> }
            ]
        },
        {
            id: 'gst-&-itr-registration',
            category: 'GST & ITR Registration',
            items: [
                { id: 'pan-application', title: 'PAN Application', desc: 'Tax identification number', icon: <FileText className="w-6 h-6" /> },
                { id: 'tan-tds', title: 'TAN / TDS / TCS', desc: 'Tax deduction services', icon: <FileText className="w-6 h-6" /> },
                { id: 'gst-registration', title: 'GST Registration', desc: 'Goods and services tax', icon: <FileText className="w-6 h-6" /> },
                { id: 'business-tax', title: 'Business Tax Return', desc: 'Business tax filing', icon: <Calculator className="w-6 h-6" /> },
                { id: 'company-tax', title: 'Company Tax Return', desc: 'Corporate tax filing', icon: <Calculator className="w-6 h-6" /> },
                { id: 'trust-accounting', title: 'Trust / NGO Accounting', desc: 'Non-profit organization tax', icon: <Calculator className="w-6 h-6" /> },
                { id: 'llp-tax', title: 'LLP Tax Filing', desc: 'Limited liability partnership tax', icon: <Calculator className="w-6 h-6" /> },
                { id: 'itr-filing', title: 'ITR Filing', desc: 'Single year or Two-year tax filing', icon: <Calculator className="w-6 h-6" /> },
                { id: 'pan-surrender', title: 'PAN Surrender', desc: 'Tax number surrender process', icon: <FileText className="w-6 h-6" /> },
                { id: 'current-account', title: 'Current Account', desc: 'Business account opening', icon: <Banknote className="w-6 h-6" /> }
            ]
        },
        {
            id: 'insurance',
            category: 'Insurance',
            items: [
                { id: 'general-insurance', title: 'General Insurance', desc: 'Comprehensive coverage', icon: <Shield className="w-6 h-6" /> },
                { id: 'life-insurance', title: 'Life Insurance', desc: 'Life protection plans', icon: <HeartPulse className="w-6 h-6" /> },
                { id: 'health-insurance', title: 'Health Insurance', desc: 'Medical coverage', icon: <HeartPulse className="w-6 h-6" /> },
                { id: 'motor-insurance', title: 'Motor Insurance', desc: 'Vehicle coverage', icon: <CarFront className="w-6 h-6" /> },
                { id: 'property-insurance', title: 'Property Insurance', desc: 'Property protection', icon: <Home className="w-6 h-6" /> },
                { id: 'mobile-insurance', title: 'Mobile Insurance', desc: 'Device protection', icon: <Phone className="w-6 h-6" /> },
                { id: 'travel-insurance', title: 'Travel Insurance', desc: 'Travel protection', icon: <Globe className="w-6 h-6" /> },
                { id: 'shop-insurance', title: 'Shop Insurance', desc: 'Business protection', icon: <Store className="w-6 h-6" /> },
                { id: 'crop-insurance', title: 'Crop Insurance', desc: 'Agricultural protection', icon: <Award className="w-6 h-6" /> }
            ]
        },
        {
            id: 'csc-kyc-&-others-id-proof',
            category: 'CSC KYC & Others ID Proof',
            items: [
                { id: 'ayushman-bharat', title: 'Ayushman Bharat KYC', desc: 'Medical support coverage', icon: <HeartPulse className="w-6 h-6" /> },
                { id: 'pan-tan-kyc', title: 'PAN / TAN / TDS', desc: 'Tax identification', icon: <FileText className="w-6 h-6" /> },
                { id: 'driving-license-kyc', title: 'Driving License', desc: 'Vehicle license', icon: <CarFront className="w-6 h-6" /> },
                { id: 'voter-id-kyc', title: 'Voter ID', desc: 'Electoral identification', icon: <UserCheck className="w-6 h-6" /> },
                { id: 'ayushman-medical', title: 'Ayushman Medical', desc: '5 Lakhs coverage', icon: <HeartPulse className="w-6 h-6" /> },
                { id: 'e-shram', title: 'E Shram', desc: 'Labor KYC services', icon: <UserCheck className="w-6 h-6" /> },
                { id: 'nps', title: 'NPS', desc: 'National Pension Scheme', icon: <Banknote className="w-6 h-6" /> },
                { id: 'atal-pension', title: 'Atal Pension', desc: 'Pension scheme', icon: <Banknote className="w-6 h-6" /> },
                { id: 'jeevan-pramaan', title: 'Jeevan Pramaan', desc: 'Life certificate', icon: <FileText className="w-6 h-6" /> }
            ]
        },
        {
            id: 'business-startup',
            category: 'Business Startup',
            items: [
                { id: 'udyam', title: 'UDHYAM', desc: 'Center Government registration', icon: <Award className="w-6 h-6" /> },
                { id: 'gumasta', title: 'Gumasta', desc: 'State Government license', icon: <FileText className="w-6 h-6" /> },
                { id: 'fssai', title: 'FSSAI License', desc: 'Food & Drugs license', icon: <Shield className="w-6 h-6" /> },
                { id: 'dsc', title: 'DSC Class III', desc: 'Digital signature certificate', icon: <FileSignature className="w-6 h-6" /> },
                { id: 'gst-startup', title: 'GST Registration', desc: 'Goods & Service Tax', icon: <FileText className="w-6 h-6" /> },
                { id: 'trademark-startup', title: 'Trade Mark Registration', desc: 'Brand protection', icon: <FileText className="w-6 h-6" /> },
                { id: 'llp-startup', title: 'LLP Registration', desc: 'Limited liability partnership', icon: <Building className="w-6 h-6" /> },
                { id: 'partnership-startup', title: 'Partnership Registration', desc: 'Business partnership', icon: <Users className="w-6 h-6" /> },
                { id: 'psara', title: 'PSARA License', desc: 'Security license', icon: <Shield className="w-6 h-6" /> },
                { id: 'pan-center', title: 'PAN Centre Agency', desc: 'Tax service provider', icon: <FileText className="w-6 h-6" /> }
            ]
        },
        {
            id: 'e-banking',
            category: 'E-Banking',
            items: [
                { id: 'internet-banking', title: 'Internet Banking', desc: 'Online banking services', icon: <Globe className="w-6 h-6" /> },
                { id: 'mobile-banking', title: 'Mobile Banking', desc: 'Smartphone banking', icon: <Phone className="w-6 h-6" /> },
                { id: 'phone-banking', title: 'Phone Banking', desc: 'Telephone banking', icon: <Phone className="w-6 h-6" /> },
                { id: 'eft', title: 'Electronic Fund Transfer', desc: 'Digital money transfer', icon: <Banknote className="w-6 h-6" /> },
                { id: 'upi', title: 'UPI Services', desc: 'Unified payment interface', icon: <Banknote className="w-6 h-6" /> },
                { id: 'e-wallet', title: 'E-Wallets', desc: 'Digital wallet services', icon: <Banknote className="w-6 h-6" /> },
                { id: 'bill-payment', title: 'Bill Payment', desc: 'Online bill payments', icon: <FileText className="w-6 h-6" /> },
                { id: 'cheque-book', title: 'Cheque Book', desc: 'Online banking requests', icon: <FileText className="w-6 h-6" /> }
            ]
        },
        {
            id: 'tours-travel-&-visa',
            category: 'Tours, Travel & Visa',
            items: [
                { id: 'tours', title: 'Tour Services', desc: 'Domestic & International tours', icon: <Globe className="w-6 h-6" /> },
                { id: 'travel', title: 'Travel Services', desc: 'Flight & hotel booking', icon: <Globe className="w-6 h-6" /> },
                { id: 'visa', title: 'Visa Services', desc: 'Visa application support', icon: <FileText className="w-6 h-6" /> }
            ]
        },
        {
            id: 'e-loan',
            category: 'E-Loan',
            items: [
                { id: 'digital-kyc', title: 'Digital KYC', desc: 'Online verification', icon: <UserCheck className="w-6 h-6" /> },
                { id: 'personal-loan', title: 'Personal Loan', desc: 'Individual financing', icon: <Banknote className="w-6 h-6" /> },
                { id: 'home-loan', title: 'Home Loan', desc: 'Property financing', icon: <Home className="w-6 h-6" /> },
                { id: 'vehicle-loan', title: 'Vehicle Loan', desc: 'Auto financing', icon: <CarFront className="w-6 h-6" /> },
                { id: 'education-loan', title: 'Education Loan', desc: 'Study financing', icon: <Award className="w-6 h-6" /> },
                { id: 'business-loan', title: 'Business Loan', desc: 'Enterprise financing', icon: <Briefcase className="w-6 h-6" /> },
                { id: 'gold-loan', title: 'Gold Loan', desc: 'Asset-based financing', icon: <Award className="w-6 h-6" /> },
                { id: 'property-loan', title: 'Loan Against Property', desc: 'Property-based financing', icon: <Home className="w-6 h-6" /> }
            ]
        },
        {   
            id: 'tele-law-&-e-court-support',
            category: 'Free Tele Law & e-Court Support',
            items: [
                { id: 'tele-law', title: 'Free Legal Advice', desc: 'Legal consultation services', icon: <Scale className="w-6 h-6" /> }
            ]
        },
        {
            id: 'e-commerce-&-digital-platform',
            category: 'E-Commerce & Digital Platform',
            items: [
                { id: 'ecommerce-website', title: 'E-Commerce Website', desc: 'Online store development', icon: <Globe className="w-6 h-6" /> },
                { id: 'mobile-app', title: 'Mobile App', desc: 'E-commerce app development', icon: <Phone className="w-6 h-6" /> },
                { id: 'marketplace', title: 'Marketplace Integration', desc: 'Platform integration', icon: <Store className="w-6 h-6" /> },
                { id: 'payment-gateway', title: 'Payment Gateway', desc: 'Secure payment integration', icon: <Banknote className="w-6 h-6" /> },
                { id: 'digital-marketing', title: 'Digital Marketing', desc: 'Online promotion', icon: <Globe className="w-6 h-6" /> }
            ]
        }
    ];

    const stats = [
        { number: '25,000+', title: 'Satisfied Clients' },
        { number: '1,00,000+', title: 'Applications Submitted Annually' },
        { number: '15+', title: 'Years Experience' },
        { number: '99.8%', title: 'Success Rate' }
    ];

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
        // Convert service name to URL slug
        const serviceName = services.flatMap(cat => cat.items).find(item => item.id === tabId)?.title;
        if (serviceName) {
            const urlSlug = serviceName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
            navigate(`/service/${urlSlug}`);
        }
    };

    // Update the filteredServices logic
    const filteredServices = services
        .map(category => {
            // If searchQuery matches the category name, show all items in that category
            if (
                searchQuery &&
                category.category.toLowerCase().includes(searchQuery.toLowerCase())
            ) {
                return category;
            }
            // Otherwise, filter items by title/desc/category
            return {
                ...category,
                items: category.items.filter(service =>
                    service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    service.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    category.category.toLowerCase().includes(searchQuery.toLowerCase())
                )
            };
        })
        .filter(category => category.items.length > 0);

    return (
        <div className="font-sans antialiased text-gray-900 overflow-x-hidden bg-white">
            {/* Corporate Header */}
            <Navbar />

            {/* Professional Hero Section */}
            <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white pt-24 pb-8 md:pt-28 md:pb-10">
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-8 md:mb-12">
                            <div className="inline-flex items-center bg-blue-600/20 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full text-blue-300 text-xs md:text-sm font-medium mb-4 md:mb-6">
                                <Shield className="w-4 h-4 mr-2" />
                                Trusted Legal Partner
                            </div>
                            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                                Find Your <span className="text-blue-400">Legal Service</span>
                            </h1>
                            <p className="text-base md:text-lg mb-6 md:mb-8 text-slate-300">
                                Search from our comprehensive range of legal and compliance services
                            </p>
                        </div>

                        {/* Search Section */}
                        <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-6 mb-6 md:mb-8">
                            <div className="relative">
                                <div className="flex items-center">
                                    <div className="flex-1 relative">
                                        <input
                                            type="text"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            placeholder="Search for services (e.g., ITR Filing, GST Registration, DSC)"
                                            className="w-full px-4 md:px-6 py-3 md:py-4 pl-10 md:pl-12 text-slate-800 bg-slate-50 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 text-sm md:text-base"
                                        />
                                        <Search className="w-5 h-5 text-slate-400 absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2" />
                                        {searchQuery && (
                                            <button
                                                onClick={() => setSearchQuery('')}
                                                className="absolute right-3 md:right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                                                aria-label="Clear search"
                                            >
                                                <X className="w-5 h-5" />
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Popular Searches */}
                            <div className="mt-4 md:mt-6">
                                <div className="text-xs md:text-sm text-slate-500 mb-2 md:mb-3">Popular Searches:</div>
                                <div className="flex flex-wrap gap-2">
                                    {['Citizen Documents', 'Legal Documents', 'GST & ITR Registration', 'Trade Mark & IPR Registration'].map((tag, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setSearchQuery(tag)}
                                            className="px-3 py-1.5 md:px-4 md:py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs md:text-sm font-medium transition-colors"
                                        >
                                            {tag}
                                        </button>
                                    ))}
                                    {searchQuery && (
                                        <button
                                            onClick={() => setSearchQuery('')}
                                            className="px-3 py-1.5 md:px-4 md:py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg text-xs md:text-sm font-medium transition-colors"
                                        >
                                            Clear
                                        </button>
                                    )}  
                                </div>
                            </div>
                        </div>

                                    {/* Quick Stats */}
                                    {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        
                        {/* Corporate Services Grid */}
                        <div className="py-10 bg-slate-50">
                            <div className="container mx-auto px-4">
                                <div className="mb-12">
                                    <h2 className="text-center text-3xl font-bold text-slate-800 mb-4">Our Services</h2>
                                    <p className="text-center text-slate-600">Comprehensive range of legal and compliance services</p>
                                </div>
                                
                                {filteredServices.map((category, categoryIndex) => (
                                    <div key={categoryIndex} id={category.id} className="mb-12">
                                        <h3 className="text-center text-2xl font-semibold text-slate-800 mb-6">{category.category}</h3>
                                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                            {category.items.map(service => (
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
                                ))}
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
                        </div>
                        <div className="bg-slate-800 p-8 rounded-xl hover:bg-slate-700 transition-colors">
                            <div className="bg-green-600 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                                <Building className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Corporate Solutions</h3>
                            <p className="text-slate-400 mb-6">End-to-end business management services including incorporation, compliance, regulatory filings, and strategic business advisory.</p>
                        </div>
                        <div className="bg-slate-800 p-8 rounded-xl hover:bg-slate-700 transition-colors">
                            <div className="bg-purple-600 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                                <Scale className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Legal Advisory</h3>
                            <p className="text-slate-400 mb-6">Professional legal consultation, documentation, litigation support, and regulatory compliance across various practice areas.</p>
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
            <Footer />
        </div>
    );
}