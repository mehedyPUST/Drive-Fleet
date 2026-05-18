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
        id: 1,
        title: "Rentals",
        links: [
            { id: 1, name: "All Cars", path: "/explore-cars" },
            { id: 2, name: "Luxury Cars", path: "/luxury-cars" },
            { id: 3, name: "Economy Cars", path: "/economy-cars" },
            { id: 4, name: "SUVs & Crossovers", path: "/suvs" },
            { id: 5, name: "Electric Vehicles", path: "/electric-cars" },
        ],
    },
    {
        id: 2,
        title: "Company",
        links: [
            { id: 1, name: "About Us", path: "/about" },
            { id: 2, name: "How It Works", path: "/how-it-works" },
            { id: 3, name: "Careers", path: "/careers" },
            { id: 4, name: "Blog", path: "/blog" },
            { id: 5, name: "Press", path: "/press" },
        ],
    },
    {
        id: 3,
        title: "Support",
        links: [
            { id: 1, name: "Help Center", path: "/help" },
            { id: 2, name: "Contact Us", path: "/contact" },
            { id: 3, name: "FAQ", path: "/faq" },
            { id: 4, name: "Rental Terms", path: "/terms" },
            { id: 5, name: "Insurance", path: "/insurance" },
        ],
    },
];

const footerInfo = {
    brand: "DriveFleet",
    description: "Your trusted partner for premium car rentals. Experience freedom on the road with our diverse fleet of well-maintained vehicles at competitive prices.",
    address: "123 Fleet Street, Downtown, Los Angeles, CA 90001",
    email: "support@drivefleet.com",
    phone: "+1 (888) 555-0123",
    hours: "24/7 Customer Support Available",
};

const Footer = () => {
    const socialLinks = [
        { icon: RiInstagramFill, href: "https://instagram.com", label: "Instagram" },
        { icon: FaFacebookSquare, href: "https://facebook.com", label: "Facebook" },
        { icon: FaXTwitter, href: "https://twitter.com", label: "Twitter" },
    ];

    const legalLinks = [
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Terms of Service", path: "/terms-of-service" },
        { name: "Booking Policy", path: "/booking-policy" },
        { name: "Cancellation Policy", path: "/cancellation-policy" },
    ];

    const features = [
        { icon: FaCar, text: "Wide Range of Vehicles" },
        { icon: FaShieldAlt, text: "Full Insurance Coverage" },
        { icon: FaHeadset, text: "24/7 Roadside Assistance" },
    ];

    return (
        <footer className="bg-gradient-to-r from-gray-900 to-gray-800 py-12 mt-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
                {/* Brand & Contact Section */}
                <div className="md:col-span-4 space-y-4">
                    <Link href="/" className="inline-block hover:opacity-80 transition-opacity">
                        <h1 className='text-3xl md:text-4xl font-bold'>
                            <span className='text-green-500'>Drive</span>
                            <span className='text-amber-500'>Fleet</span>
                        </h1>
                    </Link>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                        {footerInfo.description}
                    </p>

                    {/* Key Features */}
                    <div className="space-y-2 pt-2">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div key={index} className="flex items-center gap-2">
                                    <Icon className="text-amber-400 text-sm" size={16} />
                                    <span className="text-gray-300 text-xs md:text-sm">{feature.text}</span>
                                </div>
                            );
                        })}
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-3 pt-2">
                        <div className="flex items-start gap-3">
                            <MdLocationOn className="text-amber-400 mt-0.5 flex-shrink-0" size={18} />
                            <span className="text-gray-300 text-sm">{footerInfo.address}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <MdEmail className="text-amber-400 flex-shrink-0" size={18} />
                            <a href={`mailto:${footerInfo.email}`} className="text-gray-300 hover:text-amber-400 text-sm transition-colors">
                                {footerInfo.email}
                            </a>
                        </div>
                        <div className="flex items-center gap-3">
                            <MdPhone className="text-amber-400 shrink-0" size={18} />
                            <a href={`tel:${footerInfo.phone}`} className="text-gray-300 hover:text-amber-400 text-sm transition-colors">
                                {footerInfo.phone}
                            </a>
                        </div>
                        <div className="flex items-center gap-3">
                            <IoTimeOutline className="text-amber-400 shrink-0" size={18} />
                            <span className="text-gray-300 text-sm">{footerInfo.hours}</span>
                        </div>
                    </div>
                </div>

                {/* Links Section */}
                <div className="md:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8">
                    {footerData.map((item) => (
                        <div key={item.id}>
                            <h3 className="text-sm md:text-base font-semibold text-amber-400 mb-3 uppercase tracking-wider">
                                {item.title}
                            </h3>
                            <ul className="space-y-2">
                                {item.links.map((link) => (
                                    <li key={link.id}>
                                        <Link
                                            href={link.path}
                                            className="text-gray-400 hover:text-amber-400 transition-colors text-sm md:text-base"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Social & Newsletter Section */}
                <div className="md:col-span-3 space-y-4">
                    <h3 className="text-sm md:text-base font-semibold text-amber-400 mb-3 uppercase tracking-wider">
                        Follow Us
                    </h3>
                    <div className="flex items-center gap-3">
                        {socialLinks.map((social, index) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="bg-gray-800 text-amber-400 rounded-lg p-2.5 hover:bg-amber-500 hover:text-white transition-all duration-200 hover:scale-105"
                                >
                                    <Icon size={20} />
                                </a>
                            );
                        })}
                    </div>

                    {/* Newsletter Signup */}
                    <div className="pt-4">
                        <h4 className="text-white text-sm font-semibold mb-2">Exclusive Deals & Offers</h4>
                        <p className="text-gray-400 text-xs mb-3">Subscribe to get special discounts and updates!</p>
                        <div className="flex flex-col sm:flex-row gap-2">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors"
                            />
                            <button className="px-4 py-2 bg-gradient-to-r from-amber-600 to-orange-500 text-white rounded-lg text-sm font-semibold hover:from-amber-700 hover:to-orange-600 transition-all whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                    </div>

                    {/* Trust Badge */}
                    <div className="pt-2">
                        <p className="text-gray-400 text-xs text-center">
                            🔒 Secure Booking | Best Price Guarantee
                        </p>
                    </div>
                </div>
            </div>

            {/* Legal Links & Copyright Section */}
            <div className="border-t border-gray-800 mt-8 pt-6">
                <div className="px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        {/* Legal Links */}
                        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                            {legalLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.path}
                                    className="text-gray-400 hover:text-amber-400 text-xs md:text-sm transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Copyright */}
                        <p className="text-gray-400 text-xs md:text-sm text-center">
                            &copy; {new Date().getFullYear()} {footerInfo.brand}. All rights reserved.
                            Drive safe, drive with us.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;