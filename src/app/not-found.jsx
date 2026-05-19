import Link from "next/link";
import { GiSunglasses } from "react-icons/gi";

const NotFound = () => {
    return (
        <div className="bg-gradient-to-r from-amber-50 via-white to-amber-50 min-h-screen py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                        <GiSunglasses />
                        <span>Oops!</span>
                    </div>

                    {/* 404 Title */}
                    <h1 className="text-8xl md:text-9xl font-extrabold bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent tracking-tight">
                        404
                    </h1>

                    {/* Underline */}
                    <div className="mt-4 w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-500 rounded-full" />

                    {/* Message */}
                    <p className="mt-6 text-2xl md:text-3xl font-bold text-gray-800">
                        Page Not Found
                    </p>

                    <p className="mt-3 text-gray-500 max-w-md">
                        The page you're looking for doesn't exist or has been moved.
                    </p>

                    {/* Back to Home Button */}
                    <Link
                        href="/"
                        className="mt-8 inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-amber-600 to-orange-500 rounded-lg hover:from-amber-700 hover:to-orange-600 transition-all duration-300 hover:scale-105 shadow-md focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
                    >
                        ← Back to Home
                    </Link>

                    {/* Helpful Links */}
                    <div className="mt-12 pt-6 border-t border-amber-100">
                        <p className="text-sm text-gray-400 mb-3">Looking for something?</p>
                        <div className="flex flex-wrap gap-3 justify-center">
                            <Link href="/" className="text-amber-600 hover:text-amber-700 text-sm transition-colors">
                                Home
                            </Link>
                            <span className="text-gray-300">•</span>
                            <Link href="/all-products" className="text-amber-600 hover:text-amber-700 text-sm transition-colors">
                                All Products
                            </Link>
                            <span className="text-gray-300">•</span>
                            <Link href="/contact" className="text-amber-600 hover:text-amber-700 text-sm transition-colors">
                                Contact Support
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;