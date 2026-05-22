// import CarCard from '@/components/CarCard';
// import React from 'react';

// const ExploreCarsPage = async () => {
//      const res = await fetch(`https://drive-fleet-server-oihu.vercel.app/cars`, {
//         cache: 'no-store',  // এই লাইনটি যোগ করতে পারেন
//         // next: { revalidate: 0 }  // অথবা এই লাইনটি (Next.js 13+)
//     })
    
//     // const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/cars`)
//     const cars = await res.json()

//     console.log(cars)

//     return (
//         <div className='w-11/12 mx-auto'>
//             <h2 className='text-3xl font-bold mt-5 mb-3 ' >Available Cars: <span className='text-green-500'>{cars.length}</span> </h2>

//             <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
//                 {
//                     cars.map(car => <CarCard car={car} key={car._id}></CarCard>)
//                 }
//             </div>

//         </div>
//     );
// };

// export default ExploreCarsPage;


import CarCard from '@/components/CarCard';
import React from 'react';

const ExploreCarsPage = async () => {
    const res = await fetch(`https://drive-fleet-server-oihu.vercel.app/cars`, {
        cache: 'no-store',
    });

    const cars = await res.json();

    return (
        <div className="min-h-screen bg-gray-50">

            <div className="w-11/12 mx-auto py-10">

                {/* Header */}
                <div className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">

                    <h2 className="text-2xl sm:text-3xl font-bold text-black">
                        Available Cars:{" "}
                        <span className="text-green-600">
                            {cars.length}
                        </span>
                    </h2>

                    <p className="text-sm text-gray-500">
                        Find your perfect ride and book instantly
                    </p>

                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {cars.map((car) => (
                        <CarCard car={car} key={car._id} />
                    ))}

                </div>

            </div>

        </div>
    );
};

export default ExploreCarsPage;

