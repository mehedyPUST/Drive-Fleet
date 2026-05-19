
"use client";

import { authClient } from "@/lib/auth-client";
import { ChevronsDownWide } from "@gravity-ui/icons";
import { Avatar, Button, Dropdown } from "@heroui/react";
import { useRouter } from "next/navigation";

export function UserDropDown({ user }) {
    const router = useRouter();
    const handleSignOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/login");
                },
            },
        });
    }

    return (
        <Dropdown>
            <Button aria-label="Menu" variant="light" className="flex items-center gap-2 px-3 py-2 h-auto">
                <Avatar size="sm">
                    <Avatar.Image src={user.image} alt={user?.name || "User"} referrerPolicy="no-referrer" />
                    <Avatar.Fallback>{user?.name?.charAt(0) || "U"}</Avatar.Fallback>
                </Avatar >
                <div className="text-3xl font-bold" >
                    <span > <ChevronsDownWide /></span>
                </div>
            </Button>
            <Dropdown.Popover>
                <Dropdown.Menu>
                    <Dropdown.Item key="profile" href="/profile">{user.name}</Dropdown.Item>
                    <Dropdown.Item key="my-added-cars" href="/my-added-cars">My Added Cars</Dropdown.Item>
                    <Dropdown.Item key="my-bookings" href="/my-bookings">My Bookings</Dropdown.Item>
                    <Dropdown.Item key="add-car" href="/add-car">Add Car</Dropdown.Item>
                    <Dropdown.Item key="logout" className="text-danger" color="danger" onPress={handleSignOut}>
                        Logout
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown.Popover>
        </Dropdown>
    );
}