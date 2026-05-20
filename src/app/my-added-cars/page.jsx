
import { auth } from '@/lib/auth';
import React from 'react';
import { headers } from 'next/headers';
import CarCard from '@/components/CarCard';
const MyAddedCarsPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers(),
    });



    const user = session?.user;
    const res = await fetch(`http://localhost:5000/cars/user/${user.id}`)
    const userAddedCars = await res.json();

    return (
        <div>
            <h1>my added car  :{userAddedCars.length}</h1>

            {
                userAddedCars.map(car => {

                    <div key={car._id}>{car.carName}</div>
                })
            }

        </div>
    );
};

export default MyAddedCarsPage;