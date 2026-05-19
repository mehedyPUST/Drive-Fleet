"use client";

import { Avatar, Button, Dropdown, Label } from "@heroui/react";

export function UserDropDown({ user }) {
    return (
        <Dropdown>
            <Button aria-label="Menu" variant="secondary">
                <Avatar>
                    <Avatar.Image alt="John Doe" src={user.image} />
                    <Avatar.Fallback>JD</Avatar.Fallback>
                </Avatar>
            </Button>
            <Dropdown.Popover>
                <Dropdown.Menu>
                    <Dropdown.Item key="profile" href="/profile">Profile</Dropdown.Item>
                    <Dropdown.Item key="my-added-cars" href="/my-added-cars">My Added Cars</Dropdown.Item>
                    <Dropdown.Item key="my-bookings" href="/my-bookings">My Bookings</Dropdown.Item>
                    <Dropdown.Item key="add-car" href="/add-car">Add Car</Dropdown.Item>
                    <Dropdown.Item key="logout" className="text-danger" color="danger" onPress={''}>
                        Logout
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown.Popover>
        </Dropdown>
    );
}