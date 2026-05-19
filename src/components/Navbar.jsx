

'use client'
import { router } from 'better-auth/api';
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { UserDropDown } from './UserDropDown';

const Navbar = () => {

    const { data: session } = authClient.useSession()
    const user = session?.user

    const router = useRouter();

    // console.log(session)
    // console.log(user)

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

                    {user ? <>
                        <ul>
                            {/* <li>
                                <Avatar>
                                    <Avatar.Image alt="John Doe" src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3" />
                                    <Avatar.Fallback>JD</Avatar.Fallback>
                                </Avatar>
                            </li>
                            <li>
                                <Button variant='danger' className={'rounded-none'}>
                                    Logout
                                </Button>
                            </li>
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
                            </li> */}
                            <UserDropDown user={user} />
                        </ul>


                    </> : <>
                        <li>
                            <Link href={"/login"}> Login </Link>
                        </li>
                        <li>
                            <Link href={"/register"}> Register </Link>
                        </li>
                    </>}
                </ul>



            </div>




        </nav>




    );
};

export default Navbar;

