import CarCard from '@/components/CarCard';
import React from 'react';

const ExploreCarsPage = async () => {
    const res = await fetch('http://localhost:5000/cars')
    const cars = await res.json()

    console.log(cars)

    return (
        <div>
            <h2 >Available Cars</h2>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    cars.map(car => <CarCard car={car} key={car._id}></CarCard>)
                }
            </div>

        </div>
    );
};

export default ExploreCarsPage;