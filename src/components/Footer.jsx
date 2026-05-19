"use client";

import React from 'react';
import Link from 'next/link';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';
import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md';
import { IoTimeOutline } from 'react-icons/io5';
import { FaCar, FaShieldAlt, FaHeadset } from 'react-icons/fa';

const footerData = [
    {
        title: "Rentals",
        links: [
            { name: "All Cars", path: "/explore-cars" },
            { name: "Luxury Cars", path: "/luxury-cars" },
            { name: "Economy Cars", path: "/economy-cars" },
            { name: "SUVs & Crossovers", path: "/suvs" },
            { name: "Electric Vehicles", path: "/electric-cars" },
        ],
    },
    {
        title: "Company",
        links: [
            { name: "About Us", path: "/about" },
            { name: "How It Works", path: "/how-it-works" },
            { name: "Careers", path: "/careers" },
            { name: "Blog", path: "/blog" },
            { name: "Press", path: "/press" },
        ],
    },
    {
        title: "Support",
        links: [
            { name: "Help Center", path: "/help" },
            { name: "Contact Us", path: "/contact" },
            { name: "FAQ", path: "/faq" },
            { name: "Rental Terms", path: "/terms" },
            { name: "Insurance", path: "/insurance" },
        ],
    },
];

const socialLinks = [
    { icon: RiInstagramFill, href: "#", label: "Instagram" },
    { icon: FaFacebookSquare, href: "#", label: "Facebook" },
    { icon: FaXTwitter, href: "#", label: "Twitter" },
];

const legalLinks = [
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms of Service", path: "/terms-of-service" },
    { name: "Booking Policy", path: "/booking-policy" },
    { name: "Cancellation Policy", path: "/cancellation-policy" },
];

const features = [
    { icon: FaCar, text: "Wide Range" },
    { icon: FaShieldAlt, text: "Fully Insured" },
    { icon: FaHeadset, text: "24/7 Support" },
];

const Footer = () => {
    return (
        <footer className="w-full bg-gradient-to-br from-gray-950 via-gray-900 to-black border-t border-gray-800">
            {/* Main Content - Full Width Background */}
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">

                    {/* Brand + Info */}
                    <div className="lg:col-span-5 space-y-6">
                        <Link href="/" className="inline-block">
                            <h1 className="text-3xl sm:text-4xl font-bold tracking-tighter">
                                <span className="text-emerald-500">Drive</span>
                                <span className="text-amber-500">Fleet</span>
                            </h1>
                        </Link>

                        <p className="text-gray-400 text-sm sm:text-base max-w-md leading-relaxed">
                            Your trusted partner for premium car rentals. Experience freedom on the road with our diverse fleet.
                        </p>

                        {/* Features */}
                        <div className="grid grid-cols-3 gap-4">
                            {features.map((feature, i) => {
                                const Icon = feature.icon;
                                return (
                                    <div key={i} className="flex flex-col items-center sm:items-start gap-2">
                                        <div className="w-10 h-10 rounded-2xl bg-gray-800 flex items-center justify-center text-amber-400">
                                            <Icon size={20} />
                                        </div>
                                        <span className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">
                                            {feature.text}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Contact */}
                        <div className="space-y-4 text-sm text-gray-300">
                            <div className="flex gap-3">
                                <MdLocationOn className="text-amber-400 mt-1 flex-shrink-0" size={20} />
                                <span>123 Fleet Street, Downtown, Los Angeles, CA 90001</span>
                            </div>
                            <a href="mailto:support@drivefleet.com" className="flex gap-3 hover:text-amber-400 transition-colors">
                                <MdEmail className="text-amber-400 mt-1 flex-shrink-0" size={20} />
                                support@drivefleet.com
                            </a>
                            <a href="tel:+18885550123" className="flex gap-3 hover:text-amber-400 transition-colors">
                                <MdPhone className="text-amber-400 mt-1 flex-shrink-0" size={20} />
                                +1 (888) 555-0123
                            </a>
                            <div className="flex gap-3">
                                <IoTimeOutline className="text-amber-400 mt-1 flex-shrink-0" size={20} />
                                <span>24/7 Customer Support</span>
                            </div>
                        </div>
                    </div>

                    {/* Links Section */}
                    <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-10">
                        {footerData.map((section) => (
                            <div key={section.title}>
                                <h3 className="text-amber-400 font-semibold uppercase tracking-widest text-sm mb-4">
                                    {section.title}
                                </h3>
                                <ul className="space-y-2.5 text-sm">
                                    {section.links.map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                href={link.path}
                                                className="text-gray-400 hover:text-white transition-colors"
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Social & Newsletter */}
                    <div className="lg:col-span-3 space-y-7">
                        <div>
                            <h3 className="text-amber-400 font-semibold uppercase tracking-widest text-sm mb-4">
                                Follow Us
                            </h3>
                            <div className="flex gap-4">
                                {socialLinks.map((social, i) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={i}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 bg-gray-800 hover:bg-amber-500 text-white hover:text-black rounded-2xl flex items-center justify-center text-2xl transition-all duration-300 hover:scale-110"
                                        >
                                            <Icon />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div>
                            <h4 className="text-white font-semibold mb-2">Exclusive Deals</h4>
                            <p className="text-gray-400 text-sm mb-4">Subscribe to get special offers</p>
                            <div className="flex flex-col gap-3">
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="bg-gray-800 border border-gray-700 focus:border-amber-500 rounded-2xl px-5 py-3.5 outline-none text-sm transition-all"
                                />
                                <button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 font-semibold py-3.5 rounded-2xl transition-all active:scale-95">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar - Full Width */}
            <div className="border-t border-gray-800 bg-black/40">
                <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-gray-400">
                        <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
                            {legalLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.path}
                                    className="hover:text-amber-400 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        <p className="text-center md:text-right">
                            © {new Date().getFullYear()} DriveFleet. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;