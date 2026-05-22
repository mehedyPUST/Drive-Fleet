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

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/car`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(carDataWithUser)
            })

            if (res.ok) {
                await res.json()
                toast.success('Successfully Added Car!')
                e.target.reset()
            } else {
                toast.error("This didn't work.")
            }
        } catch (error) {
            toast.error("This didn't work.")
        }
    }

    return (
        <div className='min-h-screen bg-gray-50 py-10 px-4'>

            <div className='w-full max-w-5xl mx-auto'>

                <div className="mb-8 text-center sm:text-left">
                    <h2 className='text-3xl sm:text-4xl font-bold text-black'>
                        Add Car
                    </h2>
                    <p className="text-gray-600 mt-2">
                        List your vehicle on <span className="text-green-600 font-medium">DriveFleet</span>
                    </p>
                </div>

                <Card className="shadow-sm border border-gray-200 rounded-2xl overflow-hidden bg-white">

                    <div className="bg-black px-6 py-4">
                        <h3 className="text-white text-lg font-semibold">
                            Car Information
                        </h3>
                    </div>

                    <form onSubmit={onSubmit} className="p-6 md:p-8 space-y-6">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            <div className="md:col-span-2">
                                <TextField name="carName" isRequired>
                                    <Label className="text-gray-700 font-medium">Car Name</Label>
                                    <Input
                                        placeholder="e.g., Toyota Camry 2026"
                                        className="rounded-xl border-gray-300 focus:border-green-500"
                                    />
                                    <FieldError />
                                </TextField>
                            </div>

                            <TextField name="dailyRentPrice" type='number' isRequired>
                                <Label className="text-gray-700 font-medium">Daily Price (USD)</Label>
                                <Input placeholder="120" className="rounded-xl" />
                                <FieldError />
                            </TextField>

                            <Select name="carType" isRequired className="w-full" placeholder="Select Type">
                                <Label className="text-gray-700 font-medium">Car Type</Label>
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

                            <div className="md:col-span-2">
                                <TextField name="imageUrl" isRequired>
                                    <Label className="text-gray-700 font-medium">Image URL</Label>
                                    <Input placeholder="https://..." className="rounded-xl" />
                                    <FieldError />
                                </TextField>
                            </div>

                            <TextField name="seatCapacity" type="number" isRequired>
                                <Label className="text-gray-700 font-medium">Seats</Label>
                                <Input placeholder="5" className="rounded-xl" />
                                <FieldError />
                            </TextField>

                            <TextField name="pickUpLocation" isRequired>
                                <Label className="text-gray-700 font-medium">Pickup Location</Label>
                                <Input placeholder="Airport / City Center" className="rounded-xl" />
                                <FieldError />
                            </TextField>

                            <div className="md:col-span-2">
                                <TextField name="description" isRequired>
                                    <Label className="text-gray-700 font-medium">Description</Label>
                                    <TextArea placeholder="Car details..." className="rounded-xl" />
                                    <FieldError />
                                </TextField>
                            </div>

                        </div>

                        <div>
                            <Select
                                name="availabilityStatus"
                                isRequired
                                className="w-full"
                                placeholder="Select Availability Status"
                                defaultSelectedKeys={["Available"]}
                            >
                                <Label className="text-gray-700 dark:text-gray-300 font-medium">
                                    Availability Status
                                </Label>

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

                        <div className="flex gap-4 pt-6">

                            <Button
                                type="button"
                                variant="bordered"
                                className="flex-1 rounded-xl border-gray-300 text-gray-700 hover:border-red-500 hover:text-red-500"
                                onPress={() => window.history.back()}
                            >
                                Cancel
                            </Button>

                            <Button
                                type="submit"
                                className="flex-1 rounded-xl bg-black hover:bg-gray-900 text-white font-semibold"
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
