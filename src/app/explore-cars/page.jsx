import CarCard from '@/components/CarCard';
import React from 'react';

const ExploreCarsPage = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/cars`, {
        cache: 'no-store'
    })


    const cars = await res.json()

    console.log(cars)

    return (
        <div className='w-11/12 mx-auto'>
            <h2 className='text-3xl font-bold mt-5 mb-3 ' >Available Cars: <span className='text-green-500'>{cars.length}</span> </h2>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    cars.map(car => <CarCard car={car} key={car._id}></CarCard>)
                }
            </div>

        </div>
    );
};

export default ExploreCarsPage;
