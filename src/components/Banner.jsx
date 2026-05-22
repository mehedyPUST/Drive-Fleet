
'use client'

import React from 'react';
import Link from 'next/link';
import { Button } from '@heroui/react';
import { FaArrowRight } from 'react-icons/fa';

const Banner = () => {
    return (
        <section className="relative overflow-hidden bg-gray-50 dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">

            {/* Background shapes (neutral only) */}
            <div className="absolute -top-32 -right-32 w-[28rem] h-[28rem] bg-gray-200 dark:bg-gray-900 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-32 -left-32 w-[28rem] h-[28rem] bg-gray-200 dark:bg-gray-900 rounded-full blur-2xl"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">

                <div className="text-center max-w-3xl mx-auto space-y-7">

                    {/* Tag */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium shadow-sm">

                        <span className="w-2 h-2 rounded-full bg-green-600"></span>

                        <span>Welcome to DriveFleet</span>

                    </div>

                    {/* Title */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-black dark:text-white leading-tight">
                        Your Journey Starts Here
                    </h1>

                    {/* Accent line */}
                    <div className="w-24 h-1 bg-black dark:bg-white mx-auto rounded-full"></div>

                    {/* Description */}
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
                        Discover reliable cars for every trip. From economy to premium vehicles,
                        DriveFleet offers trusted rentals with flexible pricing and instant booking.
                    </p>

                    {/* CTA */}
                    <div className="pt-2">
                        <Link href="/explore-cars">
                            <Button
                                size="lg"
                                className="group bg-black hover:bg-gray-900 text-white font-semibold px-10 py-6 text-lg rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                                endContent={
                                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                }
                            >
                                Explore Cars
                            </Button>
                        </Link>
                    </div>

                    {/* Info chips */}
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-5 pt-10 text-sm">

                        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300">
                            <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                            No hidden fees
                        </div>

                        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300">
                            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                            Free cancellation
                        </div>

                        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300">
                            <span className="w-2 h-2 bg-gray-700 rounded-full"></span>
                            24/7 support
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Banner;
