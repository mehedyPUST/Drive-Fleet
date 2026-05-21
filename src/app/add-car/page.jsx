


'use client'

import { FieldError, Input, Label, TextField, Select, ListBox, TextArea, Button, Card } from '@heroui/react';
import React from 'react';
import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';

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

        // console.log(carDataWithUser)

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/car`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(carDataWithUser)
            })




            if (res.ok) {
                const carData = await res.json()
                console.log('Car added:', carData)
                toast.success('Successfully Added Car!')
                e.target.reset()
            } else {
                toast.error("This didn't work.")
            }
        } catch (error) {
            console.error('Error:', error)
            toast.error("This didn't work.")
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
