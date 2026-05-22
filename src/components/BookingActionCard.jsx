
// 'use client'
// import { useState } from 'react';
// import { authClient } from '@/lib/auth-client';
// import { Button, Card, FieldError, Label, ListBox, Select, TextArea, TextField } from '@heroui/react';
// import toast from 'react-hot-toast';

// const BookingActionCard = ({ car }) => {
//     const { data: session } = authClient.useSession();
//     const user = session?.user;


//     const [needDriver, setNeedDriver] = useState('');
//     const [specialNote, setSpecialNote] = useState('');

//     const bookingHandler = async () => {
//         if (!user) {
//             console.log("User is not logged in!");
//             return;
//         }

//         const bookingData = {
//             userId: user.id,
//             userImage: user.image,
//             userName: user.name,
//             carId: car._id,
//             carImage: car.imageUrl,
//             carName: car.carName,
//             imageUrl: car.imageUrl,
//             rentalPrice: car.dailyRentPrice,
//             needDriver,
//             specialNote
//         };


//         const { data: tokenData } = await authClient.token()
//         console.log(tokenData)

//         const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json',
//                 authorization: `Bearer ${tokenData?.token}`
//             },
//             body: JSON.stringify(bookingData)
//         })
//         const data = await res.json();
//         console.log('booking er data ', data)
//         toast.success(`Booking ${car.carName} is successful! Welcome to Drive Fleet.`);
//     };

//     return (
//         <div>
//             <Card className='rounded-none border p-5 space-y-4'>
//                 <p>Book This Car at</p>
//                 <p className='text-3xl text-green-500 font-bold'>$ {car.dailyRentPrice}</p>
//                 <p>Per Day</p>


//                 <Select
//                     name="category"
//                     isRequired
//                     className="w-full"
//                     placeholder="Select Your Option"
//                     value={needDriver}
//                     onChange={(value) => setNeedDriver(value)}
//                 >
//                     <Label>Need Driver</Label>
//                     <Select.Trigger className="rounded-sm">
//                         <Select.Value />
//                         <Select.Indicator />
//                     </Select.Trigger>
//                     <Select.Popover>
//                         <ListBox className='rounded-sm'>

//                             <ListBox.Item id="Yes" textValue="Yes">Yes</ListBox.Item>
//                             <ListBox.Item id="No" textValue="No">No</ListBox.Item>
//                         </ListBox>
//                     </Select.Popover>
//                 </Select>


//                 <div className="">
//                     <TextField name="description">
//                         <Label>Special Note </Label>
//                         <TextArea
//                             placeholder="Describe the travel experience..."
//                             className="rounded-sm"
//                             value={specialNote}
//                             onChange={(e) => setSpecialNote(e.target.value)}
//                         />
//                         <FieldError />
//                     </TextField>
//                 </div>


//                 <Button
//                     onClick={bookingHandler}
//                     className="w-full bg-zinc-900 hover:bg-black text-white rounded-2xl py-7 text-base font-semibold transition-all active:scale-[0.985]"
//                     size="lg"
//                     isDisabled={car.availabilityStatus !== "Available"}
//                 >
//                     {car.availabilityStatus === "Available"
//                         ? "Book This Car"
//                         : "Currently Unavailable"}
//                 </Button>

//             </Card>
//         </div>
//     );
// };

// export default BookingActionCard;

"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import {
    Button,
    Card,
    FieldError,
    Label,
    ListBox,
    Select,
    TextArea,
    TextField,
    DatePicker,
} from "@heroui/react";

import { today } from "@internationalized/date";
import toast from "react-hot-toast";

const BookingActionCard = ({ car }) => {
    const { data: session } = authClient.useSession();
    const user = session?.user;

    // ✅ IMPORTANT: use undefined (NOT null)
    const [pickupDate, setPickupDate] = useState(undefined);
    const [dropoffDate, setDropoffDate] = useState(undefined);
    const [needDriver, setNeedDriver] = useState("");
    const [specialNote, setSpecialNote] = useState("");

    const bookingHandler = async () => {
        if (!user) {
            toast.error("Please login first!");
            return;
        }

        if (!pickupDate || !dropoffDate) {
            toast.error("Select both dates!");
            return;
        }

        try {
            // ✅ SAFE conversion
            const pickupDateTime = pickupDate.toDate("UTC");
            const dropoffDateTime = dropoffDate.toDate("UTC");
            const bookingDateTime = new Date();

            const bookingData = {
                userId: user.id,
                userName: user.name,
                userImage: user.image,

                carId: car._id,
                carName: car.carName,
                carImage: car.imageUrl,
                rentalPrice: car.dailyRentPrice,

                needDriver,
                specialNote,

                pickupDate: pickupDateTime.toISOString(),
                dropoffDate: dropoffDateTime.toISOString(),
                bookingDate: bookingDateTime.toISOString(),
            };

            const { data: tokenData } = await authClient.token();

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/booking`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        authorization: `Bearer ${tokenData?.token}`,
                    },
                    body: JSON.stringify(bookingData),
                }
            );

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data?.message || "Booking failed");
            }

            toast.success("Booking successful!");

            // reset
            setPickupDate(undefined);
            setDropoffDate(undefined);
            setNeedDriver("");
            setSpecialNote("");
        } catch (err) {
            toast.error(err.message);
        }
    };

    return (
        <Card className="rounded-none border p-5 space-y-4">

            <p className="text-gray-600 font-medium">
                Book This Car
            </p>

            <p className="text-3xl font-bold text-green-500">
                $ {car.dailyRentPrice}
            </p>

            <p className="text-sm text-gray-500">Per Day</p>

            {/* PICKUP DATE */}
            <div className="space-y-2">
                <Label>Pickup Date *</Label>

                <DatePicker
                    className="w-full"
                    value={pickupDate}
                    onChange={setPickupDate}
                    minValue={today("UTC")}
                />
            </div>

            {/* DROPOFF DATE */}
            <div className="space-y-2">
                <Label>Dropoff Date *</Label>

                <DatePicker
                    className="w-full"
                    value={dropoffDate}
                    onChange={setDropoffDate}
                    minValue={pickupDate || today("UTC")}
                    isDisabled={!pickupDate}
                />
            </div>

            {/* DRIVER */}
            <Select
                className="w-full"
                placeholder="Need Driver?"
                selectedKeys={needDriver ? [needDriver] : []}
                onSelectionChange={(keys) =>
                    setNeedDriver(Array.from(keys)[0])
                }
            >
                <Label>Need Driver</Label>

                <Select.Trigger>
                    <Select.Value />
                    <Select.Indicator />
                </Select.Trigger>

                <Select.Popover>
                    <ListBox>
                        <ListBox.Item key="Yes">Yes</ListBox.Item>
                        <ListBox.Item key="No">No</ListBox.Item>
                    </ListBox>
                </Select.Popover>
            </Select>

            {/* NOTE */}
            <TextField>
                <Label>Special Note</Label>

                <TextArea
                    value={specialNote}
                    onChange={(e) => setSpecialNote(e.target.value)}
                    placeholder="Any special request..."
                />

                <FieldError />
            </TextField>

            {/* BUTTON */}
            <Button
                onClick={bookingHandler}
                className="w-full bg-gradient-to-r from-green-600 to-amber-600 text-white font-semibold py-6"
                isDisabled={
                    car.availabilityStatus !== "Available" ||
                    !pickupDate ||
                    !dropoffDate
                }
            >
                {car.availabilityStatus !== "Available"
                    ? "Unavailable"
                    : pickupDate && dropoffDate
                    ? "Book Now"
                    : "Select Dates"}
            </Button>
        </Card>
    );
};

export default BookingActionCard;
