
import { BookingCancelAlert } from "@/components/BookingCancelAlert";
import { auth } from "@/lib/auth";
import { FaCar, FaCalendarAlt, FaUser, FaIdCard } from "react-icons/fa";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

const MyBookingsPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const { token } = await auth.api.getToken({
        headers: await headers(),
    });

    const user = session?.user;
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user.id}`, {
        headers: {
            authorization: `Bearer ${token}`
        },
        cache: 'no-store'
    })
    const bookings = await res.json();

    if (!bookings || bookings.length === 0) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
                <div className="text-center">
                    <div className="text-6xl mb-4">🚗</div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-2">No Bookings Yet</h2>
                    <p className="text-gray-500 mb-6">You haven't made any car bookings yet.</p>
                    <Link 
                        href="/explore-cars" 
                        className="inline-block px-6 py-3 bg-gradient-to-r from-green-500 to-amber-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-medium"
                    >
                        Explore Cars
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 sm:py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="mb-8 sm:mb-12">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 flex items-center gap-3">
                        <span className="w-1 h-8 sm:h-10 bg-gradient-to-b from-green-500 to-amber-500 rounded-full"></span>
                        My Bookings
                    </h1>
                    <p className="text-gray-500 mt-2 text-sm sm:text-base">
                        You have <span className="font-bold text-green-600">{bookings.length}</span> {bookings.length === 1 ? 'booking' : 'bookings'} in total
                    </p>
                </div>

                {/* Bookings Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
                    {bookings.map((booking) => (
                        <div 
                            key={booking._id} 
                            className="group bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200"
                        >
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 p-4 sm:p-5">
                                {/* Car Image Section */}
                                <div className="relative w-full sm:w-48 lg:w-56 h-48 sm:h-40 lg:h-48 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                                    <Image
                                        src={booking.carImage}
                                        alt={booking.carName}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 200px, 224px"
                                    />
                                </div>

                                {/* Booking Details Section */}
                                <div className="flex-1 space-y-3">
                                    <div>
                                        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1 line-clamp-1">
                                            {booking.carName}
                                        </h1>
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <FaIdCard className="text-gray-400 text-xs" />
                                            <p className="font-mono text-xs">ID: {booking._id}</p>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        {/* Rental Price */}
                                        <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                                            <span className="text-gray-600 font-medium">Total Price:</span>
                                            <p className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-amber-600">
                                                ${booking.rentalPrice}
                                            </p>
                                        </div>

                                        {/* Additional Info if available */}
                                        {booking.rentalDays && (
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <FaCalendarAlt className="text-amber-500" />
                                                <span>{booking.rentalDays} days rental</span>
                                            </div>
                                        )}
                                        
                                        {booking.pickupDate && (
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <FaCalendarAlt className="text-green-500" />
                                                <span>Pickup: {new Date(booking.pickupDate).toLocaleDateString()}</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Cancel Button */}
                                    <div className="pt-3">
                                        <BookingCancelAlert bookingId={booking._id} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyBookingsPage;

