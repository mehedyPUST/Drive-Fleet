
'use client'
import { useState } from 'react';
import { authClient } from '@/lib/auth-client';
import { Button, Card, FieldError, Label, ListBox, Select, TextArea, TextField, DateField } from '@heroui/react';

import toast from 'react-hot-toast';

const BookingActionCard = ({ car }) => {
    const { data: session } = authClient.useSession();
    const user = session?.user;


    const [needDriver, setNeedDriver] = useState('');
    const [specialNote, setSpecialNote] = useState('');
    const [departureDate, setDepartureDate] = useState(null);
    const [droppingDate, setDroppingDate] = useState(null);


    const bookingHandler = async () => {
        if (!user) {
            console.log("User is not logged in!");
            return;
        }

        const bookingData = {
            userId: user.id,
            userImage: user.image,
            userName: user.name,
            carId: car._id,
            carImage: car.imageUrl,
            carName: car.carName,
            imageUrl: car.imageUrl,
            rentalPrice: car.dailyRentPrice,
            needDriver,
            specialNote,
            departureDate: new Date(departureDate),
            droppingDate: new Date(droppingDate)
        };


        const { data: tokenData } = await authClient.token()
        console.log(tokenData)

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(bookingData)
        })
        const data = await res.json();
        console.log('booking er data ', data)
        toast.success(`Booking ${car.carName} is successful! Welcome to Drive Fleet.`);
    };

    return (
        <div>
            <Card className='rounded-none border p-5 space-y-4'>
                <p>Book This Car at</p>
                <p className='text-3xl text-green-500 font-bold'>$ {car.dailyRentPrice}</p>
                <p>Per Day</p>


                <Select
                    name="category"
                    isRequired
                    className="w-full"
                    placeholder="Select Your Option"
                    value={needDriver}
                    onChange={(value) => setNeedDriver(value)}
                >
                    <Label>Need Driver</Label>
                    <Select.Trigger className="rounded-sm">
                        <Select.Value />
                        <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                        <ListBox className='rounded-sm'>

                            <ListBox.Item id="Yes" textValue="Yes">Yes</ListBox.Item>
                            <ListBox.Item id="No" textValue="No">No</ListBox.Item>
                        </ListBox>
                    </Select.Popover>
                </Select>

                <DateField onChange={setDepartureDate} className="w-[256px]" name="date">
                    <Label>Departure Date</Label>
                    <DateField.Group>
                        <DateField.Input>
                            {(segment) => <DateField.Segment segment={segment} />}
                        </DateField.Input>
                    </DateField.Group>
                </DateField>


                <DateField onChange={setDroppingDate} className="w-[256px]" name="date">
                    <Label>Dropping Date</Label>
                    <DateField.Group>
                        <DateField.Input>
                            {(segment) => <DateField.Segment segment={segment} />}
                        </DateField.Input>
                    </DateField.Group>
                </DateField>




                <Button
                    onClick={bookingHandler}
                    className="w-full bg-zinc-900 hover:bg-black text-white rounded-2xl py-7 text-base font-semibold transition-all active:scale-[0.985]"
                    size="lg"
                    isDisabled={car.availabilityStatus !== "Available"}
                >
                    {car.availabilityStatus === "Available"
                        ? "Book This Car"
                        : "Currently Unavailable"}
                </Button>

            </Card>
        </div>
    );
};

export default BookingActionCard;


