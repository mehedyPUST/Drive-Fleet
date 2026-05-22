


import { Button, Card, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaUsers, FaDollarSign, FaBookmark } from 'react-icons/fa';
import { TbListDetails } from 'react-icons/tb';

const CarCard = ({ car }) => {
    const { _id, carName, imageUrl, availabilityStatus, seatCapacity, dailyRentPrice, booking_count } = car;

    const getStatusColor = () => {
        switch (availabilityStatus?.toLowerCase()) {
            case 'available': return 'success';
            case 'booked': return 'danger';
            case 'maintenance': return 'warning';
            default: return 'default';
        }
    };

    return (
        <div className="group">

            <Card className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 bg-white">

                {/* Image */}
                <div className="relative h-52 overflow-hidden bg-gray-100">

                    <Image
                        alt={carName}
                        src={imageUrl}
                        width={350}
                        height={300}
                        loading="eager"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Price */}
                    <div className="absolute top-3 right-3 bg-white/95 border border-gray-200 text-gray-900 px-3 py-1.5 rounded-xl shadow-sm">
                        <div className="flex items-center gap-1">
                            <FaDollarSign size={14} className="text-green-600" />
                            <span className="text-lg font-bold">{dailyRentPrice}</span>
                            <span className="text-xs text-gray-500">/day</span>
                        </div>
                    </div>

                    {/* Status */}
                    <div className="absolute top-3 left-3">
                        <Chip
                            color={getStatusColor()}
                            variant="flat"
                            className="capitalize font-medium"
                            size="sm"
                        >
                            {availabilityStatus}
                        </Chip>
                    </div>

                    {/* Booking Count (NEW) */}
                    <div className="absolute bottom-3 left-3 bg-black/80 text-white px-3 py-1 rounded-lg text-xs flex items-center gap-1">
                        <FaBookmark className="text-yellow-400" />
                        {booking_count || 0} bookings
                    </div>

                </div>

                {/* Content */}
                <div className="p-5 space-y-4">

                    {/* Title */}
                    <h3 className="text-lg font-bold text-black">
                        {carName}
                    </h3>

                    {/* Info */}
                    <div className="flex items-center gap-3 text-gray-600 text-sm">

                        <div className="flex items-center gap-1.5">
                            <FaUsers size={14} className="text-orange-500" />
                            <span>{seatCapacity} seats</span>
                        </div>

                    </div>

                    {/* Button */}
                    <Link href={`/explore-cars/${_id}`}>

                        <Button
                            className="w-full bg-black hover:bg-gray-900 text-white font-medium rounded-xl transition-all duration-300"
                            size="lg"
                            variant="solid"
                            endContent={<TbListDetails />}
                        >
                            View Details
                        </Button>

                    </Link>

                </div>

            </Card>

        </div>
    );
};

export default CarCard;
