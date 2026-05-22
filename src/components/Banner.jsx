// 'use client'

// import React from 'react';
// import Link from 'next/link';
// import { Button } from '@heroui/react';
// import { FaArrowRight } from 'react-icons/fa';

// const Banner = () => {
//     return (
//         <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
//             {/* Abstract Shapes */}
//             <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-400/20 to-amber-400/20 rounded-full blur-3xl"></div>
//             <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-amber-400/20 to-green-400/20 rounded-full blur-3xl"></div>

//             <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
//                 <div className="text-center max-w-4xl mx-auto space-y-6">
//                     {/* Tagline */}
//                     <div className="inline-block">
//                         <span className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900/30 px-4 py-1.5 text-sm font-semibold text-green-600 dark:text-green-400">
//                             Welcome to DriveFleet
//                         </span>
//                     </div>

//                     {/* Title */}
//                     <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
//                         <span className="text-gray-900 dark:text-white">Your Journey Starts </span>
//                         <span className="bg-gradient-to-r from-green-500 to-amber-500 bg-clip-text text-transparent">
//                             Here
//                         </span>
//                     </h1>

//                     {/* Description */}
//                     <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//                         Discover the perfect ride for every adventure. From luxury sedans to powerful SUVs,
//                         DriveFleet offers quality cars with flexible rental options.
//                     </p>

//                     {/* CTA Button */}
//                     <div className="pt-4">
//                         <Link href="/explore-cars">
//                             <Button


//                                 size="lg"
//                                 className="bg-gradient-to-r from-green-500 to-amber-500 text-white font-semibold px-8 py-6 text-lg hover:from-green-600 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl"
//                                 endContent={<FaArrowRight className="group-hover:translate-x-1 transition-transform" />}
//                             >
//                                 Explore Cars
//                             </Button>

//                         </Link>
//                     </div>

//                     {/* Quick Info */}
//                     <div className="flex flex-wrap justify-center gap-6 pt-8 text-sm text-gray-500 dark:text-gray-400">
//                         <div className="flex items-center gap-2">
//                             <div className="w-2 h-2 bg-green-500 rounded-full"></div>
//                             <span>No hidden fees</span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                             <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
//                             <span>Free cancellation</span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                             <div className="w-2 h-2 bg-green-500 rounded-full"></div>
//                             <span>24/7 support</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Banner;


'use client'

import React from 'react';
import Link from 'next/link';
import { Button } from '@heroui/react';
import { FaArrowRight } from 'react-icons/fa';

const Banner = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800">

            {/* Glow Blobs */}
            <div className="absolute -top-32 -right-32 w-[28rem] h-[28rem] bg-green-400/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-32 -left-32 w-[28rem] h-[28rem] bg-amber-400/20 rounded-full blur-3xl"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">

                <div className="text-center max-w-3xl mx-auto space-y-8">

                    {/* Tag */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-100/70 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Welcome to DriveFleet
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
                        <span className="text-gray-900 dark:text-white">
                            Your Journey Starts
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-amber-500 bg-clip-text text-transparent">
                            Here
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
                        Discover the perfect ride for every adventure. From luxury sedans to powerful SUVs,
                        DriveFleet offers quality cars with flexible rental options.
                    </p>

                    {/* CTA */}
                    <div className="pt-2">
                        <Link href="/explore-cars">
                            <Button
                                size="lg"
                                className="group relative overflow-hidden bg-gradient-to-r from-green-500 to-amber-500 text-white font-semibold px-10 py-6 text-lg rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.03]"
                                endContent={
                                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                }
                            >
                                Explore Cars
                            </Button>
                        </Link>
                    </div>

                    {/* Info */}
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 pt-10 text-sm text-gray-500 dark:text-gray-400">

                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 dark:bg-gray-800/40 shadow-sm">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            No hidden fees
                        </div>

                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 dark:bg-gray-800/40 shadow-sm">
                            <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                            Free cancellation
                        </div>

                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 dark:bg-gray-800/40 shadow-sm">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            24/7 support
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Banner;
