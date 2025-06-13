import React from 'react';
import { Link } from 'react-router-dom';
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

const Footer = () => {
    return (
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
                            <li>
                                <button className="hover:text-blue-400 transition-colors">
                                    ITR Filing
                                </button>
                            </li>
                            <li>
                                <button className="hover:text-blue-400 transition-colors">
                                    GST Registration
                                </button>
                            </li>
                            <li>
                                <Link to="/dsc-inquiry" className="hover:text-blue-400 transition-colors">
                                    DSC
                                </Link>
                            </li>
                            <li>
                                <button className="hover:text-blue-400 transition-colors">
                                    Company Registration
                                </button>
                            </li>
                            <li>
                                <button className="hover:text-blue-400 transition-colors">
                                    Trademark
                                </button>
                            </li>
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
    );
};

export default Footer;
