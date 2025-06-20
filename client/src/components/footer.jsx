import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
    Phone,
    Mail,
    MessageSquare,
    Scale,
    Building,
    Users,
    Shield,
    Award
} from 'lucide-react';
import logo from '../assets/logo.png';

  const serviceCategories = [
    { id: 'citizen-documents', title: 'Citizen Documents' },
    { id: 'legal-documents', title: 'Legal Documents' },
    { id: 'trade-mark-&-ipr-registration', title: 'Trade Mark & IPR Registration' },
    { id: 'gst-&-itr-registration', title: 'GST & ITR Registration' },
    { id: 'e-commerce-&-digital-platform', title: 'E-Commerce & Digital Platform' }
  ];

const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();
    // Scroll to the service section by id
    const scrollToService = (serviceId) => {
        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: serviceId } });
            return;
        }
        // If already on home, scroll to the section
        const el = document.getElementById(serviceId);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-slate-900 text-white py-10 pb-7">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div>
                        <div className="flex items-center mb-4">
                            <div className=" mr-3">
                                <img src={logo} alt="Logo" className="w-24 h-24" />
                            </div>
                            <span className="text-xl font-bold">Switch to Legal</span>
                        </div>
                        <p className="text-slate-400 text-sm mb-4">
                            Comprehensive Tax, Legal & Compliance Solutions for Businesses and Individuals.
                        </p>
                        <div className="flex space-x-3 mt-4">
                            <a href="tel:+91 98672 22166" className="hover:text-blue-400 transition-colors">
                                <Phone className="w-5 h-5" />
                            </a>
                            <a href="mailto:switchtolegal@gmail.com" className="hover:text-blue-400 transition-colors">
                                <Mail className="w-5 h-5" />
                            </a>
                            <a href="https://wa.me/919867222166" className="hover:text-blue-400 transition-colors">
                                <MessageSquare className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Service Categories</h4>
                        <ul className="space-y-2 text-slate-400 text-sm">
                            {serviceCategories.map(category => (
                                <li key={category.id}>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            scrollToService(category.id);
                                        }}
                                        className="hover:text-blue-400 transition-colors text-left w-full"
                                        style={{ background: 'none', border: 'none', padding: 0, margin: 0, cursor: 'pointer' }}
                                    >
                                        {category.title}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-slate-400 text-sm">
                            <li>
                                <a href="/about" className="hover:text-blue-400 transition-colors">About Us</a>
                            </li>
                            <li>
                                <a href="/contact" className="hover:text-blue-400 transition-colors">Contact</a>
                            </li>
                            <li>
                                <a href="#careers" className="hover:text-blue-400 transition-colors">Careers</a>
                            </li>
                            <li>
                                <a href="/privacy-policy" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="/terms-and-conditions" className="hover:text-blue-400 transition-colors">Terms and Condition</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Contact</h4>
                        <ul className="space-y-2 text-slate-400 text-sm">
                            <li>
                                <span className="flex items-center">
                                    <Phone className="w-4 h-4 mr-2" /> +91 98672 22166
                                </span>
                            </li>
                            <li>
                                <span className="flex items-center">
                                    <Mail className="w-4 h-4 mr-2" /> switchtolegal@gmail.com
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
    );
};

export default Footer;
