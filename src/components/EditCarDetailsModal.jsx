"use client";

import { authClient } from "@/lib/auth-client";
import { Button, FieldError, Input, Label, Modal, Surface, TextField, Select, ListBox, TextArea } from "@heroui/react";
import { BiEdit } from "react-icons/bi";

const EditCarDetailsModal = ({ car }) => {

    const { _id, availabilityStatus, description, pickupLocation, seatCapacity, imageUrl, carType, dailyRentPrice, carName } = car

    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const car = Object.fromEntries(formData.entries())
        console.log(car)


        const { data: tokenData } = await authClient.token()
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/car/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(car)
        })

        const carData = await res.json()
        console.log(carData)
    }

    return (
        <Modal size="2xl">
            <div className="flex gap-3  items-center">
                <Button variant="outline" className={'rounded-none'}>
                    <BiEdit /> Update Details
                </Button>
            </div>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-4xl md:max-w-5xl lg:max-w-6xl">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <BiEdit className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Edit Car Details</Modal.Heading>
                            <p className="mt-1.5 text-sm leading-5 text-muted">
                                Update the car information below.
                            </p>
                        </Modal.Header>
                        <Modal.Body className="p-6 max-h-[80vh] overflow-y-auto">
                            <Surface variant="default">
                                <form onSubmit={onSubmit} className="p-6 md:p-8 space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Car Name */}
                                        <div className="md:col-span-2">
                                            <TextField defaultValue={carName} name="carName" isRequired>
                                                <Label className="text-gray-700 dark:text-gray-300 font-medium">Car Name</Label>
                                                <Input
                                                    placeholder="e.g., Hyundai 2026, Toyota Camry"
                                                    className="rounded-xl border-gray-300 focus:border-green-500 transition-all"
                                                    size="lg"
                                                />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                        {/* Daily Rent Price */}
                                        <TextField name="dailyRentPrice" type='number' isRequired defaultValue={dailyRentPrice}>
                                            <Label className="text-gray-700 dark:text-gray-300 font-medium">Daily Rent Price (USD)</Label>
                                            <Input
                                                placeholder="120"
                                                className="rounded-xl"
                                                size="lg"
                                            />
                                            <FieldError />
                                        </TextField>

                                        {/* Car Type */}
                                        <div>
                                            <Select defaultValue={carType}
                                                name="carType"
                                                isRequired
                                                className="w-full"
                                                placeholder="Select Type"
                                                size="lg"
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
                                            <TextField name="imageUrl" isRequired defaultValue={imageUrl}>
                                                <Label className="text-gray-700 dark:text-gray-300 font-medium">Image URL</Label>
                                                <Input
                                                    type="url"
                                                    placeholder="https://i.ibb.co.com/your-image.jpg"
                                                    className="rounded-xl"
                                                    size="lg"
                                                />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                        {/* Seat Capacity */}
                                        <TextField name="seatCapacity" type="number" isRequired defaultValue={seatCapacity}>
                                            <Label className="text-gray-700 dark:text-gray-300 font-medium">Seats</Label>
                                            <Input
                                                type="number"
                                                placeholder="6"
                                                className="rounded-xl"
                                                size="lg"
                                            />
                                            <FieldError />
                                        </TextField>

                                        {/* Pickup location */}
                                        <TextField name="pickupLocation" isRequired defaultValue={pickupLocation}>
                                            <Label className="text-gray-700 dark:text-gray-300 font-medium">Pick-Up Location</Label>
                                            <Input
                                                placeholder="e.g., Downtown Hub, Airport"
                                                className="rounded-xl"
                                                size="lg"
                                            />
                                            <FieldError />
                                        </TextField>

                                        {/* Description */}
                                        <div className="md:col-span-2">
                                            <TextField name="description" isRequired defaultValue={description}>
                                                <Label className="text-gray-700 dark:text-gray-300 font-medium">Description</Label>
                                                <TextArea
                                                    placeholder="Describe the car's features, condition, mileage, and special equipment..."
                                                    className="rounded-xl"
                                                    rows={4}
                                                />
                                                <FieldError />
                                            </TextField>
                                        </div>
                                    </div>

                                    {/* Availability Status */}
                                    {/* <div>
                                        <TextField name="availabilityStatus" type="text" isRequired defaultValue={availabilityStatus}>
                                            <Label className="text-gray-700 dark:text-gray-300 font-medium">Availability Status</Label>
                                            <Input
                                                type="text"
                                                className="rounded-xl"
                                                placeholder="Available / Maintenance / Booked"
                                                size="lg"
                                            />
                                            <FieldError />
                                        </TextField>
                                    </div> */}


                                    <div>
                                        <Select
                                            name="availabilityStatus"
                                            isRequired
                                            className="w-full"
                                            placeholder="Select Availability Status"
                                            defaultSelectedKeys={availabilityStatus}
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
                                    <div className="flex justify-end gap-3">
                                        <Button slot="close" variant="secondary" size="lg">
                                            Cancel
                                        </Button>
                                        <Button type="submit" size="lg">Update Details</Button>
                                    </div>
                                </form>
                            </Surface>
                        </Modal.Body>
                        <Modal.Footer>
                            {/* Removed duplicate buttons from footer */}
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default EditCarDetailsModal;




