
// 'use client'
// import { useState } from 'react';
// import { authClient } from '@/lib/auth-client';
// import { Button, Card, FieldError, Label, ListBox, Select, TextArea, TextField,DateField } from '@heroui/react';

// import toast from 'react-hot-toast';

// const BookingActionCard = ({ car }) => {
//     const { data: session } = authClient.useSession();
//     const user = session?.user;


//     const [needDriver, setNeedDriver] = useState('');
//     const [specialNote, setSpecialNote] = useState('');
//      const [departureDate, setDepartureDate] = useState(null);
    

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
//             specialNote,
//             departureDate: new Date(departureDate)
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

//  <DateField onChange={setDepartureDate} className="w-[256px]" name="date">
//         <Label>Departure Date</Label>
//         <DateField.Group>
//           <DateField.Input>
//             {(segment) => <DateField.Segment segment={segment} />}
//           </DateField.Input>
//         </DateField.Group>
//       </DateField>
               

          


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




'use client'
import { useState } from 'react';
import { authClient } from '@/lib/auth-client';
import {
    Button,
    Card,
    Label,
    ListBox,
    Select,
    DateField
} from '@heroui/react';

import toast from 'react-hot-toast';

const BookingActionCard = ({ car }) => {
    const { data: session } = authClient.useSession();
    const user = session?.user;

    const [needDriver, setNeedDriver] = useState('');
    const [specialNote, setSpecialNote] = useState('');

    // Departure Date
    const [departureDate, setDepartureDate] = useState(null);

    // Dropping Date
    const [droppingDate, setDroppingDate] = useState(null);

    const bookingHandler = async () => {

        // Required Validation
        if (!needDriver || !departureDate || !droppingDate) {
            return toast.error('Please fill all required fields!');
        }

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

            departureDate: departureDate.toString(),
            droppingDate: droppingDate.toString(),
        };

        const { data: tokenData } = await authClient.token();

        const res = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/booking`,
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${tokenData?.token}`
                },
                body: JSON.stringify(bookingData)
            }
        );

        const data = await res.json();

        console.log('booking er data ', data);

        toast.success(
            `Booking ${car.carName} is successful! Welcome to Drive Fleet.`
        );
    };

    return (
        <div>
            <Card className='rounded-none border p-5 space-y-4'>

                <p>Book This Car at</p>

                <p className='text-3xl text-green-500 font-bold'>
                    $ {car.dailyRentPrice}
                </p>

                <p>Per Day</p>

                {/* Need Driver */}
                <Select
                    isRequired
                    className="w-full"
                    placeholder="Select Your Option"
                    selectedKeys={needDriver ? [needDriver] : []}
                    onSelectionChange={(keys) => {
                        const value = Array.from(keys)[0];
                        setNeedDriver(value);
                    }}
                >
                    <Label>Need Driver</Label>

                    <Select.Trigger className="rounded-sm">
                        <Select.Value />
                        <Select.Indicator />
                    </Select.Trigger>

                    <Select.Popover>
                        <ListBox className='rounded-sm'>
                            <ListBox.Item id="Yes">
                                Yes
                            </ListBox.Item>

                            <ListBox.Item id="No">
                                No
                            </ListBox.Item>
                        </ListBox>
                    </Select.Popover>
                </Select>

                {/* Departure Date */}
                <DateField
                    isRequired
                    value={departureDate}
                    onChange={setDepartureDate}
                    className="w-full"
                    name="departureDate"
                >
                    <Label>Departure Date</Label>

                    <DateField.Group>
                        <DateField.Input>
                            {(segment) => (
                                <DateField.Segment segment={segment} />
                            )}
                        </DateField.Input>
                    </DateField.Group>
                </DateField>

                {/* Dropping Date */}
                <DateField
                    isRequired
                    value={droppingDate}
                    onChange={setDroppingDate}
                    className="w-full"
                    name="droppingDate"
                >
                    <Label>Dropping Date</Label>

                    <DateField.Group>
                        <DateField.Input>
                            {(segment) => (
                                <DateField.Segment segment={segment} />
                            )}
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


