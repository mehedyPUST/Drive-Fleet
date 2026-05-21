
// 'use client'
// import { authClient } from '@/lib/auth-client';
// import Link from 'next/link';
// import React from 'react';
// import { UserDropDown } from './UserDropDown';

// const Navbar = () => {

//     const { data: session } = authClient.useSession()
//     const user = session?.user

//     return (
//         <nav className='w-full mx-auto flex justify-between items-center p-5 sticky top-0 shadow-md bg-white z-50'>

//             <h1 className='text-4xl font-bold'>
//                 <span className='text-green-500'>Drive</span>
//                 <span className='text-amber-500'>Fleet</span>
//             </h1>

//             <ul className='flex gap-6'>
//                 <li>
//                     <Link href={"/"} className="hover:text-amber-500 transition">Home</Link>
//                 </li>
//                 <li>
//                     <Link href={"/explore-cars"} className="hover:text-amber-500 transition">Explore Cars</Link>
//                 </li>
//                 <li>
//                     <Link href={"/add-car"} className="hover:text-amber-500 transition">Add Car</Link>
//                 </li>
//                 <li>
//                     <Link href={"/my-bookings"} className="hover:text-amber-500 transition">My Bookings</Link>
//                 </li>
//             </ul>

//             <div>
//                 {user ? (
//                     <UserDropDown user={user} />
//                 ) : (
//                     <ul className='flex gap-3'>
//                         <li>
//                             <Link href={"/login"} className="hover:text-amber-500 transition">Login</Link>
//                         </li>
//                         <li>
//                             <Link href={"/register"} className="hover:text-amber-500 transition">Register</Link>
//                         </li>
//                     </ul>
//                 )}
//             </div>
//         </nav>
//     );
// };

// export default Navbar;


'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { UserDropDown } from './UserDropDown';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {

    const { data: session } = authClient.useSession()
    const user = session?.user
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <nav className='w-full mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4 sticky top-0 shadow-md bg-white z-50'>
            {/* Logo Section */}
            <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold'>
                <span className='text-green-500'>Drive</span>
                <span className='text-amber-500'>Fleet</span>
            </h1>

            {/* Desktop Menu - Hidden on mobile, visible on medium screens and up */}
            <ul className='hidden md:flex gap-6 lg:gap-8'>
                <li>
                    <Link href={"/"} className="hover:text-amber-500 transition duration-300 font-medium">Home</Link>
                </li>
                <li>
                    <Link href={"/explore-cars"} className="hover:text-amber-500 transition duration-300 font-medium">Explore Cars</Link>
                </li>
                <li>
                    <Link href={"/add-car"} className="hover:text-amber-500 transition duration-300 font-medium">Add Car</Link>
                </li>
                <li>
                    <Link href={"/my-bookings"} className="hover:text-amber-500 transition duration-300 font-medium">My Bookings</Link>
                </li>
            </ul>

            {/* Desktop Auth Section - Hidden on mobile */}
            <div className='hidden md:block'>
                {user ? (
                    <UserDropDown user={user} />
                ) : (
                    <ul className='flex gap-3'>
                        <li>
                            <Link href={"/login"} className="hover:text-amber-500 transition duration-300 font-medium px-3 py-2 rounded-lg hover:bg-amber-50">Login</Link>
                        </li>
                        <li>
                            <Link href={"/register"} className="hover:text-amber-500 transition duration-300 font-medium px-3 py-2 rounded-lg hover:bg-amber-50">Register</Link>
                        </li>
                    </ul>
                )}
            </div>

            {/* Mobile Menu Button - Visible only on mobile */}
            <button 
                onClick={toggleMenu}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition duration-300 focus:outline-none"
                aria-label="Toggle menu"
            >
                {isMenuOpen ? (
                    <FaTimes className="text-2xl text-gray-600" />
                ) : (
                    <FaBars className="text-2xl text-gray-600" />
                )}
            </button>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={closeMenu}></div>
            )}

            {/* Mobile Menu - Slides in from right */}
            <div className={`
                fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden
                ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
            `}>
                <div className="flex justify-end p-4">
                    <button 
                        onClick={toggleMenu}
                        className="p-2 rounded-lg hover:bg-gray-100 transition duration-300"
                    >
                        <FaTimes className="text-2xl text-gray-600" />
                    </button>
                </div>
                
                {/* Mobile Navigation Links */}
                <ul className='flex flex-col gap-4 px-6'>
                    <li>
                        <Link 
                            href={"/"} 
                            onClick={closeMenu}
                            className="block py-2 hover:text-amber-500 transition duration-300 font-medium text-lg"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href={"/explore-cars"} 
                            onClick={closeMenu}
                            className="block py-2 hover:text-amber-500 transition duration-300 font-medium text-lg"
                        >
                            Explore Cars
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href={"/add-car"} 
                            onClick={closeMenu}
                            className="block py-2 hover:text-amber-500 transition duration-300 font-medium text-lg"
                        >
                            Add Car
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href={"/my-bookings"} 
                            onClick={closeMenu}
                            className="block py-2 hover:text-amber-500 transition duration-300 font-medium text-lg"
                        >
                            My Bookings
                        </Link>
                    </li>
                </ul>

                {/* Mobile Auth Section */}
                <div className='px-6 mt-6 pt-6 border-t border-gray-200'>
                    {user ? (
                        <UserDropDown user={user} />
                    ) : (
                        <div className='flex flex-col gap-3'>
                            <Link 
                                href={"/login"} 
                                onClick={closeMenu}
                                className="block text-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300 font-medium"
                            >
                                Login
                            </Link>
                            <Link 
                                href={"/register"} 
                                onClick={closeMenu}
                                className="block text-center px-4 py-2 border-2 border-amber-500 text-amber-500 rounded-lg hover:bg-amber-50 transition duration-300 font-medium"
                            >
                                Register
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
