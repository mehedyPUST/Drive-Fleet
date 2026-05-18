

'use client'


import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className='w-full mx-auto flex justify-between items-center p-5 sticky top-0 shadow-md bg-white z-50'>

            <h1 className='text-4xl font-bold'><span className='text-green-500'>Drive</span><span className='text-amber-500'>Fleet</span></h1>



            <ul className='flex gap-3 '>
                <li>
                    <Link href={"/"}> Home </Link>
                </li>
                <li>
                    <Link href={"/explore-cars"}> Explore Cars </Link>
                </li>
                <li>
                    <Link href={"/add-car"}> Add Car </Link>
                </li>
                <li>
                    <Link href={"/my-bookings"}> My Bookings </Link>
                </li>
            </ul>


            <div>

                <ul className='flex gap-3 '>
                    <li>
                        <Link href={"/login"}> Login </Link>
                    </li>
                    <li>
                        <Link href={"/register"}> Register </Link>
                    </li>

                </ul>


                <ul className='flex gap-3 '>
                    <li>
                        <Link href={"/add-car"}> Add Car  </Link>
                    </li>
                    <li>
                        <Link href={"/my-bookings"}> My Bookings </Link>
                    </li>
                    <li>
                        <Link href={"/my-added-cars"}> My Added Cars </Link>
                    </li>
                    <li>
                        <Link href={"/profile"}> Profile </Link>
                    </li>
                    <li>
                        <Button variant='danger' className={'rounded-none'}>
                            Logout
                        </Button>
                    </li>


                </ul>
            </div>




        </nav>




    );
};

export default Navbar;







