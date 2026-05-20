


import Image from "next/image";
import { FaCarSide, FaMapMarkerAlt, FaUsers, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import EditCarDetailsModal from "@/components/EditCarDetailsModal";
import { DeleteAlert } from "@/components/DeleteAlert";
import BookingActionCard from "@/components/BookingActionCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const CarDetailsPage = async ({ params }) => {
    const { id } = await params;

    const { token } = await auth.api.getToken({
        headers: await headers()
    })

    const session = await auth.api.getSession({
        headers: await headers(),
    });
    console.log(token)

    const currentUserId = session?.user?.id;

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/cars/${id}`,
        {
            headers: {
                authorization: `Bearer ${token}`
            }
        }
    );

    const car = await res.json();

    const isOwner = currentUserId && currentUserId === car.addedBy;

    const statusConfig = {
        available: {
            label: "Available",
            bg: "bg-emerald-100",
            text: "text-emerald-700",
            dot: "bg-emerald-500",
        },
        booked: {
            label: "Booked",
            bg: "bg-rose-100",
            text: "text-rose-700",
            dot: "bg-rose-500",
        },
        maintenance: {
            label: "Under Maintenance",
            bg: "bg-amber-100",
            text: "text-amber-700",
            dot: "bg-amber-500",
        },
    };

    const currentStatus = statusConfig[car.availabilityStatus.toLowerCase()] || {
        label: car.availabilityStatus,
        bg: "bg-gray-100",
        text: "text-gray-700",
        dot: "bg-gray-500",
    };

    return (
        <div className="min-h-screen bg-zinc-50">
            <div className="flex gap-3 justify-end items-center p-4">
                {!currentUserId ? (
                    <div className="flex gap-3">
                        <button disabled className="px-4 py-2 bg-gray-300 rounded-lg opacity-50 cursor-not-allowed">
                            Edit
                        </button>
                        <button disabled className="px-4 py-2 bg-red-300 rounded-lg opacity-50 cursor-not-allowed">
                            Delete
                        </button>
                    </div>
                ) : isOwner ? (
                    <>
                        <DeleteAlert car={car} />
                        <EditCarDetailsModal car={car} />
                    </>
                ) : (
                    <div className="flex gap-3">
                        <button disabled className="px-4 py-2 bg-gray-300 rounded-lg opacity-50 cursor-not-allowed">
                            Edit
                        </button>
                        <button disabled className="px-4 py-2 bg-red-300 rounded-lg opacity-50 cursor-not-allowed">
                            Delete
                        </button>
                    </div>
                )}
            </div>

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

                    <div className="space-y-8">
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

                        <div className="border-t border-b border-zinc-100 py-6">
                            <div className="flex items-baseline gap-1">
                                <span className="text-5xl font-semibold text-zinc-900">
                                    ${car.dailyRentPrice}
                                </span>
                                <span className="text-zinc-500 text-lg">/ day</span>
                            </div>
                        </div>

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

                        <div>
                            <h3 className="text-zinc-900 font-medium mb-3">Description</h3>
                            <p className="text-zinc-600 leading-relaxed">{car.description}</p>
                        </div>

                        <BookingActionCard car={car} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarDetailsPage;