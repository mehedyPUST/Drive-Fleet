






// // // 'use client'

// // // import { FieldError, Input, Label, TextField, Select, ListBox, TextArea, Button, Card } from '@heroui/react';
// // // import React from 'react';

// // // const AddCarPage = () => {
// // //     return (
// // //         <div className='w-11/12 mx-auto'>
// // //             <h2 className='text-3xl font-bold text-green-500'> Add Car</h2>

// // //             <Card>

// // //                 <form
// // //                     className="p-10 space-y-8"
// // //                 // onSubmit={onSubmit}
// // //                 >
// // //                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// // //                         {/* Destination Name */}
// // //                         <div className="md:col-span-2">
// // //                             <TextField name="carName" isRequired>
// // //                                 <Label>Car Name</Label>
// // //                                 <Input placeholder="Hundai 2026" className="rounded-2xl" />
// // //                                 <FieldError />
// // //                             </TextField>
// // //                         </div>

// // //                         {/* Country */}
// // //                         <TextField name="dailyRentPrice" type='number' isRequired>
// // //                             <Label>Daily Rent Price (USD)</Label>
// // //                             <Input placeholder="120 " className="rounded-2xl" />
// // //                             <FieldError />
// // //                         </TextField>

// // //                         {/* Category - Updated Select Component */}
// // //                         <div>
// // //                             <Select
// // //                                 name="carType"
// // //                                 isRequired
// // //                                 className="w-full"
// // //                                 placeholder="Select Type"
// // //                             >
// // //                                 <Label>Car Type</Label>
// // //                                 <Select.Trigger className="rounded-2xl">
// // //                                     <Select.Value />
// // //                                     <Select.Indicator />
// // //                                 </Select.Trigger>
// // //                                 <Select.Popover>
// // //                                     <ListBox>
// // //                                         <ListBox.Item id="SUV" textValue="SUV">
// // //                                             SUV
// // //                                             <ListBox.ItemIndicator />
// // //                                         </ListBox.Item>
// // //                                         <ListBox.Item id="Sedan" textValue="Sedan">
// // //                                             Sedan
// // //                                             <ListBox.ItemIndicator />
// // //                                         </ListBox.Item>
// // //                                         <ListBox.Item id="Hatchback" textValue="Hatchback">
// // //                                             Hatchback
// // //                                             <ListBox.ItemIndicator />
// // //                                         </ListBox.Item>
// // //                                         <ListBox.Item id="Luxury" textValue="Luxury">
// // //                                             Luxury
// // //                                             <ListBox.ItemIndicator />
// // //                                         </ListBox.Item>
// // //                                         <ListBox.Item id="Sports" textValue="Sports">
// // //                                             Sports
// // //                                             <ListBox.ItemIndicator />
// // //                                         </ListBox.Item>
// // //                                         <ListBox.Item id="Electric" textValue="Electric">
// // //                                             Electric
// // //                                             <ListBox.ItemIndicator />
// // //                                         </ListBox.Item>
// // //                                         <ListBox.Item id="Luxury SUV" textValue="Luxury SUV">
// // //                                             Luxury SUV
// // //                                             <ListBox.ItemIndicator />
// // //                                         </ListBox.Item>
// // //                                     </ListBox>
// // //                                 </Select.Popover>
// // //                             </Select>
// // //                         </div>

// // //                         <div className="md:col-span-2">
// // //                             <TextField name="imageUrl" isRequired>
// // //                                 <Label>Image URL</Label>
// // //                                 <Input
// // //                                     type="url"
// // //                                     placeholder="https://example.com/bali-paradise.jpg"
// // //                                     className="rounded-2xl"
// // //                                 />
// // //                                 <FieldError />
// // //                             </TextField>
// // //                         </div>


// // //                         {/* Price */}
// // //                         <TextField name="seatCapacity" type="number" isRequired>
// // //                             <Label>Seats</Label>
// // //                             <Input
// // //                                 type="number"
// // //                                 placeholder="6"
// // //                                 className="rounded-2xl"
// // //                             />
// // //                             <FieldError />
// // //                         </TextField>

// // //                         {/* Pickup location */}
// // //                         <TextField name="pickUpLocation" isRequired>
// // //                             <Label>Pick-Up Location</Label>
// // //                             <Input
// // //                                 placeholder="Home"
// // //                                 className="rounded-2xl"
// // //                             />
// // //                             <FieldError />
// // //                         </TextField>



// // //                         {/* Image URL - Removed preview */}


// // //                         {/* Description */}
// // //                         <div className="md:col-span-2">
// // //                             <TextField name="description" isRequired>
// // //                                 <Label>Description</Label>
// // //                                 <TextArea
// // //                                     placeholder="Describe the travel experience..."
// // //                                     className="rounded-3xl"
// // //                                 />
// // //                                 <FieldError />
// // //                             </TextField>
// // //                         </div>
// // //                     </div>

// // //                     {/* Departure Date */}
// // //                     <div className="md:col-span-2">
// // //                         <TextField name="availabilityStatus" type="text" isRequired>
// // //                             <Label>Availability Status</Label>
// // //                             <Input type="text" className="rounded-2xl" placeholder='Available/Maintenance/Booked' />
// // //                             <FieldError />
// // //                         </TextField>
// // //                     </div>


// // //                     {/* Buttons */}

// // //                     <Button
// // //                         type="submit"
// // //                         variant="outline"
// // //                         // isLoading={isPending}
// // //                         className=" rounded-none w-full bg-cyan-500 text-white"
// // //                     >
// // //                         {/* {isPending ? "Adding Package..." : "Add Travel Package"} */}
// // //                         Add Car
// // //                     </Button>
// // //                 </form>

// // //             </Card>
// // //         </div>
// // //     );
// // // };

// // // export default AddCarPage;

// // 'use client'

// // import { FieldError, Input, Label, TextField, Select, ListBox, TextArea, Button, Card } from '@heroui/react';
// // import React from 'react';
// // import { authClient } from '@/lib/auth-client';
// // const AddCarPage = () => {
// //     const { data: session } = authClient.useSession();
// //     const user = session?.user;
// //     // console.log(user)

// //     console.log(user.id)


// //     const onSubmit = async (e) => {
// //         e.preventDefault()
// //         const formData = new FormData(e.currentTarget)
// //         const car = Object.fromEntries(formData.entries())
// //         // console.log(car)



// //         const carDataWithUser = {
// //             carName: car.carName,
// //             seatCapacity: car.seatCapacity,
// //             pickUpLocation: car.pickUpLocation,
// //             imageUrl: car.imageUrl,
// //             description: car.description,
// //             dailyRentPrice: car.dailyRentPrice,
// //             carType: car.carType,
// //             availabilityStatus: car.availabilityStatus,
// //             addedBy: user.id
// //         }


// //         const res = await fetch('http://localhost:5000/car', {
// //             method: 'POST',
// //             headers: {
// //                 'content-type': 'application/json'
// //             },
// //             body: JSON.stringify(carDataWithUser)
// //         })

// //         const carData = await res.json()
// //         console.log(carData)
// //     }


// //     return (
// //         <div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-8 px-4 sm:px-6'>
// //             <div className='w-full max-w-6xl mx-auto'>
// //                 <div className="mb-8">
// //                     <h2 className='text-4xl font-bold bg-gradient-to-r from-green-500 to-amber-500 bg-clip-text text-transparent inline-block'>
// //                         Add Car
// //                     </h2>
// //                     <p className="text-gray-600 dark:text-gray-400 mt-2">List your vehicle on DriveFleet</p>
// //                 </div>

// //                 <Card className="shadow-xl border-0 overflow-hidden">
// //                     {/* Card Header */}
// //                     <div className="bg-gradient-to-r w-full  from-green-500 to-amber-500 px-6  py-4">
// //                         <h3 className="text-white text-lg font-semibold">Car Information</h3>
// //                     </div>

// //                     <form onSubmit={onSubmit} className="p-6 md:p-8 space-y-6">
// //                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                             {/* Car Name */}
// //                             <div className="md:col-span-2">
// //                                 <TextField name="carName" isRequired>
// //                                     <Label className="text-gray-700 dark:text-gray-300 font-medium">Car Name</Label>
// //                                     <Input
// //                                         placeholder="e.g., Hyundai 2026, Toyota Camry"
// //                                         className="rounded-xl border-gray-300 focus:border-green-500 transition-all"
// //                                     />
// //                                     <FieldError />
// //                                 </TextField>
// //                             </div>

// //                             {/* Daily Rent Price */}
// //                             <TextField name="dailyRentPrice" type='number' isRequired>
// //                                 <Label className="text-gray-700 dark:text-gray-300 font-medium">Daily Rent Price (USD)</Label>
// //                                 <Input
// //                                     placeholder="120"
// //                                     className="rounded-xl"
// //                                 />
// //                                 <FieldError />
// //                             </TextField>

// //                             {/* Car Type */}
// //                             <div>
// //                                 <Select
// //                                     name="carType"
// //                                     isRequired
// //                                     className="w-full"
// //                                     placeholder="Select Type"
// //                                 >
// //                                     <Label className="text-gray-700 dark:text-gray-300 font-medium">Car Type</Label>
// //                                     <Select.Trigger className="rounded-xl">
// //                                         <Select.Value />
// //                                         <Select.Indicator />
// //                                     </Select.Trigger>
// //                                     <Select.Popover>
// //                                         <ListBox>
// //                                             <ListBox.Item id="SUV" textValue="SUV">
// //                                                 SUV
// //                                                 <ListBox.ItemIndicator />
// //                                             </ListBox.Item>
// //                                             <ListBox.Item id="Sedan" textValue="Sedan">
// //                                                 Sedan
// //                                                 <ListBox.ItemIndicator />
// //                                             </ListBox.Item>
// //                                             <ListBox.Item id="Hatchback" textValue="Hatchback">
// //                                                 Hatchback
// //                                                 <ListBox.ItemIndicator />
// //                                             </ListBox.Item>
// //                                             <ListBox.Item id="Luxury" textValue="Luxury">
// //                                                 Luxury
// //                                                 <ListBox.ItemIndicator />
// //                                             </ListBox.Item>
// //                                             <ListBox.Item id="Sports" textValue="Sports">
// //                                                 Sports
// //                                                 <ListBox.ItemIndicator />
// //                                             </ListBox.Item>
// //                                             <ListBox.Item id="Electric" textValue="Electric">
// //                                                 Electric
// //                                                 <ListBox.ItemIndicator />
// //                                             </ListBox.Item>
// //                                             <ListBox.Item id="Luxury SUV" textValue="Luxury SUV">
// //                                                 Luxury SUV
// //                                                 <ListBox.ItemIndicator />
// //                                             </ListBox.Item>
// //                                         </ListBox>
// //                                     </Select.Popover>
// //                                 </Select>
// //                             </div>

// //                             {/* Image URL */}
// //                             <div className="md:col-span-2">
// //                                 <TextField name="imageUrl" isRequired>
// //                                     <Label className="text-gray-700 dark:text-gray-300 font-medium">Image URL</Label>
// //                                     <Input
// //                                         type="url"
// //                                         placeholder="https://i.ibb.co.com/your-image.jpg"
// //                                         className="rounded-xl"
// //                                     />
// //                                     <FieldError />
// //                                 </TextField>
// //                             </div>

// //                             {/* Seat Capacity */}
// //                             <TextField name="seatCapacity" type="number" isRequired>
// //                                 <Label className="text-gray-700 dark:text-gray-300 font-medium">Seats</Label>
// //                                 <Input
// //                                     type="number"
// //                                     placeholder="6"
// //                                     className="rounded-xl"
// //                                 />
// //                                 <FieldError />
// //                             </TextField>

// //                             {/* Pickup location */}
// //                             <TextField name="pickUpLocation" isRequired>
// //                                 <Label className="text-gray-700 dark:text-gray-300 font-medium">Pick-Up Location</Label>
// //                                 <Input
// //                                     placeholder="e.g., Downtown Hub, Airport"
// //                                     className="rounded-xl"
// //                                 />
// //                                 <FieldError />
// //                             </TextField>

// //                             {/* Description */}
// //                             <div className="md:col-span-2">
// //                                 <TextField name="description" isRequired>
// //                                     <Label className="text-gray-700 dark:text-gray-300 font-medium">Description</Label>
// //                                     <TextArea
// //                                         placeholder="Describe the car's features, condition, mileage, and special equipment..."
// //                                         className="rounded-xl"
// //                                     />
// //                                     <FieldError />
// //                                 </TextField>
// //                             </div>
// //                         </div>

// //                         {/* Availability Status */}
// //                         <div>
// //                             <TextField name="availabilityStatus" type="text" isRequired>
// //                                 <Label className="text-gray-700 dark:text-gray-300 font-medium">Availability Status</Label>
// //                                 <Input
// //                                     type="text"
// //                                     className="rounded-xl"
// //                                     placeholder="Available / Maintenance / Booked"
// //                                 />
// //                                 <FieldError />
// //                             </TextField>
// //                         </div>

// //                         {/* Buttons */}
// //                         <div className="flex gap-4 pt-4">
// //                             <Button
// //                                 type="button"
// //                                 variant="bordered"
// //                                 className="rounded-xl flex-1 border-gray-300 hover:border-red-500 text-gray-700 hover:text-red-500"
// //                                 onPress={() => window.history.back()}
// //                             >
// //                                 Cancel
// //                             </Button>
// //                             <Button
// //                                 type="submit"
// //                                 className="rounded-xl flex-1 bg-gradient-to-r from-green-500 to-amber-500 text-white font-semibold hover:shadow-lg transition-all"
// //                             >
// //                                 Add Car
// //                             </Button>
// //                         </div>
// //                     </form>
// //                 </Card>
// //             </div>
// //         </div>
// //     );
// // };

// // export default AddCarPage;


// 'use client'

// import { FieldError, Input, Label, TextField, Select, ListBox, TextArea, Button, Card } from '@heroui/react';
// import React, { useState, useEffect } from 'react';
// import { authClient } from '@/lib/auth-client';
// import { useRouter } from 'next/navigation';

// const AddCarPage = () => {
//     const { data: session, isPending: sessionLoading } = authClient.useSession();
//     const user = session?.user;
//     const router = useRouter();
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [error, setError] = useState('');

//     // Debug: Log user info
//     useEffect(() => {
//         if (user) {
//             console.log('User ID:', user.id);
//             console.log('User email:', user.email);
//         }
//     }, [user]);

//     const onSubmit = async (e) => {
//         e.preventDefault();
//         setError('');

//         // Check if user is logged in
//         if (!user || !user.id) {
//             setError('You must be logged in to add a car');
//             return;
//         }

//         setIsSubmitting(true);

//         try {
//             const formData = new FormData(e.currentTarget);

//             // Get availability status from the select element
//             const availabilityStatusSelect = e.currentTarget.querySelector('select[name="availabilityStatus"]');
//             const availabilityStatus = availabilityStatusSelect ? availabilityStatusSelect.value : 'Available';

//             const carDataWithUser = {
//                 carName: formData.get('carName'),
//                 seatCapacity: parseInt(formData.get('seatCapacity')),
//                 pickUpLocation: formData.get('pickUpLocation'),
//                 imageUrl: formData.get('imageUrl'),
//                 description: formData.get('description'),
//                 dailyRentPrice: parseFloat(formData.get('dailyRentPrice')),
//                 carType: formData.get('carType'),
//                 availabilityStatus: availabilityStatus,
//                 addedBy: user.id,  // Using the user ID from session
//                 createdAt: new Date().toISOString()
//             };

//             console.log('Sending car data:', carDataWithUser);

//             const res = await fetch('http://localhost:5000/car', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(carDataWithUser)
//             });

//             if (!res.ok) {
//                 throw new Error(`HTTP error! status: ${res.status}`);
//             }

//             const carData = await res.json();
//             console.log('Car added successfully:', carData);
//             console.log(carData)
//             // Show success message and redirect
//             alert('Car added successfully!');
//             // router.push('/my-added-cars'); // or wherever you want to redirect

//         } catch (error) {
//             console.error('Error adding car:', error);
//             setError(error.message || 'Failed to add car. Please try again.');
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     // Show loading state while session is loading
//     if (sessionLoading) {
//         return (
//             <div className="min-h-screen flex items-center justify-center">
//                 <div className="text-center">
//                     <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto"></div>
//                     <p className="mt-4 text-gray-600">Loading...</p>
//                 </div>
//             </div>
//         );
//     }

//     // Check if user is logged in
//     if (!user) {
//         return (
//             <div className="min-h-screen flex items-center justify-center">
//                 <Card className="p-8 text-center">
//                     <h2 className="text-2xl font-bold text-red-500 mb-4">Access Denied</h2>
//                     <p className="text-gray-600 mb-4">You must be logged in to add a car.</p>
//                     <Button
//                         color="primary"
//                         onPress={() => router.push('/login')}
//                         className="bg-gradient-to-r from-green-500 to-amber-500"
//                     >
//                         Go to Login
//                     </Button>
//                 </Card>
//             </div>
//         );
//     }

//     return (
//         <div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-8 px-4 sm:px-6'>
//             <div className='w-full max-w-6xl mx-auto'>
//                 <div className="mb-8">
//                     <h2 className='text-4xl font-bold bg-gradient-to-r from-green-500 to-amber-500 bg-clip-text text-transparent inline-block'>
//                         Add Car
//                     </h2>
//                     <p className="text-gray-600 dark:text-gray-400 mt-2">List your vehicle on DriveFleet</p>
//                 </div>

//                 {error && (
//                     <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
//                         {error}
//                     </div>
//                 )}

//                 <Card className="shadow-xl border-0 overflow-hidden">
//                     <div className="bg-gradient-to-r w-full from-green-500 to-amber-500 px-6 py-4">
//                         <h3 className="text-white text-lg font-semibold">Car Information</h3>
//                     </div>

//                     <form onSubmit={onSubmit} className="p-6 md:p-8 space-y-6">
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                             {/* Car Name */}
//                             <div className="md:col-span-2">
//                                 <TextField name="carName" isRequired>
//                                     <Label className="text-gray-700 dark:text-gray-300 font-medium">Car Name</Label>
//                                     <Input
//                                         placeholder="e.g., Hyundai 2026, Toyota Camry"
//                                         className="rounded-xl border-gray-300 focus:border-green-500 transition-all"
//                                     />
//                                     <FieldError />
//                                 </TextField>
//                             </div>

//                             {/* Daily Rent Price */}
//                             <TextField name="dailyRentPrice" type='number' isRequired>
//                                 <Label className="text-gray-700 dark:text-gray-300 font-medium">Daily Rent Price (USD)</Label>
//                                 <Input
//                                     placeholder="120"
//                                     className="rounded-xl"
//                                 />
//                                 <FieldError />
//                             </TextField>

//                             {/* Car Type */}
//                             <div>
//                                 <Select
//                                     name="carType"
//                                     isRequired
//                                     className="w-full"
//                                     placeholder="Select Type"
//                                 >
//                                     <Label className="text-gray-700 dark:text-gray-300 font-medium">Car Type</Label>
//                                     <Select.Trigger className="rounded-xl">
//                                         <Select.Value />
//                                         <Select.Indicator />
//                                     </Select.Trigger>
//                                     <Select.Popover>
//                                         <ListBox>
//                                             <ListBox.Item id="SUV" textValue="SUV">
//                                                 SUV
//                                                 <ListBox.ItemIndicator />
//                                             </ListBox.Item>
//                                             <ListBox.Item id="Sedan" textValue="Sedan">
//                                                 Sedan
//                                                 <ListBox.ItemIndicator />
//                                             </ListBox.Item>
//                                             <ListBox.Item id="Hatchback" textValue="Hatchback">
//                                                 Hatchback
//                                                 <ListBox.ItemIndicator />
//                                             </ListBox.Item>
//                                             <ListBox.Item id="Luxury" textValue="Luxury">
//                                                 Luxury
//                                                 <ListBox.ItemIndicator />
//                                             </ListBox.Item>
//                                             <ListBox.Item id="Sports" textValue="Sports">
//                                                 Sports
//                                                 <ListBox.ItemIndicator />
//                                             </ListBox.Item>
//                                             <ListBox.Item id="Electric" textValue="Electric">
//                                                 Electric
//                                                 <ListBox.ItemIndicator />
//                                             </ListBox.Item>
//                                             <ListBox.Item id="Luxury SUV" textValue="Luxury SUV">
//                                                 Luxury SUV
//                                                 <ListBox.ItemIndicator />
//                                             </ListBox.Item>
//                                         </ListBox>
//                                     </Select.Popover>
//                                 </Select>
//                             </div>

//                             {/* Image URL */}
//                             <div className="md:col-span-2">
//                                 <TextField name="imageUrl" isRequired>
//                                     <Label className="text-gray-700 dark:text-gray-300 font-medium">Image URL</Label>
//                                     <Input
//                                         type="url"
//                                         placeholder="https://i.ibb.co.com/your-image.jpg"
//                                         className="rounded-xl"
//                                     />
//                                     <FieldError />
//                                 </TextField>
//                             </div>

//                             {/* Seat Capacity */}
//                             <TextField name="seatCapacity" type="number" isRequired>
//                                 <Label className="text-gray-700 dark:text-gray-300 font-medium">Seats</Label>
//                                 <Input
//                                     type="number"
//                                     placeholder="6"
//                                     className="rounded-xl"
//                                 />
//                                 <FieldError />
//                             </TextField>

//                             {/* Pickup location */}
//                             <TextField name="pickUpLocation" isRequired>
//                                 <Label className="text-gray-700 dark:text-gray-300 font-medium">Pick-Up Location</Label>
//                                 <Input
//                                     placeholder="e.g., Downtown Hub, Airport"
//                                     className="rounded-xl"
//                                 />
//                                 <FieldError />
//                             </TextField>

//                             {/* Description */}
//                             <div className="md:col-span-2">
//                                 <TextField name="description" isRequired>
//                                     <Label className="text-gray-700 dark:text-gray-300 font-medium">Description</Label>
//                                     <TextArea
//                                         placeholder="Describe the car's features, condition, mileage, and special equipment..."
//                                         className="rounded-xl"
//                                     />
//                                     <FieldError />
//                                 </TextField>
//                             </div>
//                         </div>

//                         {/* Availability Status - Changed to Select */}
//                         <div>
//                             <Select
//                                 name="availabilityStatus"
//                                 isRequired
//                                 className="w-full"
//                                 defaultSelectedKeys={["Available"]}
//                             >
//                                 <Label className="text-gray-700 dark:text-gray-300 font-medium">Availability Status</Label>
//                                 <Select.Trigger className="rounded-xl">
//                                     <Select.Value />
//                                     <Select.Indicator />
//                                 </Select.Trigger>
//                                 <Select.Popover>
//                                     <ListBox>
//                                         <ListBox.Item id="Available" textValue="Available">
//                                             Available
//                                             <ListBox.ItemIndicator />
//                                         </ListBox.Item>
//                                         <ListBox.Item id="Maintenance" textValue="Maintenance">
//                                             Maintenance
//                                             <ListBox.ItemIndicator />
//                                         </ListBox.Item>
//                                         <ListBox.Item id="Booked" textValue="Booked">
//                                             Booked
//                                             <ListBox.ItemIndicator />
//                                         </ListBox.Item>
//                                     </ListBox>
//                                 </Select.Popover>
//                             </Select>
//                         </div>

//                         {/* Buttons */}
//                         <div className="flex gap-4 pt-4">
//                             <Button
//                                 type="button"
//                                 variant="bordered"
//                                 className="rounded-xl flex-1 border-gray-300 hover:border-red-500 text-gray-700 hover:text-red-500"
//                                 onPress={() => router.back()}
//                                 isDisabled={isSubmitting}
//                             >
//                                 Cancel
//                             </Button>
//                             <Button
//                                 type="submit"
//                                 className="rounded-xl flex-1 bg-gradient-to-r from-green-500 to-amber-500 text-white font-semibold hover:shadow-lg transition-all"
//                                 isLoading={isSubmitting}
//                                 isDisabled={isSubmitting}
//                             >
//                                 {isSubmitting ? 'Adding Car...' : 'Add Car'}
//                             </Button>
//                         </div>
//                     </form>
//                 </Card>
//             </div>
//         </div>
//     );
// };

// export default AddCarPage;


'use client'

import { FieldError, Input, Label, TextField, Select, ListBox, TextArea, Button, Card } from '@heroui/react';
import React from 'react';
import { authClient } from '@/lib/auth-client';

const AddCarPage = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;

    const onSubmit = async (e) => {
        e.preventDefault()

        // Check if user exists
        if (!user?.id) {
            alert('Please login first');
            return;
        }

        const formData = new FormData(e.currentTarget)
        const car = Object.fromEntries(formData.entries())

        const carDataWithUser = {
            carName: car.carName,
            seatCapacity: Number(car.seatCapacity),
            pickUpLocation: car.pickUpLocation,
            imageUrl: car.imageUrl,
            description: car.description,
            dailyRentPrice: Number(car.dailyRentPrice),
            carType: car.carType,
            availabilityStatus: car.availabilityStatus,
            addedBy: user.id
        }

        console.log(carDataWithUser)

        try {
            const res = await fetch('http://localhost:5000/car', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(carDataWithUser)
            })




            if (res.ok) {
                const carData = await res.json()
                console.log('Car added:', carData)
                alert('Car added successfully!')
                e.target.reset()
            } else {
                alert('Failed to add car')
            }
        } catch (error) {
            console.error('Error:', error)
            alert('Failed to add car')
        }
    }

    return (
        <div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-8 px-4 sm:px-6'>
            <div className='w-full max-w-6xl mx-auto'>
                <div className="mb-8">
                    <h2 className='text-4xl font-bold bg-gradient-to-r from-green-500 to-amber-500 bg-clip-text text-transparent inline-block'>
                        Add Car
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">List your vehicle on DriveFleet</p>
                </div>

                <Card className="shadow-xl border-0 overflow-hidden">
                    {/* Card Header */}
                    <div className="bg-gradient-to-r w-full from-green-500 to-amber-500 px-6 py-4">
                        <h3 className="text-white text-lg font-semibold">Car Information</h3>
                    </div>

                    <form onSubmit={onSubmit} className="p-6 md:p-8 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Car Name */}
                            <div className="md:col-span-2">
                                <TextField name="carName" isRequired>
                                    <Label className="text-gray-700 dark:text-gray-300 font-medium">Car Name</Label>
                                    <Input
                                        placeholder="e.g., Hyundai 2026, Toyota Camry"
                                        className="rounded-xl border-gray-300 focus:border-green-500 transition-all"
                                    />
                                    <FieldError />
                                </TextField>
                            </div>

                            {/* Daily Rent Price */}
                            <TextField name="dailyRentPrice" type='number' isRequired>
                                <Label className="text-gray-700 dark:text-gray-300 font-medium">Daily Rent Price (USD)</Label>
                                <Input
                                    placeholder="120"
                                    className="rounded-xl"
                                />
                                <FieldError />
                            </TextField>

                            {/* Car Type */}
                            <div>
                                <Select
                                    name="carType"
                                    isRequired
                                    className="w-full"
                                    placeholder="Select Type"
                                >
                                    <Label className="text-gray-700 dark:text-gray-300 font-medium">Car Type</Label>
                                    <Select.Trigger className="rounded-xl">
                                        <Select.Value />
                                        <Select.Indicator />
                                    </Select.Trigger>
                                    <Select.Popover>
                                        <ListBox>
                                            <ListBox.Item id="SUV" textValue="SUV">
                                                SUV
                                                <ListBox.ItemIndicator />
                                            </ListBox.Item>
                                            <ListBox.Item id="Sedan" textValue="Sedan">
                                                Sedan
                                                <ListBox.ItemIndicator />
                                            </ListBox.Item>
                                            <ListBox.Item id="Hatchback" textValue="Hatchback">
                                                Hatchback
                                                <ListBox.ItemIndicator />
                                            </ListBox.Item>
                                            <ListBox.Item id="Luxury" textValue="Luxury">
                                                Luxury
                                                <ListBox.ItemIndicator />
                                            </ListBox.Item>
                                            <ListBox.Item id="Sports" textValue="Sports">
                                                Sports
                                                <ListBox.ItemIndicator />
                                            </ListBox.Item>
                                            <ListBox.Item id="Electric" textValue="Electric">
                                                Electric
                                                <ListBox.ItemIndicator />
                                            </ListBox.Item>
                                            <ListBox.Item id="Luxury SUV" textValue="Luxury SUV">
                                                Luxury SUV
                                                <ListBox.ItemIndicator />
                                            </ListBox.Item>
                                        </ListBox>
                                    </Select.Popover>
                                </Select>
                            </div>

                            {/* Image URL */}
                            <div className="md:col-span-2">
                                <TextField name="imageUrl" isRequired>
                                    <Label className="text-gray-700 dark:text-gray-300 font-medium">Image URL</Label>
                                    <Input
                                        type="url"
                                        placeholder="https://i.ibb.co.com/your-image.jpg"
                                        className="rounded-xl"
                                    />
                                    <FieldError />
                                </TextField>
                            </div>

                            {/* Seat Capacity */}
                            <TextField name="seatCapacity" type="number" isRequired>
                                <Label className="text-gray-700 dark:text-gray-300 font-medium">Seats</Label>
                                <Input
                                    type="number"
                                    placeholder="6"
                                    className="rounded-xl"
                                />
                                <FieldError />
                            </TextField>

                            {/* Pickup location */}
                            <TextField name="pickUpLocation" isRequired>
                                <Label className="text-gray-700 dark:text-gray-300 font-medium">Pick-Up Location</Label>
                                <Input
                                    placeholder="e.g., Downtown Hub, Airport"
                                    className="rounded-xl"
                                />
                                <FieldError />
                            </TextField>

                            {/* Description */}
                            <div className="md:col-span-2">
                                <TextField name="description" isRequired>
                                    <Label className="text-gray-700 dark:text-gray-300 font-medium">Description</Label>
                                    <TextArea
                                        placeholder="Describe the car's features, condition, mileage, and special equipment..."
                                        className="rounded-xl"
                                    />
                                    <FieldError />
                                </TextField>
                            </div>
                        </div>

                        {/* Availability Status - Dropdown */}
                        <div>
                            <Select
                                name="availabilityStatus"
                                isRequired
                                className="w-full"
                                placeholder="Select Availability Status"
                                defaultSelectedKeys={["Available"]}
                            >
                                <Label className="text-gray-700 dark:text-gray-300 font-medium">Availability Status</Label>
                                <Select.Trigger className="rounded-xl">
                                    <Select.Value />
                                    <Select.Indicator />
                                </Select.Trigger>
                                <Select.Popover>
                                    <ListBox>
                                        <ListBox.Item id="Available" textValue="Available">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                                Available
                                            </div>
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="Maintenance" textValue="Maintenance">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                                Maintenance
                                            </div>
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="Booked" textValue="Booked">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                                Booked
                                            </div>
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                    </ListBox>
                                </Select.Popover>
                            </Select>
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-4 pt-4">
                            <Button
                                type="button"
                                variant="bordered"
                                className="rounded-xl flex-1 border-gray-300 hover:border-red-500 text-gray-700 hover:text-red-500"
                                onPress={() => window.history.back()}
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                className="rounded-xl flex-1 bg-gradient-to-r from-green-500 to-amber-500 text-white font-semibold hover:shadow-lg transition-all"
                            >
                                Add Car
                            </Button>
                        </div>
                    </form>
                </Card>
            </div>
        </div>
    );
};

export default AddCarPage;