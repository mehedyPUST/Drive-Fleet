import Image from "next/image";
import { FaCarSide, FaMapMarkerAlt, FaUsers, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { Button } from "@heroui/react";

const CarDetailsPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch(`http://localhost:5000/cars/${id}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        return <div className="text-center py-20 text-xl">Car not found</div>;
    }

    const car = await res.json();

    const statusConfig = {
        available: {
            label: "Available",
            bg: "bg-emerald-100",
            text: "text-emerald-700",
            dot: "bg-emerald-500"
        },
        booked: {
            label: "Booked",
            bg: "bg-rose-100",
            text: "text-rose-700",
            dot: "bg-rose-500"
        },
        maintenance: {
            label: "Under Maintenance",
            bg: "bg-amber-100",
            text: "text-amber-700",
            dot: "bg-amber-500"
        },
    };

    const currentStatus = statusConfig[car.availabilityStatus.toLowerCase()] || {
        label: car.availabilityStatus,
        bg: "bg-gray-100",
        text: "text-gray-700",
        dot: "bg-gray-500"
    };

    return (
        <div className="min-h-screen bg-zinc-50">
            {/* Back Navigation */}
            <div className="max-w-6xl mx-auto px-6 pt-8">
                <Link
                    href="/explore-cars"
                    className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-900 transition-colors group"
                >
                    <FaArrowLeft className="group-hover:-translate-x-0.5 transition-transform" size={16} />
                    <span className="text-sm font-medium">Back to Fleet</span>
                </Link>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-10 lg:py-16">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                    {/* Image Section */}
                    <div className="relative rounded-3xl overflow-hidden bg-zinc-100 shadow-xl aspect-[16/11] lg:sticky lg:top-8">
                        <Image
                            src={car.imageUrl}
                            alt={car.carName}
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>

                    {/* Details Section */}
                    <div className="space-y-8">
                        {/* Header */}
                        <div>
                            <div className="flex items-center justify-between mb-3">
                                <span className="uppercase tracking-[2px] text-xs font-medium text-zinc-500">
                                    {car.carType}
                                </span>

                                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${currentStatus.bg}`}>
                                    <div className={`w-2 h-2 rounded-full ${currentStatus.dot}`} />
                                    <span className={`text-xs font-semibold ${currentStatus.text}`}>
                                        {currentStatus.label}
                                    </span>
                                </div>
                            </div>

                            <h1 className="text-4xl lg:text-5xl font-semibold text-zinc-900 tracking-tight">
                                {car.carName}
                            </h1>
                        </div>

                        {/* Price */}
                        <div className="border-t border-b border-zinc-100 py-6">
                            <div className="flex items-baseline gap-1">
                                <span className="text-5xl font-semibold text-zinc-900">
                                    ${car.dailyRentPrice}
                                </span>
                                <span className="text-zinc-500 text-lg">/ day</span>
                            </div>
                        </div>

                        {/* Specifications */}
                        <div className="grid grid-cols-3 gap-6">
                            <div className="space-y-1">
                                <FaCarSide className="text-zinc-400 text-xl" />
                                <p className="text-sm text-zinc-500">Type</p>
                                <p className="font-medium text-zinc-900">{car.carType}</p>
                            </div>
                            <div className="space-y-1">
                                <FaUsers className="text-zinc-400 text-xl" />
                                <p className="text-sm text-zinc-500">Capacity</p>
                                <p className="font-medium text-zinc-900">{car.seatCapacity} Seats</p>
                            </div>
                            <div className="space-y-1">
                                <FaMapMarkerAlt className="text-zinc-400 text-xl" />
                                <p className="text-sm text-zinc-500">Location</p>
                                <p className="font-medium text-zinc-900">{car.pickupLocation}</p>
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <h3 className="text-zinc-900 font-medium mb-3">Description</h3>
                            <p className="text-zinc-600 leading-relaxed">
                                {car.description}
                            </p>
                        </div>

                        {/* Book Button */}
                        <Button
                            className="w-full bg-zinc-900 hover:bg-black text-white rounded-2xl py-7 text-base font-semibold transition-all active:scale-[0.985]"
                            size="lg"
                            isDisabled={car.availabilityStatus !== "Available"}
                        >
                            {car.availabilityStatus === "Available"
                                ? "Book This Car"
                                : "Currently Unavailable"}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarDetailsPage;