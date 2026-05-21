import React from 'react';
import { 
    FaShieldAlt, 
    FaHeadset, 
    FaMoneyBillWave, 
    FaRoad, 
    FaClock, 
    FaStar 
} from 'react-icons/fa';

const WhyChooseUs = () => {
    const features = [
        {
            icon: <FaShieldAlt className="text-3xl" />,
            title: "Fully Insured",
            description: "All our cars come with comprehensive insurance coverage for your peace of mind.",
            color: "text-blue-500"
        },
        {
            icon: <FaMoneyBillWave className="text-3xl" />,
            title: "Best Price Guarantee",
            description: "We offer competitive rates with no hidden fees. Find a lower price? We'll match it!",
            color: "text-green-500"
        },
        {
            icon: <FaHeadset className="text-3xl" />,
            title: "24/7 Customer Support",
            description: "Our dedicated support team is always available to assist you anytime, anywhere.",
            color: "text-amber-500"
        },
        {
            icon: <FaRoad className="text-3xl" />,
            title: "Free Cancellation",
            description: "Change of plans? Cancel your booking for free up to 24 hours before pickup.",
            color: "text-purple-500"
        },
        {
            icon: <FaClock className="text-3xl" />,
            title: "Flexible Pickup Times",
            description: "Choose pickup and drop-off times that work best for your schedule.",
            color: "text-red-500"
        },
        {
            icon: <FaStar className="text-3xl" />,
            title: "Top Rated Service",
            description: "Thousands of satisfied customers trust us for their car rental needs.",
            color: "text-yellow-500"
        }
    ];

    return (
        <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-amber-400">DriveFleet</span>?
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
                        We're committed to providing the best car rental experience with exceptional service and value.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {features.map((feature, index) => (
                        <div 
                            key={index}
                            className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 border border-white/20"
                        >
                            {/* Icon */}
                            <div className={`${feature.color} mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                                {feature.icon}
                            </div>

                            {/* Title & Description */}
                            <h3 className="text-xl font-bold mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="mt-16 pt-8 border-t border-white/20">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div>
                            <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-amber-400">
                                500+
                            </div>
                            <p className="text-gray-300 text-sm mt-1">Happy Customers</p>
                        </div>
                        <div>
                            <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-amber-400">
                                50+
                            </div>
                            <p className="text-gray-300 text-sm mt-1">Car Models</p>
                        </div>
                        <div>
                            <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-amber-400">
                                24/7
                            </div>
                            <p className="text-gray-300 text-sm mt-1">Support Available</p>
                        </div>
                        <div>
                            <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-amber-400">
                                100%
                            </div>
                            <p className="text-gray-300 text-sm mt-1">Satisfaction Rate</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;