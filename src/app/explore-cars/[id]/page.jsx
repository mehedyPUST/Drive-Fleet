


// import Image from "next/image";
// import { FaCarSide, FaMapMarkerAlt, FaUsers, FaArrowLeft } from "react-icons/fa";
// import Link from "next/link";
// import EditCarDetailsModal from "@/components/EditCarDetailsModal";
// import { DeleteAlert } from "@/components/DeleteAlert";
// import BookingActionCard from "@/components/BookingActionCard";
// import { auth } from "@/lib/auth";
// import { headers } from "next/headers";

// const CarDetailsPage = async ({ params }) => {
//     const { id } = await params;

//     const { token } = await auth.api.getToken({
//         headers: await headers()
//     })

//     const session = await auth.api.getSession({
//         headers: await headers(),
//     });
//     console.log(token)

//     const currentUserId = session?.user?.id;

//     const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/cars/${id}`,
//         {
//             headers: {
//                 authorization: `Bearer ${token}`
//             }
//         }
//     );

//     const car = await res.json();

//     const isOwner = currentUserId && currentUserId === car.addedBy;

//     const statusConfig = {
//         available: {
//             label: "Available",
//             bg: "bg-emerald-100",
//             text: "text-emerald-700",
//             dot: "bg-emerald-500",
//         },
//         booked: {
//             label: "Booked",
//             bg: "bg-rose-100",
//             text: "text-rose-700",
//             dot: "bg-rose-500",
//         },
//         maintenance: {
//             label: "Under Maintenance",
//             bg: "bg-amber-100",
//             text: "text-amber-700",
//             dot: "bg-amber-500",
//         },
//     };

//     const currentStatus = statusConfig[car.availabilityStatus.toLowerCase()] || {
//         label: car.availabilityStatus,
//         bg: "bg-gray-100",
//         text: "text-gray-700",
//         dot: "bg-gray-500",
//     };

//     return (
//         <div className="min-h-screen bg-zinc-50">
//             <div className="flex gap-3 justify-end items-center p-4">
//                 {!currentUserId ? (
//                     <div className="flex gap-3">
//                         <button disabled className="px-4 py-2 bg-gray-300 rounded-lg opacity-50 cursor-not-allowed">
//                             Edit
//                         </button>
//                         <button disabled className="px-4 py-2 bg-red-300 rounded-lg opacity-50 cursor-not-allowed">
//                             Delete
//                         </button>
//                     </div>
//                 ) : isOwner ? (
//                     <>
//                         <DeleteAlert car={car} />
//                         <EditCarDetailsModal car={car} />
//                     </>
//                 ) : (
//                     <div className="flex gap-3">
//                         <button disabled className="px-4 py-2 bg-gray-300 rounded-lg opacity-50 cursor-not-allowed">
//                             Edit
//                         </button>
//                         <button disabled className="px-4 py-2 bg-red-300 rounded-lg opacity-50 cursor-not-allowed">
//                             Delete
//                         </button>
//                     </div>
//                 )}
//             </div>

//             <div className="max-w-6xl mx-auto px-6 pt-8">
//                 <Link
//                     href="/explore-cars"
//                     className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-900 transition-colors group"
//                 >
//                     <FaArrowLeft className="group-hover:-translate-x-0.5 transition-transform" size={16} />
//                     <span className="text-sm font-medium">Back to Fleet</span>
//                 </Link>
//             </div>

//             <div className="max-w-6xl mx-auto px-6 py-10 lg:py-16">
//                 <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
//                     <div className="relative rounded-3xl overflow-hidden bg-zinc-100 shadow-xl aspect-[16/11] lg:sticky lg:top-8">
//                         <Image
//                             src={car.imageUrl}
//                             alt={car.carName}
//                             fill
//                             className="object-cover"
//                             priority
//                             sizes="(max-width: 1024px) 100vw, 50vw"
//                         />
//                     </div>

//                     <div className="space-y-8">
//                         <div>
//                             <div className="flex items-center justify-between mb-3">
//                                 <span className="uppercase tracking-[2px] text-xs font-medium text-zinc-500">
//                                     {car.carType}
//                                 </span>
//                                 <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${currentStatus.bg}`}>
//                                     <div className={`w-2 h-2 rounded-full ${currentStatus.dot}`} />
//                                     <span className={`text-xs font-semibold ${currentStatus.text}`}>
//                                         {currentStatus.label}
//                                     </span>
//                                 </div>
//                             </div>
//                             <h1 className="text-4xl lg:text-5xl font-semibold text-zinc-900 tracking-tight">
//                                 {car.carName}
//                             </h1>
//                         </div>

//                         <div className="border-t border-b border-zinc-100 py-6">
//                             <div className="flex items-baseline gap-1">
//                                 <span className="text-5xl font-semibold text-zinc-900">
//                                     ${car.dailyRentPrice}
//                                 </span>
//                                 <span className="text-zinc-500 text-lg">/ day</span>
//                             </div>
//                         </div>

//                         <div className="grid grid-cols-3 gap-6">
//                             <div className="space-y-1">
//                                 <FaCarSide className="text-zinc-400 text-xl" />
//                                 <p className="text-sm text-zinc-500">Type</p>
//                                 <p className="font-medium text-zinc-900">{car.carType}</p>
//                             </div>
//                             <div className="space-y-1">
//                                 <FaUsers className="text-zinc-400 text-xl" />
//                                 <p className="text-sm text-zinc-500">Capacity</p>
//                                 <p className="font-medium text-zinc-900">{car.seatCapacity} Seats</p>
//                             </div>
//                             <div className="space-y-1">
//                                 <FaMapMarkerAlt className="text-zinc-400 text-xl" />
//                                 <p className="text-sm text-zinc-500">Location</p>
//                                 <p className="font-medium text-zinc-900">{car.pickupLocation}</p>
//                             </div>
//                         </div>

//                         <div>
//                             <h3 className="text-zinc-900 font-medium mb-3">Description</h3>
//                             <p className="text-zinc-600 leading-relaxed">{car.description}</p>
//                         </div>

//                         <BookingActionCard car={car} />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CarDetailsPage;


import Image from "next/image";
import { FaCarSide, FaMapMarkerAlt, FaUsers, FaArrowLeft, FaEdit, FaTrashAlt } from "react-icons/fa";
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
        <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100">
            {/* Action Buttons - Responsive */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
                <div className="flex flex-wrap gap-3 justify-end items-center">
                    {!currentUserId ? (
                        <div className="flex flex-wrap gap-3">
                            <button disabled className="px-4 sm:px-6 py-2 sm:py-2.5 bg-gray-200 rounded-xl opacity-50 cursor-not-allowed text-gray-500 text-sm sm:text-base font-medium transition-all duration-200">
                                <FaEdit className="inline mr-2 text-sm" /> Edit
                            </button>
                            <button disabled className="px-4 sm:px-6 py-2 sm:py-2.5 bg-red-200 rounded-xl opacity-50 cursor-not-allowed text-red-600 text-sm sm:text-base font-medium transition-all duration-200">
                                <FaTrashAlt className="inline mr-2 text-sm" /> Delete
                            </button>
                        </div>
                    ) : isOwner ? (
                        <div className="flex flex-wrap gap-3">
                            <DeleteAlert car={car} />
                            <EditCarDetailsModal car={car} />
                        </div>
                    ) : (
                        <div className="flex flex-wrap gap-3">
                            <button disabled className="px-4 sm:px-6 py-2 sm:py-2.5 bg-gray-200 rounded-xl opacity-50 cursor-not-allowed text-gray-500 text-sm sm:text-base font-medium transition-all duration-200">
                                <FaEdit className="inline mr-2 text-sm" /> Edit
                            </button>
                            <button disabled className="px-4 sm:px-6 py-2 sm:py-2.5 bg-red-200 rounded-xl opacity-50 cursor-not-allowed text-red-600 text-sm sm:text-base font-medium transition-all duration-200">
                                <FaTrashAlt className="inline mr-2 text-sm" /> Delete
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Back Button - Responsive */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
                <Link
                    href="/explore-cars"
                    className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-900 transition-all duration-300 group bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm hover:shadow-md"
                >
                    <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" size={14} />
                    <span className="text-sm font-medium">Back to Fleet</span>
                </Link>
            </div>

            {/* Main Content - Responsive */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
                    {/* Image Section - Responsive */}
                    <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-zinc-100 to-zinc-200 shadow-xl aspect-[16/11] lg:sticky lg:top-8 group">
                        <Image
                            src={car.imageUrl}
                            alt={car.carName}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            priority
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
                        />
                        {/* Image Overlay for better text readability if needed */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none"></div>
                    </div>

                    {/* Details Section - Responsive */}
                    <div className="space-y-6 sm:space-y-8">
                        {/* Title and Status */}
                        <div>
                            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                                <span className="uppercase tracking-[2px] text-xs sm:text-sm font-semibold text-zinc-500 bg-zinc-100 px-3 py-1 rounded-full">
                                    {car.carType}
                                </span>
                                <div className={`inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full ${currentStatus.bg} shadow-sm`}>
                                    <div className={`w-2 h-2 rounded-full ${currentStatus.dot} animate-pulse`} />
                                    <span className={`text-xs sm:text-sm font-bold ${currentStatus.text}`}>
                                        {currentStatus.label}
                                    </span>
                                </div>
                            </div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 tracking-tight leading-tight">
                                {car.carName}
                            </h1>
                        </div>

                        {/* Price Section - Responsive */}
                        <div className="border-t-2 border-b-2 border-zinc-100 py-6 sm:py-8">
                            <div className="flex items-baseline gap-2">
                                <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-emerald-600">
                                    ${car.dailyRentPrice}
                                </span>
                                <span className="text-zinc-500 text-base sm:text-lg font-medium">/ day</span>
                            </div>
                            <p className="text-xs sm:text-sm text-zinc-400 mt-2">+ taxes & fees</p>
                        </div>

                        {/* Features Grid - Responsive */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                            <div className="flex items-center gap-3 p-3 sm:p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                                <div className="p-2 sm:p-3 bg-emerald-50 rounded-lg">
                                    <FaCarSide className="text-emerald-600 text-lg sm:text-xl" />
                                </div>
                                <div>
                                    <p className="text-xs sm:text-sm text-zinc-500 font-medium">Car Type</p>
                                    <p className="font-semibold text-zinc-900 text-sm sm:text-base">{car.carType}</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-3 p-3 sm:p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                                <div className="p-2 sm:p-3 bg-blue-50 rounded-lg">
                                    <FaUsers className="text-blue-600 text-lg sm:text-xl" />
                                </div>
                                <div>
                                    <p className="text-xs sm:text-sm text-zinc-500 font-medium">Seat Capacity</p>
                                    <p className="font-semibold text-zinc-900 text-sm sm:text-base">{car.seatCapacity} Seats</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-3 p-3 sm:p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                                <div className="p-2 sm:p-3 bg-amber-50 rounded-lg">
                                    <FaMapMarkerAlt className="text-amber-600 text-lg sm:text-xl" />
                                </div>
                                <div>
                                    <p className="text-xs sm:text-sm text-zinc-500 font-medium">Pickup Location</p>
                                    <p className="font-semibold text-zinc-900 text-sm sm:text-base truncate">{car.pickupLocation}</p>
                                </div>
                            </div>
                        </div>

                        {/* Description - Responsive */}
                        <div className="bg-white/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6">
                            <h3 className="text-zinc-900 font-bold text-lg sm:text-xl mb-3 flex items-center gap-2">
                                <span className="w-1 h-6 bg-emerald-500 rounded-full"></span>
                                Description
                            </h3>
                            <p className="text-zinc-600 leading-relaxed text-sm sm:text-base">
                                {car.description}
                            </p>
                        </div>

                        {/* Booking Section */}
                        <BookingActionCard car={car} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarDetailsPage;
