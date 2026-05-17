"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    FaCar,
    FaHome,
    FaSearch,
    FaPlusCircle,
    FaBookmark,
    FaUser,
    FaSignInAlt,
    FaSignOutAlt,
    FaChevronDown,
    FaUserPlus,
    FaCarSide,
    FaListAlt,
    FaTimes,
    FaBars
} from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Mock authentication state - replace with your actual auth logic
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({
        name: "John Doe",
        email: "john@example.com",
        avatar: "https://ui-avatars.com/api/?name=John+Doe&background=e94560&color=fff"
    });

    const handleLogin = () => {
        // Add your login logic here
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        // Add your logout logic here
        setIsLoggedIn(false);
        setIsDropdownOpen(false);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <FaCar className="text-red-500 text-2xl group-hover:scale-110 transition-transform" />
                        <h1 className="text-xl font-bold">
                            Drive<span className="text-red-500">Fleet</span>
                        </h1>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Link
                            href="/"
                            className="flex items-center gap-2 hover:text-red-500 transition-colors"
                        >
                            <FaHome /> Home
                        </Link>
                        <Link
                            href="/explore-cars"
                            className="flex items-center gap-2 hover:text-red-500 transition-colors"
                        >
                            <FaSearch /> Explore Cars
                        </Link>

                        {isLoggedIn ? (
                            <>
                                <Link
                                    href="/add-car"
                                    className="flex items-center gap-2 hover:text-red-500 transition-colors"
                                >
                                    <FaPlusCircle /> Add Car
                                </Link>
                                <Link
                                    href="/my-bookings"
                                    className="flex items-center gap-2 hover:text-red-500 transition-colors"
                                >
                                    <FaBookmark /> My Bookings
                                </Link>

                                {/* Profile Dropdown */}
                                <div className="relative">
                                    <button
                                        onClick={toggleDropdown}
                                        className="flex items-center gap-2 hover:text-red-500 transition-colors focus:outline-none"
                                    >
                                        <img
                                            src={user.avatar}
                                            alt={user.name}
                                            className="w-8 h-8 rounded-full object-cover"
                                        />
                                        <span className="text-sm">{user.name.split(' ')[0]}</span>
                                        <FaChevronDown className={`text-xs transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                    </button>

                                    {isDropdownOpen && (
                                        <>
                                            <div
                                                className="fixed inset-0 z-40"
                                                onClick={() => setIsDropdownOpen(false)}
                                            ></div>
                                            <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl z-50 text-gray-800">
                                                <div className="p-4 border-b">
                                                    <p className="font-semibold">{user.name}</p>
                                                    <p className="text-sm text-gray-500">{user.email}</p>
                                                </div>
                                                <div className="py-2">
                                                    <Link
                                                        href="/add-car"
                                                        className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 transition-colors"
                                                        onClick={() => setIsDropdownOpen(false)}
                                                    >
                                                        <FaPlusCircle className="text-red-500" />
                                                        <span>Add Car</span>
                                                    </Link>
                                                    <Link
                                                        href="/my-bookings"
                                                        className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 transition-colors"
                                                        onClick={() => setIsDropdownOpen(false)}
                                                    >
                                                        <FaBookmark className="text-red-500" />
                                                        <span>My Bookings</span>
                                                    </Link>
                                                    <Link
                                                        href="/my-added-cars"
                                                        className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 transition-colors"
                                                        onClick={() => setIsDropdownOpen(false)}
                                                    >
                                                        <FaCarSide className="text-red-500" />
                                                        <span>My Added Cars</span>
                                                    </Link>
                                                    <hr className="my-1" />
                                                    <button
                                                        onClick={handleLogout}
                                                        className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 transition-colors w-full text-left"
                                                    >
                                                        <FaSignOutAlt className="text-red-500" />
                                                        <span>Logout</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </>
                        ) : (
                            <div className="flex items-center gap-3">
                                <Link
                                    href="/login"
                                    className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-full transition-all hover:scale-105"
                                >
                                    <FaSignInAlt /> Login
                                </Link>
                                <Link
                                    href="/register"
                                    className="flex items-center gap-2 border border-red-500 hover:bg-red-500 px-4 py-2 rounded-full transition-all"
                                >
                                    <FaUserPlus /> Register
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-white focus:outline-none"
                    >
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                        }`}
                >
                    <div className="flex flex-col space-y-4 pb-6">
                        <Link
                            href="/"
                            className="flex items-center gap-2 hover:text-red-500 transition-colors py-2"
                            onClick={toggleMenu}
                        >
                            <FaHome /> Home
                        </Link>
                        <Link
                            href="/explore-cars"
                            className="flex items-center gap-2 hover:text-red-500 transition-colors py-2"
                            onClick={toggleMenu}
                        >
                            <FaSearch /> Explore Cars
                        </Link>

                        {isLoggedIn ? (
                            <>
                                <Link
                                    href="/add-car"
                                    className="flex items-center gap-2 hover:text-red-500 transition-colors py-2"
                                    onClick={toggleMenu}
                                >
                                    <FaPlusCircle /> Add Car
                                </Link>
                                <Link
                                    href="/my-bookings"
                                    className="flex items-center gap-2 hover:text-red-500 transition-colors py-2"
                                    onClick={toggleMenu}
                                >
                                    <FaBookmark /> My Bookings
                                </Link>
                                <Link
                                    href="/my-added-cars"
                                    className="flex items-center gap-2 hover:text-red-500 transition-colors py-2"
                                    onClick={toggleMenu}
                                >
                                    <FaCarSide /> My Added Cars
                                </Link>
                                <hr className="border-gray-700" />
                                <button
                                    onClick={() => {
                                        handleLogout();
                                        toggleMenu();
                                    }}
                                    className="flex items-center gap-2 hover:text-red-500 transition-colors py-2"
                                >
                                    <FaSignOutAlt /> Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link
                                    href="/login"
                                    className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-full transition-all justify-center"
                                    onClick={toggleMenu}
                                >
                                    <FaSignInAlt /> Login
                                </Link>
                                <Link
                                    href="/register"
                                    className="flex items-center gap-2 border border-red-500 hover:bg-red-500 px-4 py-2 rounded-full transition-all justify-center"
                                    onClick={toggleMenu}
                                >
                                    <FaUserPlus /> Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;