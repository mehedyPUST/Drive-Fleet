
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


'use client'
import { useState } from 'react';
import { authClient } from '@/lib/auth-client';
import { Button, Card, FieldError, Label, ListBox, Select, TextArea, TextField, DatePicker } from '@heroui/react';
import { parseDate } from '@internationalized/date';
import toast from 'react-hot-toast';

const BookingActionCard = ({ car }) => {
    const { data: session } = authClient.useSession();
    const user = session?.user;

    const [needDriver, setNeedDriver] = useState('');
    const [specialNote, setSpecialNote] = useState('');
    const [pickupDate, setPickupDate] = useState(null);
    const [dropoffDate, setDropoffDate] = useState(null);

    const bookingHandler = async () => {
        if (!user) {
            toast.error("Please login to book a car!");
            return;
        }

     
        if (!pickupDate || !dropoffDate) {
            toast.error("Please select both pickup and dropoff dates!");
            return;
        }

       
        const pickupDateTime = new Date(pickupDate.year, pickupDate.month - 1, pickupDate.day);
        const dropoffDateTime = new Date(dropoffDate.year, dropoffDate.month - 1, dropoffDate.day);
        const bookingDateTime = new Date();

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
            pickupDate: pickupDateTime.toISOString(),
            dropoffDate: dropoffDateTime.toISOString(),
            bookingDate: bookingDateTime.toISOString()
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
        
        if (res.ok) {
            toast.success(`Booking ${car.carName} is successful! Welcome to Drive Fleet.`);
            // বুকিং সফল হলে ফর্ম রিসেট করুন
            setPickupDate(null);
            setDropoffDate(null);
            setNeedDriver('');
            setSpecialNote('');
        } else {
            toast.error("Booking failed! Please try again.");
        }
    };

    return (
        <div>
            <Card className='rounded-none border p-5 space-y-4'>
                <p className='text-gray-600 font-medium'>Book This Car at</p>
                <p className='text-3xl sm:text-4xl text-green-500 font-bold'>$ {car.dailyRentPrice}</p>
                <p className='text-gray-500 text-sm'>Per Day</p>

                {/* Pickup Date Picker */}
                <div className="space-y-2">
                    <Label className="text-sm font-medium">Pickup Date *</Label>
                    <DatePicker 
                        className="w-full"
                        value={pickupDate}
                        onChange={setPickupDate}
                        minValue={parseDate(new Date().toISOString().split('T')[0])}
                        isRequired
                    />
                </div>

                {/* Dropoff Date Picker */}
                <div className="space-y-2">
                    <Label className="text-sm font-medium">Dropoff Date *</Label>
                    <DatePicker 
                        className="w-full"
                        value={dropoffDate}
                        onChange={setDropoffDate}
                        minValue={pickupDate ? parseDate(`${pickupDate.year}-${String(pickupDate.month).padStart(2, '0')}-${String(pickupDate.day).padStart(2, '0')}`) : parseDate(new Date().toISOString().split('T')[0])}
                        isRequired
                        isDisabled={!pickupDate}
                    />
                </div>

                {/* Need Driver Select */}
                <Select
                    name="category"
                    isRequired
                    className="w-full"
                    placeholder="Select Your Option"
                    selectedKeys={needDriver ? [needDriver] : []}
                    onSelectionChange={(keys) => setNeedDriver(Array.from(keys)[0])}
                >
                    <Label>Need Driver</Label>
                    <Select.Trigger className="rounded-sm">
                        <Select.Value />
                        <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                        <ListBox className='rounded-sm'>
                            <ListBox.Item key="Yes" textValue="Yes">Yes</ListBox.Item>
                            <ListBox.Item key="No" textValue="No">No</ListBox.Item>
                        </ListBox>
                    </Select.Popover>
                </Select>

                {/* Special Note */}
                <div className="">
                    <TextField name="description">
                        <Label>Special Note (Optional)</Label>
                        <TextArea
                            placeholder="Any special requests or instructions..."
                            className="rounded-sm"
                            value={specialNote}
                            onChange={(e) => setSpecialNote(e.target.value)}
                        />
                        <FieldError />
                    </TextField>
                </div>

                {/* Booking Button */}
                <Button
                    onClick={bookingHandler}
                    className="w-full bg-gradient-to-r from-green-600 to-amber-600 hover:from-green-700 hover:to-amber-700 text-white rounded-xl py-6 text-base font-semibold transition-all active:scale-[0.985] shadow-md"
                    size="lg"
                    isDisabled={car.availabilityStatus !== "Available" || !pickupDate || !dropoffDate}
                >
                    {car.availabilityStatus === "Available"
                        ? (pickupDate && dropoffDate ? "Book This Car" : "Select Dates to Book")
                        : "Currently Unavailable"}
                </Button>

            </Card>
        </div>
    );
};

export default BookingActionCard;
