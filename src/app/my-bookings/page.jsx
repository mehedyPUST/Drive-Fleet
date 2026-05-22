

import { BookingCancelAlert } from "@/components/BookingCancelAlert";
import { auth } from "@/lib/auth";
import { FaCalendarAlt, FaIdCard } from "react-icons/fa";
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
    await new Promise(resolve => setTimeout(resolve, 1000));
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user.id}`,
        {
            headers: { authorization: `Bearer ${token}` },
            cache: 'no-store'
        }
    );

    const bookings = await res.json();

    if (!bookings || bookings.length === 0) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center px-4 bg-gray-50">
                <div className="text-center">
                    <div className="text-6xl mb-4">🚗</div>
                    <h2 className="text-2xl font-bold text-black mb-2">
                        No Bookings Yet
                    </h2>
                    <p className="text-gray-600 mb-6">
                        You haven't made any car bookings yet.
                    </p>

                    <Link
                        href="/explore-cars"
                        className="inline-block px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-900 transition"
                    >
                        Explore Cars
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-10">

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-10">
                    <h1 className="text-3xl font-bold text-black flex items-center gap-3">
                        <span className="w-1 h-10 bg-green-600 rounded-full"></span>
                        My Bookings
                    </h1>

                    <p className="text-gray-600 mt-2">
                        You have{" "}
                        <span className="font-bold text-green-600">
                            {bookings.length}
                        </span>{" "}
                        bookings in total
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    {bookings.map((booking) => (
                        <div
                            key={booking._id}
                            className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden"
                        >

                            <div className="flex flex-col sm:flex-row gap-5 p-5">

                                {/* Image */}
                                <div className="relative w-full sm:w-52 h-44 rounded-xl overflow-hidden bg-gray-100">
                                    <Image
                                        src={booking.carImage}
                                        alt={booking.carName}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex-1 space-y-3">

                                    <h2 className="text-xl font-bold text-black">
                                        {booking.carName}
                                    </h2>

                                    <p className="text-xs text-gray-500 font-mono flex items-center gap-2">
                                        <FaIdCard />
                                        {booking._id}
                                    </p>

                                    {/* Price */}
                                    <div className="flex justify-between border-b border-gray-100 pb-2">
                                        <span className="text-gray-600">Total Price</span>
                                        <span className="text-xl font-bold text-green-600">
                                            ${booking.rentalPrice}
                                        </span>
                                    </div>

                                    {/* Dates */}
                                    <div className="space-y-2 text-sm">

                                        {booking.departureDate && (
                                            <div className="flex items-center gap-2 text-gray-700">
                                                <FaCalendarAlt className="text-green-600" />
                                                <span>
                                                    Departure:{" "}
                                                    {new Intl.DateTimeFormat("en-US", {
                                                        year: "numeric",
                                                        month: "long",
                                                        day: "numeric",
                                                    }).format(new Date(booking.departureDate))}
                                                </span>
                                            </div>
                                        )}

                                        {booking.droppingDate && (
                                            <div className="flex items-center gap-2 text-gray-700">
                                                <FaCalendarAlt className="text-orange-500" />
                                                <span>
                                                    Dropping:{" "}
                                                    {new Intl.DateTimeFormat("en-US", {
                                                        year: "numeric",
                                                        month: "long",
                                                        day: "numeric",
                                                    }).format(new Date(booking.droppingDate))}
                                                </span>
                                            </div>
                                        )}

                                    </div>

                                    {/* Cancel */}
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
