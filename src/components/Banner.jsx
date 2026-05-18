'use client'

import React from 'react';
import Link from 'next/link';
import { Button } from '@heroui/react';
import { FaArrowRight } from 'react-icons/fa';

const Banner = () => {
    return (
        <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
            {/* Abstract Shapes */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-400/20 to-amber-400/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-amber-400/20 to-green-400/20 rounded-full blur-3xl"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="text-center max-w-4xl mx-auto space-y-6">
                    {/* Tagline */}
                    <div className="inline-block">
                        <span className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900/30 px-4 py-1.5 text-sm font-semibold text-green-600 dark:text-green-400">
                            Welcome to DriveFleet
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                        <span className="text-gray-900 dark:text-white">Your Journey Starts </span>
                        <span className="bg-gradient-to-r from-green-500 to-amber-500 bg-clip-text text-transparent">
                            Here
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Discover the perfect ride for every adventure. From luxury sedans to powerful SUVs,
                        DriveFleet offers quality cars with flexible rental options.
                    </p>

                    {/* CTA Button */}
                    <div className="pt-4">
                        <Button
                            as={Link}
                            href="/explore-cars"
                            size="lg"
                            className="bg-gradient-to-r from-green-500 to-amber-500 text-white font-semibold px-8 py-6 text-lg hover:from-green-600 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                            endContent={<FaArrowRight className="group-hover:translate-x-1 transition-transform" />}
                        >
                            Explore Our Fleet
                        </Button>
                    </div>

                    {/* Quick Info */}
                    <div className="flex flex-wrap justify-center gap-6 pt-8 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span>No hidden fees</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                            <span>Free cancellation</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span>24/7 support</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;