
import React from 'react';
import { FaSearch, FaCalendarCheck, FaCar, FaCreditCard } from 'react-icons/fa';

const HowItWorks = () => {
    const steps = [
        {
            icon: <FaSearch className="text-3xl" />,
            title: "Search Cars",
            description: "Browse through our wide range of cars. Filter by type, price, or location to find your perfect match.",
            color: "from-blue-500 to-blue-600"
        },
        {
            icon: <FaCalendarCheck className="text-3xl" />,
            title: "Choose & Book",
            description: "Select your preferred dates, choose add-ons, and confirm your booking in just a few clicks.",
            color: "from-green-500 to-emerald-600"
        },
        {
            icon: <FaCar className="text-3xl" />,
            title: "Pick Up & Drive",
            description: "Visit our pickup location, show your booking details, and drive away in your chosen car.",
            color: "from-amber-500 to-orange-600"
        },
        {
            icon: <FaCreditCard className="text-3xl" />,
            title: "Easy Payment",
            description: "Secure online payment options. No hidden charges, transparent pricing guaranteed.",
            color: "from-purple-500 to-pink-600"
        }
    ];

    return (
        <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        How <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-amber-500">DriveFleet</span> Works
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
                        Renting a car has never been easier. Follow these simple steps and you'll be on the road in no time.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {steps.map((step, index) => (
                        <div 
                            key={index}
                            className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                        >
                            {/* Step Number */}
                            <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-amber-500 text-white flex items-center justify-center font-bold text-lg shadow-lg">
                                {index + 1}
                            </div>

                            {/* Icon */}
                            <div className={`mb-5 inline-flex p-4 rounded-xl bg-gradient-to-r ${step.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                {step.icon}
                            </div>

                            {/* Title & Description */}
                            <h3 className="text-xl font-bold text-gray-800 mb-2">
                                {step.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;