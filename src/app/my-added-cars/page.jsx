// import { auth } from '@/lib/auth';
// import React from 'react';
// import { headers } from 'next/headers';
// import Link from 'next/link';
// import { FaCar, FaPlusCircle } from 'react-icons/fa';
// import MyCarCard from '@/components/MyCarCard';

// const MyAddedCarsPage = async () => {

//     const session = await auth.api.getSession({
//         headers: await headers(),
//     });

//     const user = session?.user;

//     const { token } = await auth.api.getToken({
//         headers: await headers(),
//     });

//     const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/cars/user/${user.id}`, {
//         headers: {
//             authorization: `Bearer ${token}`
//         },
//         cache: 'no-store'
//     })
//     const userAddedCars = await res.json();

//     // Empty state handling
//     if (!userAddedCars || userAddedCars.length === 0) {
//         return (
//             <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
//                 <div className="text-center">
//                     <div className="text-6xl mb-4">🚗</div>
//                     <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-2">No Cars Added Yet</h2>
//                     <p className="text-gray-500 mb-6">You haven't added any cars to your fleet.</p>
//                     <Link 
//                         href="/add-car" 
//                         className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-amber-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-medium"
//                     >
//                         <FaPlusCircle />
//                         Add Your First Car
//                     </Link>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 sm:py-12">
//             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//                 {/* Header Section */}
//                 <div className="mb-8 sm:mb-12">
//                     <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//                         <div>
//                             <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 flex items-center gap-3">
//                                 <span className="w-1 h-8 sm:h-10 bg-gradient-to-b from-green-500 to-amber-500 rounded-full"></span>
//                                 My Added Cars
//                             </h1>
//                             <p className="text-gray-500 mt-2 text-sm sm:text-base">
//                                 You have added <span className="font-bold text-green-600">{userAddedCars.length}</span> {userAddedCars.length === 1 ? 'car' : 'cars'} to your fleet
//                             </p>
//                         </div>

//                         {/* Add New Car Button */}
//                         <Link 
//                             href="/add-car" 
//                             className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-green-500 to-amber-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-medium text-sm sm:text-base self-start sm:self-auto"
//                         >
//                             <FaPlusCircle className="text-sm sm:text-base" />
//                             Add New Car
//                         </Link>
//                     </div>
//                 </div>

//                 {/* Cars Grid */}
//                 {userAddedCars.length > 0 ? (
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
//                         {userAddedCars.map(myCar => (
//                             <MyCarCard key={myCar._id} myCar={myCar} />
//                         ))}
//                     </div>
//                 ) : (
//                     <div className="text-center py-12">
//                         <FaCar className="text-6xl text-gray-300 mx-auto mb-4" />
//                         <p className="text-gray-400">No cars found</p>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default MyAddedCarsPage;




import { auth } from '@/lib/auth';
import React from 'react';
import { headers } from 'next/headers';
import Link from 'next/link';
import { FaCar, FaPlusCircle } from 'react-icons/fa';
import MyCarCard from '@/components/MyCarCard';

const MyAddedCarsPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const user = session?.user;

    const { token } = await auth.api.getToken({
        headers: await headers(),
    });

    await new Promise(resolve => setTimeout(resolve, 2000));
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/cars/user/${user.id}`, {
        headers: {
            authorization: `Bearer ${token}`
        },
        cache: 'no-store'
    });

    const userAddedCars = await res.json();

    // Empty state
    if (!userAddedCars || userAddedCars.length === 0) {
        return (
            <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-4">

                <div className="text-center max-w-md">

                    <div className="text-6xl mb-4">🚗</div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-black mb-2">
                        No Cars Added Yet
                    </h2>

                    <p className="text-gray-600 mb-6">
                        You haven't added any cars to your fleet.
                    </p>

                    <Link
                        href="/add-car"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-900 transition-all duration-300 font-medium"
                    >
                        <FaPlusCircle />
                        Add Your First Car
                    </Link>

                </div>

            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">

                {/* Header */}
                <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">

                    <div>

                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black flex items-center gap-3">

                            <span className="w-1 h-10 bg-green-600 rounded-full"></span>

                            My Added Cars

                        </h1>

                        <p className="text-gray-600 mt-2 text-sm sm:text-base">
                            You have added{" "}
                            <span className="font-bold text-green-600">
                                {userAddedCars.length}
                            </span>{" "}
                            {userAddedCars.length === 1 ? "car" : "cars"} to your fleet
                        </p>

                    </div>

                    {/* Add button */}
                    <Link
                        href="/add-car"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-xl hover:bg-gray-900 transition-all duration-300 font-medium self-start sm:self-auto"
                    >
                        <FaPlusCircle />
                        Add New Car
                    </Link>

                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                    {userAddedCars.map((myCar) => (
                        <MyCarCard key={myCar._id} myCar={myCar} />
                    ))}

                </div>

            </div>

        </div>
    );
};

export default MyAddedCarsPage;
