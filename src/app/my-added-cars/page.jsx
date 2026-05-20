
import { auth } from '@/lib/auth';
import React from 'react';
import { headers } from 'next/headers';

import MyCarCard from '@/components/MyCarCard';
const MyAddedCarsPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers(),
    });



    const user = session?.user;

    const { token } = await auth.api.getToken({
        headers: await headers(),
    });
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/cars/user/${user.id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }

    })
    const userAddedCars = await res.json();

    return (
        <div>
            <h1>my added car  :{userAddedCars.length}</h1>

            <div className='grid  md:grid-cols-3'>
                {
                    userAddedCars.map(myCar =>

                        // <div key={car._id}>{car.carName}</div>

                        <MyCarCard key={myCar._id} myCar={myCar}></MyCarCard>
                    )
                }

            </div>
        </div>
    );
};

export default MyAddedCarsPage;